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
require("../../scss/components/song_view.scss");
var SongView = (function(_super) {
  __extends(SongView, _super);

  function SongView() {
    _super.apply(this, arguments);
  }
  SongView.prototype.render = function() {
    var cells = new Array();
    for (var x = 0; x < 1000; x++) {
      cells.push(React.createElement("tr", null,
      React.createElement("td", null, "Test")
    ));
  }
  return React.createElement("div", {
    className: "song-view custom-scrollbar"
  },
  React.createElement("h1", null, "Library"),
  React.createElement("table", null, cells));
};
return SongView;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SongView;
//# sourceMappingURL=song_view.js.map
