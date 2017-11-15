"use strict";
var React = require("react");
var react_router_1 = require("react-router");
var app_frame_1 = require("./components/app_frame");
var song_view_1 = require("./components/song_view");
var sync_view_1 = require("./components/sync_view");
var not_found_view_1 = require("./components/not_found_view");
var routeMap = (React.createElement(react_router_1.Route, {
  path: "/",
  component: app_frame_1.default
},
React.createElement(react_router_1.IndexRoute, {
  component: song_view_1.default
}),
React.createElement(react_router_1.Route, {
  path: "playlist/:id",
  component: song_view_1.default
}),
React.createElement(react_router_1.Route, {
  path: "sync",
  component: sync_view_1.default
}),
React.createElement(react_router_1.Route, {
  path: "*",
  component: not_found_view_1.default
})));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routeMap;
//# sourceMappingURL=routes.js.map
