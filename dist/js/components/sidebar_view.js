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
require("../../scss/components/sidebar_view.scss");
var SidebarView = (function(_super) {
  __extends(SidebarView, _super);

  function SidebarView() {
    _super.apply(this, arguments);
  }
  SidebarView.prototype.render = function() {
    return React.createElement("div", {
      className: "sidebar-view",
      tabIndex: "0"
    },
    React.createElement("h3", null, "Sidebar")
  );
};
return SidebarView;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SidebarView;
//# sourceMappingURL=sidebar_view.js.map
