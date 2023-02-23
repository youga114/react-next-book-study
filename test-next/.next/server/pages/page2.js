"use strict";
(() => {
var exports = {};
exports.id = 730;
exports.ids = [730];
exports.modules = {

/***/ 5019:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Page2)
});

;// CONCATENATED MODULE: ./src/api.js
function callApi() {
  return Promise.resolve(123);
}
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/page2.js





Page2.getInitialProps = async ({
  query
}) => {
  const {
    sayHello
  } = await __webpack_require__.e(/* import() */ 559).then(__webpack_require__.bind(__webpack_require__, 8559));
  console.log(sayHello());
  const text = query.text || "none";
  const data = await callApi();
  return {
    text,
    data
  };
};

function Page2({
  text,
  data
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      children: "this is home page2"
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: `text: ${text}`
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      children: `data is ${data}`
    })]
  });
}

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5019));
module.exports = __webpack_exports__;

})();