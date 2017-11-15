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
require("../../scss/components/navigation.scss");
var SongView = (function(_super) {
  __extends(SongView, _super);

  function SongView() {
    _super.apply(this, arguments);
  }
  SongView.prototype.render = function() {
    return React.createElement("div", null,
    React.createElement("h1", null, "Songs!")
  );
};
return SongView;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SongView;
//# sourceMappingURL=not_found_view.js.map
