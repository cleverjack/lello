/**
 * Module dependencies.
 */

const async = require('async')
const express = require('express.oi')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const errorhandler = require('errorhandler')
const http = require('http')
const path = require('path')
const util = require(__dirname + '/util.js')
const mkdirp = require('mkdirp')
const proxy = require('express-http-proxy')
const basicAuth = require('basic-auth-connect')

var app = express().http().io()

var sessionOpts = {
	secret: 'nmpsecret',
	resave: true,
	saveUninitialized: true,
};
app.io.session(sessionOpts);

app.io.set('authorization', function handleAuth(handshakeData, accept) {
	// accept all requests
	accept(null, true);
});

// fetch the config directory
app.set('configDir', process.env.configDir || __dirname);

// all variables to be shared throughout the app
app.set('port', process.env.PORT || 4545);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.set('root', __dirname);
app.set('started', Date.now());
app.engine('html', require('swig').renderFile);

async.series([function createDatabaseDirectory(next) {
	// make sure the dbs directory is present
	mkdirp(app.get('configDir') + '/dbs/covers', next);
}, function databaseDirectoryCreated(next) {
	// attach the db to the app
	require(__dirname + '/db.js')(app);

	// patch the app
	require(__dirname + '/patches.js')(app);

	// attach the config
	app.set('config', require(__dirname + '/config')(app));

	next();
}, function setupAuth(next) {
	var config = app.get('config');

	// auth is only intended for use outside of electron
	if (config.auth &&
		config.auth.username !== undefined &&
		config.auth.password !== undefined &&
		!process.env.ELECTRON_ENABLED) {
		app.use(basicAuth(config.auth.username, config.auth.password));
	}
	next();
}, function setupEverythingElse(next) {
	// middleware to use in the app
	app.use(favicon(__dirname + '/static/images/favicon.ico'));
	app.use(bodyParser.urlencoded({
		extended: false
	}));
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(express.session(sessionOpts));
	app.use('/static', express.static(__dirname + '/static'));

	// dunno want to use or not?
	// proxy for itunes requests
	app.use('/proxy', proxy('https://itunes.apple.com', {
		forwardPath: function(req, res) {
			return require('url').parse(req.url).path;
		},
	}));

	// development only
	if (app.get('env') == 'development') {
		app.use(errorhandler());
	}

	require(__dirname + '/routes').createRoutes(app);

	app.listen(app.get('port'), function() {
		console.log('[lello] music server is listening on port ' + app.get('port'));
	});

	next();
}]);

module.exports = app;
