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
require('../../scss/components/content_container.scss');
var ContentContainer = (function(_super) {
  __extends(ContentContainer, _super);

  function ContentContainer() {
    _super.apply(this, arguments);
  }
  ContentContainer.prototype.render = function() {
    return React.createElement("div", {
      className: "custom-scrollbar page-wrapper",
      tabIndex: "0"
    });
  };
  return ContentContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ContentContainer;
//# sourceMappingURL=content_container.js.map
