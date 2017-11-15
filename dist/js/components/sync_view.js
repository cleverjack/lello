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
var SyncView = (function(_super) {
  __extends(SyncView, _super);

  function SyncView() {
    _super.apply(this, arguments);
  }
  SyncView.prototype.render = function() {
    return React.createElement("div", null,
    React.createElement("h1", null, "Sync View")
  );
};
return SyncView;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SyncView;
//# sourceMappingURL=sync_view.js.map
