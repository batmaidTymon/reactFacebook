/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Facebook = (function (_super) {
    __extends(Facebook, _super);
    function Facebook(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state = {
            comments: [
                {
                    author: "hugo",
                    content: "hello world"
                }
            ]
        };
        return _this;
    }
    Facebook.prototype.renderComments = function () {
        return this.state.comments.map(function (comment) {
            return React.createElement("div", { className: "comment" },
                React.createElement("div", { className: "comment-author" }, comment.author),
                React.createElement("div", { className: "comment-content" }, comment.content));
        });
    };
    Facebook.prototype.render = function () {
        return React.createElement("div", { className: "posting" },
            React.createElement("div", { className: "posting-container" },
                React.createElement("div", { className: "posting-author" }, "Tymon"),
                React.createElement("div", { className: "posting-content" }, " wrote something on facebook!")),
            React.createElement("div", { className: "like-container" },
                React.createElement("i", { className: "fa fa-thumbs-up", "aria-hidden": "true" }),
                " ",
                React.createElement("span", null, "Like")),
            React.createElement("div", { className: "comments" },
                this.renderComments(),
                React.createElement("div", { className: "comment-new" },
                    React.createElement("form", { onSubmit: this.handleFormSubmitted.bind(this) },
                        React.createElement("input", { type: "text", className: "comment-input", placeholder: "write a comment", ref: "commentInput" })))));
    };
    Facebook.prototype.handleFormSubmitted = function (e) {
        e.preventDefault();
        var comment = {
            author: "Tymon",
            content: this.refs.commentInput.value
        };
        this.state.comments.push(comment);
        this.setState(this.state);
        this.refs.commentInput.value = "";
    };
    return Facebook;
}(React.Component));
exports.Facebook = Facebook;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var Facebook_1 = __webpack_require__(1);
ReactDOM.render(React.createElement(Facebook_1.Facebook, { compiler: "asfdasd", framework: "React" }), document.getElementById("example"));


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map