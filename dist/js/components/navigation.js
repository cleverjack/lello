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
var react_router_1 = require("react-router");
require("../../scss/components/navigation.scss");
var Navigation = (function(_super) {
  __extends(Navigation, _super);

  function Navigation() {
    _super.apply(this, arguments);
  }
  Navigation.prototype.render = function() {
    return React.createElement("nav", {
      className: "navbar navbar-default navbar-fixed-top",
      role: "navigation"
    },
    React.createElement("div", {
      className: "navbar-header"
    },
    React.createElement(react_router_1.Link, {
      className: "navbar-brand",
      to: "/"
    }, "lello"),
    React.createElement("button", {
      className: "navbar-toggle",
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbar-main"
    },
    React.createElement("span", {
      className: "icon-bar"
    }),
    React.createElement("span", {
      className: "icon-bar"
    }),
    React.createElement("span", {
      className: "icon-bar"
    }))),
    React.createElement("div", {
      className: "navbar-collapse collapse",
      id: "navbar-main"
    },
    React.createElement("ul", {
      className: "nav navbar-nav"
    },
    React.createElement("li", {
      className: "dropdown"
    },
    React.createElement("a", {
      className: "pointer dropdown-toggle",
      "data-toggle": "dropdown"
    },
    "Scan Library ",
    React.createElement("span", {
      className: "caret"
    })),
    React.createElement("ul", {
      className: "dropdown-menu",
      role: "menu"
    },
    React.createElement("li", null,
    React.createElement("a", {
      className: "pointer",
      id: "soft_scan"
    }, "Regular Scan")
  ),
  React.createElement("li", null,
  React.createElement("a", {
    className: "pointer",
    id: "hard_scan"
  }, "Hard Rescan")
))),
React.createElement("li", null,
React.createElement(react_router_1.Link, {
  className: "pointer",
  to: "sync"
}, "Sync Libraries")
)),
React.createElement("ul", {
  className: "nav navbar-nav pull-right"
},
React.createElement("li", {
  className: "dropdown"
},
React.createElement("a", {
  className: "pointer dropdown-toggle",
  "data-toggle": "dropdown"
},
"Fetch New Music ",
React.createElement("span", {
  className: "caret"
})),
React.createElement("ul", {
  className: "dropdown-menu",
  role: "menu"
},
React.createElement("li", null,
React.createElement("a", {
  className: "pointer",
  id: "soundcloud_fetch"
}, "From SoundCloud")
),
React.createElement("li", null,
React.createElement("a", {
  className: "pointer",
  id: "youtube_fetch"
}, "From Youtube")
))),
React.createElement("li", null,
React.createElement("a", {
  id: "open_settings",
  className: "pointer"
},
React.createElement("i", {
  className: "fa fa-cog"
}),
" Settings")
))));
};
return Navigation;
}(React.Component));
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Navigation;
//# sourceMappingURL=navigation.js.map
