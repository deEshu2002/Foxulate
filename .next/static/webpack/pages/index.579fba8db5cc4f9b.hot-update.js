"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/WordMatchLogic.tsx":
/*!*******************************************!*\
  !*** ./src/components/WordMatchLogic.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _WordMapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WordMapper */ \"./src/components/WordMapper.tsx\");\n/* harmony import */ var _Writing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Writing */ \"./src/components/Writing.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar WordMatchLogic = function() {\n    _s();\n    var paraRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // logic for focusing the scenario text when textbox is in focus\n    var focus = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Writing__WEBPACK_IMPORTED_MODULE_3__.FocusContext);\n    var toggleFocus = function() {\n        focus.setfocusScenario(function(e) {\n            return !e;\n        });\n    };\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), Para = ref[0], setPara = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        \"\"\n    ]), wordArr = ref1[0], setwordArr = ref1[1];\n    var changeWordArr = function(e) {\n        if (paraRef.current) {\n            if (e.key === \" \" || e.key === \".\" || e.key === \",\" || e.key === \"Backspace\") {\n                var ref;\n                setPara((ref = paraRef.current) === null || ref === void 0 ? void 0 : ref.value);\n            }\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var tempArr = Para.match(/\\w+/g);\n        setwordArr(tempArr);\n    }, [\n        Para\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center w-full -ml-3 mt-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-4/6 flex flex-row space-x-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"-mt-2\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                className: \"cursor-pointer hover:scale-110 duration-200\",\n                                width: \"27\",\n                                height: \"35\",\n                                viewBox: \"0 0 35 48\",\n                                fill: \"none\",\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M29.8958 27V15H21.1458\",\n                                        stroke: \"#2D2E30\",\n                                        strokeWidth: \"4\",\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                        d: \"M4.375 37L11.9131 24.5L19.0932 30.5L29.8958 15\",\n                                        stroke: \"#2D2E30\",\n                                        strokeWidth: \"4\",\n                                        strokeLinecap: \"round\",\n                                        strokeLinejoin: \"round\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WordMapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                prop: wordArr\n                            }, void 0, false, {\n                                fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-4/6 pl-9\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"focus:outline-none focus:border-none focus:shadow-md focus:shadow-gray-600 resize-none bg-transparent w-full p-2 text-lg placeholder:text-black/30 text-neutral-700\",\n                        rows: 12,\n                        placeholder: \"hello\",\n                        onFocus: toggleFocus,\n                        onBlur: toggleFocus,\n                        onKeyUp: changeWordArr,\n                        ref: paraRef\n                    }, void 0, false, {\n                        fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/poojamehra/Desktop/random-deeshu/proj/src/components/WordMatchLogic.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(WordMatchLogic, \"vaehPXoDiqS8uDq649KqnMLN334=\");\n_c = WordMatchLogic;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WordMatchLogic);\nvar _c;\n$RefreshReg$(_c, \"WordMatchLogic\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3JkTWF0Y2hMb2dpYy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7QUFBdUU7QUFDakM7QUFDRztBQUV6QyxJQUFNTyxjQUFjLEdBQUcsV0FBTTs7SUFDM0IsSUFBTUMsT0FBTyxHQUFHTCw2Q0FBTSxDQUFzQixJQUFJLENBQUM7SUFFakQsZ0VBQWdFO0lBRWhFLElBQU1NLEtBQUssR0FBR1IsaURBQVUsQ0FBQ0ssa0RBQVksQ0FBQztJQUV0QyxJQUFNSSxXQUFXLEdBQUcsV0FBTTtRQUN4QkQsS0FBSyxDQUFDRSxnQkFBZ0IsQ0FBQyxTQUFDQyxDQUFDO21CQUFLLENBQUNBLENBQUM7U0FBQSxDQUFDLENBQUM7S0FDbkM7SUFFRCxJQUF3QlIsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3QlMsSUFBSSxHQUFhVCxHQUFZLEdBQXpCLEVBQUVVLE9BQU8sR0FBSVYsR0FBWSxHQUFoQjtJQUVwQixJQUE4QkEsSUFBd0IsR0FBeEJBLCtDQUFRLENBQVc7UUFBQyxFQUFFO0tBQUMsQ0FBQyxFQUEvQ1csT0FBTyxHQUFnQlgsSUFBd0IsR0FBeEMsRUFBRVksVUFBVSxHQUFJWixJQUF3QixHQUE1QjtJQUUxQixJQUFNYSxhQUFhLEdBQUcsU0FBQ0wsQ0FBMkMsRUFBSztRQUNyRSxJQUFJSixPQUFPLENBQUNVLE9BQU8sRUFBRTtZQUNuQixJQUNFTixDQUFDLENBQUNPLEdBQUcsS0FBSyxHQUFHLElBQ2JQLENBQUMsQ0FBQ08sR0FBRyxLQUFLLEdBQUcsSUFDYlAsQ0FBQyxDQUFDTyxHQUFHLEtBQUssR0FBRyxJQUNiUCxDQUFDLENBQUNPLEdBQUcsS0FBSyxXQUFXLEVBQ3JCO29CQUNRWCxHQUFlO2dCQUF2Qk0sT0FBTyxDQUFDTixDQUFBQSxHQUFlLEdBQWZBLE9BQU8sQ0FBQ1UsT0FBTyxjQUFmVixHQUFlLFdBQU8sR0FBdEJBLEtBQUFBLENBQXNCLEdBQXRCQSxHQUFlLENBQUVZLEtBQUssQ0FBQyxDQUFDO2FBQ2pDO1NBQ0Y7S0FDRjtJQUVEbEIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTW1CLE9BQU8sR0FBR1IsSUFBSSxDQUFDUyxLQUFLLFFBQVE7UUFDbENOLFVBQVUsQ0FBQ0ssT0FBTyxDQUFDLENBQUM7S0FDckIsRUFBRTtRQUFDUixJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRVgscUJBQ0U7OzBCQUNFLDhEQUFDVSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsdUNBQXVDOzBCQUNwRCw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLCtCQUErQjs7c0NBQzVDLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsT0FBTztzQ0FDcEIsNEVBQUNDLEtBQUc7Z0NBQ0ZELFNBQVMsRUFBQyw2Q0FBNkM7Z0NBQ3ZERSxLQUFLLEVBQUMsSUFBSTtnQ0FDVkMsTUFBTSxFQUFDLElBQUk7Z0NBQ1hDLE9BQU8sRUFBQyxXQUFXO2dDQUNuQkMsSUFBSSxFQUFDLE1BQU07Z0NBQ1hDLEtBQUssRUFBQyw0QkFBNEI7O2tEQUVsQyw4REFBQ0MsTUFBSTt3Q0FDSEMsQ0FBQyxFQUFDLHdCQUF3Qjt3Q0FDMUJDLE1BQU0sRUFBQyxTQUFTO3dDQUNoQkMsV0FBVyxFQUFDLEdBQUc7d0NBQ2ZDLGFBQWEsRUFBQyxPQUFPO3dDQUNyQkMsY0FBYyxFQUFDLE9BQU87Ozs7OzZDQUN0QjtrREFDRiw4REFBQ0wsTUFBSTt3Q0FDSEMsQ0FBQyxFQUFDLGdEQUFnRDt3Q0FDbERDLE1BQU0sRUFBQyxTQUFTO3dDQUNoQkMsV0FBVyxFQUFDLEdBQUc7d0NBQ2ZDLGFBQWEsRUFBQyxPQUFPO3dDQUNyQkMsY0FBYyxFQUFDLE9BQU87Ozs7OzZDQUN0Qjs7Ozs7O3FDQUNFOzs7OztpQ0FDRjtzQ0FDTiw4REFBQ2IsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLFFBQVE7c0NBRXJCLDRFQUFDbkIsbURBQVU7Z0NBQUNnQyxJQUFJLEVBQUV0QixPQUFPOzs7OztxQ0FBSTs7Ozs7aUNBQ3pCOzs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzBCQUVOLDhEQUFDUSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsMkJBQTJCOzBCQUN4Qyw0RUFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLFlBQVk7OEJBQ3pCLDRFQUFDYyxVQUFRO3dCQUNQZCxTQUFTLEVBQUMscUtBQ2dGO3dCQUMxRmUsSUFBSSxFQUFFLEVBQUU7d0JBQ1JDLFdBQVcsRUFBQyxPQUFPO3dCQUNuQkMsT0FBTyxFQUFFL0IsV0FBVzt3QkFDcEJnQyxNQUFNLEVBQUVoQyxXQUFXO3dCQUNuQmlDLE9BQU8sRUFBRTFCLGFBQWE7d0JBQ3RCMkIsR0FBRyxFQUFFcEMsT0FBTzs7Ozs7NkJBRUY7Ozs7O3lCQUNSOzs7OztxQkFDRjs7b0JBQ0wsQ0FDSDtDQUNIO0dBdEZLRCxjQUFjO0FBQWRBLEtBQUFBLGNBQWM7QUF3RnBCLCtEQUFlQSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV29yZE1hdGNoTG9naWMudHN4PzIyODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdvcmRNYXBwZXIgZnJvbSBcIi4vV29yZE1hcHBlclwiO1xuaW1wb3J0IHsgRm9jdXNDb250ZXh0IH0gZnJvbSBcIi4vV3JpdGluZ1wiO1xuXG5jb25zdCBXb3JkTWF0Y2hMb2dpYyA9ICgpID0+IHtcbiAgY29uc3QgcGFyYVJlZiA9IHVzZVJlZjxIVE1MVGV4dEFyZWFFbGVtZW50PihudWxsKTtcblxuICAvLyBsb2dpYyBmb3IgZm9jdXNpbmcgdGhlIHNjZW5hcmlvIHRleHQgd2hlbiB0ZXh0Ym94IGlzIGluIGZvY3VzXG5cbiAgY29uc3QgZm9jdXMgPSB1c2VDb250ZXh0KEZvY3VzQ29udGV4dCk7XG5cbiAgY29uc3QgdG9nZ2xlRm9jdXMgPSAoKSA9PiB7XG4gICAgZm9jdXMuc2V0Zm9jdXNTY2VuYXJpbygoZSkgPT4gIWUpO1xuICB9O1xuXG4gIGNvbnN0IFtQYXJhLCBzZXRQYXJhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IFt3b3JkQXJyLCBzZXR3b3JkQXJyXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXCJcIl0pO1xuXG4gIGNvbnN0IGNoYW5nZVdvcmRBcnIgPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIGlmIChwYXJhUmVmLmN1cnJlbnQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IFwiIFwiIHx8XG4gICAgICAgIGUua2V5ID09PSBcIi5cIiB8fFxuICAgICAgICBlLmtleSA9PT0gXCIsXCIgfHxcbiAgICAgICAgZS5rZXkgPT09IFwiQmFja3NwYWNlXCJcbiAgICAgICkge1xuICAgICAgICBzZXRQYXJhKHBhcmFSZWYuY3VycmVudD8udmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRlbXBBcnIgPSBQYXJhLm1hdGNoKC9cXHcrL2cpIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG4gICAgc2V0d29yZEFycih0ZW1wQXJyKTtcbiAgfSwgW1BhcmFdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsIC1tbC0zIG10LTZcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNiBmbGV4IGZsZXgtcm93IHNwYWNlLXgtNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiLW10LTJcIj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwIGR1cmF0aW9uLTIwMFwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMjdcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIzNVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzUgNDhcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGQ9XCJNMjkuODk1OCAyN1YxNUgyMS4xNDU4XCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjMkQyRTMwXCJcbiAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZD1cIk00LjM3NSAzN0wxMS45MTMxIDI0LjVMMTkuMDkzMiAzMC41TDI5Ljg5NTggMTVcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cIiMyRDJFMzBcIlxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICB7LyogZ2V0V29yZHMgKi99XG4gICAgICAgICAgICA8V29yZE1hcHBlciBwcm9wPXt3b3JkQXJyfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTQvNiBwbC05XCI+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLW5vbmUgZm9jdXM6c2hhZG93LW1kICBmb2N1czpzaGFkb3ctZ3JheS02MDAgXG4gICAgICAgICAgICByZXNpemUtbm9uZSBiZy10cmFuc3BhcmVudCB3LWZ1bGwgIHAtMiB0ZXh0LWxnIHBsYWNlaG9sZGVyOnRleHQtYmxhY2svMzAgdGV4dC1uZXV0cmFsLTcwMFwiXG4gICAgICAgICAgICByb3dzPXsxMn1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaGVsbG9cIlxuICAgICAgICAgICAgb25Gb2N1cz17dG9nZ2xlRm9jdXN9XG4gICAgICAgICAgICBvbkJsdXI9e3RvZ2dsZUZvY3VzfVxuICAgICAgICAgICAgb25LZXlVcD17Y2hhbmdlV29yZEFycn1cbiAgICAgICAgICAgIHJlZj17cGFyYVJlZn1cbiAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSk9PntzZXRQYXJhKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXb3JkTWF0Y2hMb2dpYztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIldvcmRNYXBwZXIiLCJGb2N1c0NvbnRleHQiLCJXb3JkTWF0Y2hMb2dpYyIsInBhcmFSZWYiLCJmb2N1cyIsInRvZ2dsZUZvY3VzIiwic2V0Zm9jdXNTY2VuYXJpbyIsImUiLCJQYXJhIiwic2V0UGFyYSIsIndvcmRBcnIiLCJzZXR3b3JkQXJyIiwiY2hhbmdlV29yZEFyciIsImN1cnJlbnQiLCJrZXkiLCJ2YWx1ZSIsInRlbXBBcnIiLCJtYXRjaCIsImRpdiIsImNsYXNzTmFtZSIsInN2ZyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJ4bWxucyIsInBhdGgiLCJkIiwic3Ryb2tlIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJwcm9wIiwidGV4dGFyZWEiLCJyb3dzIiwicGxhY2Vob2xkZXIiLCJvbkZvY3VzIiwib25CbHVyIiwib25LZXlVcCIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WordMatchLogic.tsx\n"));

/***/ })

});