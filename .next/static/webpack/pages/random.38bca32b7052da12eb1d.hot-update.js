webpackHotUpdate_N_E("pages/random",{

/***/ "./components/Randoms.tsx":
/*!********************************!*\
  !*** ./components/Randoms.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n\n\nvar _jsxFileName = \"/home/yusard/TekTas-Frontend/components/Randoms.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Profile() {\n  _s();\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('https://tektas.herokuapp.com/random'),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"failed to load\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 21\n  }, this);\n  if (!data) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 21\n  }, this);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [data.name, \"!\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: data.author\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 11\n  }, this);\n}\n\n_s(Profile, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SYW5kb21zLnRzeD80ZmNkIl0sIm5hbWVzIjpbIlByb2ZpbGUiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJuYW1lIiwiYXV0aG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUEsZ0JBQ09DLG1EQUFNLENBQUMscUNBQUQsQ0FEYjtBQUFBLE1BQ1RDLElBRFMsV0FDVEEsSUFEUztBQUFBLE1BQ0hDLEtBREcsV0FDSEEsS0FERzs7QUFHakIsTUFBSUEsS0FBSixFQUFXLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDWCxNQUFJLENBQUNELElBQUwsRUFBVyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsc0JBQVE7QUFBQSw0QkFDSjtBQUFBLGlCQUFLQSxJQUFJLENBQUNFLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREksZUFFSjtBQUFBLGdCQUFLRixJQUFJLENBQUNHO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFSO0FBS0Q7O0dBVlFMLE87VUFDaUJDLDJDOzs7S0FEakJELE87QUFZTUEsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1JhbmRvbXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmZ1bmN0aW9uIFByb2ZpbGUoKSB7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignaHR0cHM6Ly90ZWt0YXMuaGVyb2t1YXBwLmNvbS9yYW5kb20nKVxuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFpbGVkIHRvIGxvYWQ8L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gIHJldHVybiAoPGRpdj5cbiAgICAgIDxoMT57ZGF0YS5uYW1lfSE8L2gxPlxuICAgICAgPGgxPntkYXRhLmF1dGhvcn08L2gxPlxuXG4gIDwvZGl2Pik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Randoms.tsx\n");

/***/ })

})