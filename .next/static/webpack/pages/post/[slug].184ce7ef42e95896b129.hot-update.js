webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/Youtube.js":
/*!*******************************!*\
  !*** ./components/Youtube.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\TTL\\github\\bulletproof-next-app\\components\\Youtube.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Youtube = function Youtube(props) {
  var videoId = props.videoId,
      _props$width = props.width,
      width = _props$width === void 0 ? "100%" : _props$width,
      _props$height = props.height,
      height = _props$height === void 0 ? 366 : _props$height;
  var src = "https://www.youtube.com/embed/".concat(videoId);
  return __jsx("div", {
    className: "youtube-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("iframe", {
    width: width,
    height: height,
    src: src,
    frameborder: "0",
    allow: "autoplay; encrypted-media",
    allowFullScreen: "1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }));
};

_c = Youtube;
/* harmony default export */ __webpack_exports__["default"] = (Youtube);

var _c;

$RefreshReg$(_c, "Youtube");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Theme */ "./components/Theme.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/index.module.js");
/* harmony import */ var _components_Youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Youtube */ "./components/Youtube.js");
var _jsxFileName = "C:\\Users\\TTL\\github\\bulletproof-next-app\\pages\\post\\[slug].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Post(_ref) {
  var post = _ref.post;
  return __jsx(_components_Theme__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "post",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "time",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Published ", ms__WEBPACK_IMPORTED_MODULE_2___default()(Date.now() - post.createdAt, {
    long: true
  }), " ago"), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, post.title), __jsx("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: {
      overrides: {
        Youtube: {
          component: _components_Youtube__WEBPACK_IMPORTED_MODULE_4__["default"]
        }
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, post.content))));
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Zb3V0dWJlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0L1tzbHVnXS5qcyJdLCJuYW1lcyI6WyJZb3V0dWJlIiwicHJvcHMiLCJ2aWRlb0lkIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJQb3N0IiwicG9zdCIsIm1zIiwiRGF0ZSIsIm5vdyIsImNyZWF0ZWRBdCIsImxvbmciLCJ0aXRsZSIsIm92ZXJyaWRlcyIsImNvbXBvbmVudCIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFDekIsTUFBUUMsT0FBUixHQUFrREQsS0FBbEQsQ0FBUUMsT0FBUjtBQUFBLHFCQUFrREQsS0FBbEQsQ0FBaUJFLEtBQWpCO0FBQUEsTUFBaUJBLEtBQWpCLDZCQUF5QixNQUF6QjtBQUFBLHNCQUFrREYsS0FBbEQsQ0FBaUNHLE1BQWpDO0FBQUEsTUFBaUNBLE1BQWpDLDhCQUEwQyxHQUExQztBQUNBLE1BQU1DLEdBQUcsMkNBQW9DSCxPQUFwQyxDQUFUO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUVDLEtBRFQ7QUFFRSxVQUFNLEVBQUVDLE1BRlY7QUFHRSxPQUFHLEVBQUVDLEdBSFA7QUFJRSxlQUFXLEVBQUMsR0FKZDtBQUtFLFNBQUssRUFBQywyQkFMUjtBQU1FLG1CQUFlLEVBQUMsR0FObEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREY7QUFZRCxDQWhCRDs7S0FBTUwsTztBQWtCU0Esc0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFFQTtBQUNBOztBQUVlLFNBQVNNLElBQVQsT0FBd0I7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7QUFDckMsU0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FDLHlDQUFFLENBQUNDLElBQUksQ0FBQ0MsR0FBTCxLQUFhSCxJQUFJLENBQUNJLFNBQW5CLEVBQThCO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQTlCLENBRGYsU0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0wsSUFBSSxDQUFDTSxLQUFWLENBSkYsRUFLRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQ0UsV0FBTyxFQUFFO0FBQUVDLGVBQVMsRUFBRTtBQUFFZCxlQUFPLEVBQUU7QUFBRWUsbUJBQVMsRUFBRWYsMkRBQU9BO0FBQXBCO0FBQVg7QUFBYixLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHR08sSUFBSSxDQUFDUyxPQUhSLENBREYsQ0FMRixDQURGLENBREY7QUFpQkQ7S0FsQnVCVixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjE4NGNlN2VmNDJlOTU4OTZiMTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBZb3V0dWJlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB2aWRlb0lkLCB3aWR0aCA9IFwiMTAwJVwiLCBoZWlnaHQgPSAzNjYgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHNyYyA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwieW91dHViZS1jb250YWluZXJcIj5cclxuICAgICAgPGlmcmFtZVxyXG4gICAgICAgIHdpZHRoPXt3aWR0aH1cclxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cclxuICAgICAgICBzcmM9e3NyY31cclxuICAgICAgICBmcmFtZWJvcmRlcj1cIjBcIlxyXG4gICAgICAgIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiXHJcbiAgICAgICAgYWxsb3dGdWxsU2NyZWVuPVwiMVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgWW91dHViZTtcclxuIiwiaW1wb3J0IFRoZW1lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RoZW1lXCI7XHJcbmltcG9ydCBtcyBmcm9tIFwibXNcIjtcclxuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnNQcm9taXNlcyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIm1hcmtkb3duLXRvLWpzeFwiO1xyXG5pbXBvcnQgWW91dHViZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Zb3V0dWJlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHsgcG9zdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICBQdWJsaXNoZWQge21zKERhdGUubm93KCkgLSBwb3N0LmNyZWF0ZWRBdCwgeyBsb25nOiB0cnVlIH0pfSBhZ29cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxNYXJrZG93blxyXG4gICAgICAgICAgICBvcHRpb25zPXt7IG92ZXJyaWRlczogeyBZb3V0dWJlOiB7IGNvbXBvbmVudDogWW91dHViZSB9IH0gfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Bvc3QuY29udGVudH1cclxuICAgICAgICAgIDwvTWFya2Rvd24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9UaGVtZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgbWFya2Rvd25GaWxlcyA9IGF3YWl0IGZzUHJvbWlzZXMucmVhZGRpcihcImRhdGFcIik7XHJcblxyXG4gIGNvbnN0IHBhdGhzID0gbWFya2Rvd25GaWxlcy5tYXAoKGZpbGVuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBzbHVnID0gZmlsZW5hbWUucmVwbGFjZSgvLm1kJC8sIFwiXCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBhcmFtczogeyBzbHVnIH0sXHJcbiAgICB9O1xyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5LCAuLi5yZXN0XSA9IHBhcmFtcy5zbHVnLnNwbGl0KFwiLVwiKTtcclxuICBjb25zdCBjcmVhdGVkQXQgPSBuZXcgRGF0ZShgJHt5ZWFyfSAke21vbnRofSAke2RheX1gKS5nZXRUaW1lKCk7XHJcbiAgY29uc3QgdGl0bGUgPSByZXN0LmpvaW4oXCIgXCIpO1xyXG5cclxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgZnNQcm9taXNlcy5yZWFkRmlsZShgZGF0YS8ke3BhcmFtcy5zbHVnfS5tZGAsIFwidXRmOFwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHBvc3Q6IHtcclxuICAgICAgICBzbHVnOiBwYXJhbXMuc2x1ZyxcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBjb250ZW50LFxyXG4gICAgICAgIGNyZWF0ZWRBdCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9