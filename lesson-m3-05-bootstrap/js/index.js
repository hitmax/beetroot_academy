"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Alert", {
  enumerable: true,
  get: function get() {
    return _alert.default;
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _button.default;
  }
});
Object.defineProperty(exports, "Carousel", {
  enumerable: true,
  get: function get() {
    return _carousel.default;
  }
});
Object.defineProperty(exports, "Collapse", {
  enumerable: true,
  get: function get() {
    return _collapse.default;
  }
});
Object.defineProperty(exports, "Dropdown", {
  enumerable: true,
  get: function get() {
    return _dropdown.default;
  }
});
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _modal.default;
  }
});
Object.defineProperty(exports, "Popover", {
  enumerable: true,
  get: function get() {
    return _popover.default;
  }
});
Object.defineProperty(exports, "Scrollspy", {
  enumerable: true,
  get: function get() {
    return _scrollspy.default;
  }
});
Object.defineProperty(exports, "Tab", {
  enumerable: true,
  get: function get() {
    return _tab.default;
  }
});
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _toast.default;
  }
});
Object.defineProperty(exports, "Tooltip", {
  enumerable: true,
  get: function get() {
    return _tooltip.default;
  }
});
Object.defineProperty(exports, "Util", {
  enumerable: true,
  get: function get() {
    return _util.default;
  }
});

var _jquery = _interopRequireDefault(require("jquery"));

var _alert = _interopRequireDefault(require("./alert"));

var _button = _interopRequireDefault(require("./button"));

var _carousel = _interopRequireDefault(require("./carousel"));

var _collapse = _interopRequireDefault(require("./collapse"));

var _dropdown = _interopRequireDefault(require("./dropdown"));

var _modal = _interopRequireDefault(require("./modal"));

var _popover = _interopRequireDefault(require("./popover"));

var _scrollspy = _interopRequireDefault(require("./scrollspy"));

var _tab = _interopRequireDefault(require("./tab"));

var _toast = _interopRequireDefault(require("./toast"));

var _tooltip = _interopRequireDefault(require("./tooltip"));

var _util = _interopRequireDefault(require("./util"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.2.1): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
(function () {
  if (typeof _jquery.default === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }

  var version = _jquery.default.fn.jquery.split(' ')[0].split('.');

  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})();