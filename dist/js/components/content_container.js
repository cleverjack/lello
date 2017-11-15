"use strict";
var __extends = (this && this.__extends) || function(d, b) {
  for (var p in b)
  if (b.hasOwnProperty(p)) d[p] = b[p];

  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var sidebar_view_1 = require("./sidebar_view");
var footer_view_1 = require("./footer_view");
require("../../scss/components/content_container.scss");
var ContentContainer = (function(_super) {
  __extends(ContentContainer, _super);

  function ContentContainer() {
    _super.apply(this, arguments);
  }
  ContentContainer.prototype.render = function() {
    return React.createElement("div", {
      className: "content-container",
      tabIndex: "0"
    },
    React.createElement("div", {
      className: "content-container-body"
    },
    React.createElement(sidebar_view_1.default, null),
    this.props.children),
    React.createElement(footer_view_1.default, null));
  };
  return ContentContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContentContainer;
//# sourceMappingURL=content_container.js.map
