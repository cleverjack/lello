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
require('../../scss/components/page_container.scss');
var PageContainer = (function(_super) {
  __extends(PageContainer, _super);

  function PageContainer() {
    _super.apply(this, arguments);
  }
  PageContainer.prototype.render = function() {
    return React.createElement("div", null,
    React.createElement(Navigation, null),
    React.createElement(ContentContainer, null));
  };
  return PageContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PageContainer;
//# sourceMappingURL=page_container.js.map
