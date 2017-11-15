"use strict";
var __extends = (this && this.__extends) || function(d, b) {
  for (var p in b)
  if (b.hasOwnProperty(p)) d[p] = b[p];

  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var content_container_1 = require('./content_container');
var navigation_1 = require('./navigation');
var AppFrame = (function(_super) {
  __extends(AppFrame, _super);

  function AppFrame() {
    _super.apply(this, arguments);
  }
  AppFrame.prototype.render = function() {
    return React.createElement("div", null,
    React.createElement(navigation_1.Navigation, null),
    React.createElement(content_container_1.ContentContainer, {
      children: this.props.children
    }));
  };
  return AppFrame;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AppFrame;
//# sourceMappingURL=app_frame.js.map
