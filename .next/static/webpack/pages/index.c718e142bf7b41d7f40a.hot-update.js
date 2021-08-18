webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Theme */ "./components/Theme.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
/* harmony import */ var ms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Youtube */ "./components/Youtube.js");
var _jsxFileName = "C:\\Users\\TTL\\github\\bulletproof-next-app\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var postList = _ref.postList;
  console.log(postList);
  return __jsx(_components_Theme__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "post-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, postList.map(function (post) {
    return __jsx("div", {
      key: post.slug,
      className: "post-link",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/post/[slug]",
      as: "/post/".concat(post.slug),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "time",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, ms__WEBPACK_IMPORTED_MODULE_3___default()(Date.now() - post.createdAt, {
      long: true
    }), " ago"), __jsx("div", {
      className: "title",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, post.title))));
  })), __jsx(_components_Youtube__WEBPACK_IMPORTED_MODULE_4__["default"], {
    videoId: "RE2eHnOEqI4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInBvc3RMaXN0IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJzbHVnIiwibXMiLCJEYXRlIiwibm93IiwiY3JlYXRlZEF0IiwibG9uZyIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFZSxTQUFTQSxJQUFULE9BQTRCO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWjtBQUNBLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dBLFFBQVEsQ0FBQ0csR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSxXQUNaO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQWY7QUFBcUIsZUFBUyxFQUFDLFdBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLGNBQVg7QUFBMEIsUUFBRSxrQkFBV0QsSUFBSSxDQUFDQyxJQUFoQixDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHQyx5Q0FBRSxDQUFDQyxJQUFJLENBQUNDLEdBQUwsS0FBYUosSUFBSSxDQUFDSyxTQUFuQixFQUE4QjtBQUFFQyxVQUFJLEVBQUU7QUFBUixLQUE5QixDQURMLFNBREYsRUFJRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBd0JOLElBQUksQ0FBQ08sS0FBN0IsQ0FKRixDQURGLENBREYsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQURGLEVBZUUsTUFBQywyREFBRDtBQUFTLFdBQU8sRUFBQyxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkYsQ0FERjtBQW1CRDtLQXJCdUJaLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzcxOGUxNDJiZjdiNDFkN2Y0MGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9jb21wb25lbnRzL1RoZW1lXCI7XHJcbmltcG9ydCBtcyBmcm9tIFwibXNcIjtcclxuaW1wb3J0IHsgcHJvbWlzZXMgYXMgZnNQcm9taXNlcyB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgWW91dHViZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Zb3V0dWJlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcG9zdExpc3QgfSkge1xyXG4gIGNvbnNvbGUubG9nKHBvc3RMaXN0KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtbGlzdFwiPlxyXG4gICAgICAgIHtwb3N0TGlzdC5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtwb3N0LnNsdWd9IGNsYXNzTmFtZT1cInBvc3QtbGlua1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Bvc3QvW3NsdWddXCIgYXM9e2AvcG9zdC8ke3Bvc3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7bXMoRGF0ZS5ub3coKSAtIHBvc3QuY3JlYXRlZEF0LCB7IGxvbmc6IHRydWUgfSl9IGFnb1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+e3Bvc3QudGl0bGV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxZb3V0dWJlIHZpZGVvSWQ9XCJSRTJlSG5PRXFJNFwiIC8+XHJcbiAgICA8L1RoZW1lPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBtYXJrZG93bkZpbGVzID0gYXdhaXQgZnNQcm9taXNlcy5yZWFkZGlyKFwiZGF0YVwiKTtcclxuXHJcbiAgY29uc3QgcG9zdExpc3QgPSBtYXJrZG93bkZpbGVzLm1hcCgoZmlsZW5hbWUpID0+IHtcclxuICAgIGNvbnN0IHNsdWcgPSBmaWxlbmFtZS5yZXBsYWNlKC8ubWQkLywgXCJcIik7XHJcbiAgICBjb25zdCBbeWVhciwgbW9udGgsIGRheSwgLi4ucmVzdF0gPSBzbHVnLnNwbGl0KFwiLVwiKTtcclxuICAgIGNvbnN0IGNyZWF0ZWRBdCA9IG5ldyBEYXRlKGAke3llYXJ9ICR7bW9udGh9ICR7ZGF5fWApLmdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gcmVzdC5qb2luKFwiIFwiKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzbHVnLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgY3JlYXRlZEF0LFxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgLy8gY29uc3QgcG9zdExpc3QgPSBbXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIHNsdWc6ICcyMDIwLUp1bHktMDEtSGVsbG8tV29ybGQnLFxyXG4gIC8vICAgICB0aXRsZTogJ0hlbGxvIFdvcmxkJyxcclxuICAvLyAgICAgY3JlYXRlZEF0OiAobmV3IERhdGUoJzIwMjAgSnVseSAwMScpKS5nZXRUaW1lKClcclxuICAvLyAgIH1cclxuICAvLyBdXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0TGlzdCxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9