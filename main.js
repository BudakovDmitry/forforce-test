/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js?ebc7":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var carouselInner = document.querySelector('.carousel__inner');\n  var prevButton = document.querySelector('.prev');\n  var nextButton = document.querySelector('.next');\n  var activeIndex = 0;\n  prevButton.addEventListener('click', function () {\n    activeIndex -= 1;\n    if (activeIndex < 0) {\n      activeIndex = carouselInner.children.length - 1;\n    }\n    carouselInner.style.transform = \"translateX(-\".concat(activeIndex * 100, \"%)\");\n  });\n  nextButton.addEventListener('click', function () {\n    activeIndex += 1;\n    if (activeIndex > carouselInner.children.length - 1) {\n      activeIndex = 0;\n    }\n    carouselInner.style.transform = \"translateX(-\".concat(activeIndex * 100, \"%)\");\n  });\n  var cards = document.querySelectorAll('.card');\n  cards.forEach(function (card) {\n    return card.addEventListener('click', function () {\n      cards.forEach(function (item) {\n        return item.classList.contains('active') && item.classList.remove('active');\n      });\n      card.classList.add('active');\n    });\n  });\n});\n\n//# sourceURL=webpack://forforce-test/./src/index.js?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/logo-color.svg */ \"./src/images/logo-color.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/down-arrow.png */ \"./src/images/down-arrow.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/main-image.png */ \"./src/images/main-image.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/slide-logo-1.svg */ \"./src/images/slide-logo-1.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/slide-logo-2.svg */ \"./src/images/slide-logo-2.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/slide-logo-3.svg */ \"./src/images/slide-logo-3.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/slide-logo-4.svg */ \"./src/images/slide-logo-4.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/slide-logo-5.svg */ \"./src/images/slide-logo-5.svg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-left.png */ \"./src/images/arrow-left.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-right.png */ \"./src/images/arrow-right.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./images/chart.png */ \"./src/images/chart.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./images/main-image-2.png */ \"./src/images/main-image-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./images/content-image.png */ \"./src/images/content-image.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./images/audits-icon-1.png */ \"./src/images/audits-icon-1.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./images/audits-icon-2.png */ \"./src/images/audits-icon-2.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./images/audits-icon-3.png */ \"./src/images/audits-icon-3.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ \"./src/index.js?1e57\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\" />\\n    <title>Forforce test</title>\\n  </head>\\n  <body>\\n    <header class=\\\"header\\\">\\n      <div class=\\\"container-xxl\\\">\\n        <div class=\\\"row\\\">\\n          <a\\n            href=\\\"#\\\"\\n            class=\\\"col-12 col-sm-6 col-md-3 header__logo order-1 order-md-1 link\\\"\\n          >\\n            <img class=\\\"img-fluid\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"logo\\\" />\\n          </a>\\n          <nav class=\\\"col-12 col-md-6 nav order-3 order-md-2\\\">\\n            <ul class=\\\"nav__list\\\">\\n              <li class=\\\"nav__item\\\">\\n                <a href=\\\"#\\\" class=\\\"nav__link active\\\">Home</a>\\n              </li>\\n              <li class=\\\"nav__item\\\">\\n                <a href=\\\"#\\\" class=\\\"nav__link\\\">Features</a>\\n              </li>\\n              <li class=\\\"nav__item\\\">\\n                <a href=\\\"#\\\" class=\\\"nav__link\\\">Pricing</a>\\n              </li>\\n              <li class=\\\"nav__item\\\">\\n                <a href=\\\"#\\\" class=\\\"nav__link\\\">Blog</a>\\n              </li>\\n            </ul>\\n          </nav>\\n          <button\\n            class=\\\"col-12 col-sm-6 col-md-3 btn header__button button order-2 order-md-3\\\"\\n          >\\n            Get Started\\n          </button>\\n        </div>\\n      </div>\\n    </header>\\n    <main class=\\\"main\\\">\\n      <div class=\\\"container-xxl main__container\\\">\\n        <div class=\\\"row\\\">\\n          <div class=\\\"main__content col-lg-6 col-sm-12 order-2 order-lg-1\\\">\\n            <h1 class=\\\"main__title h1\\\">Grow your subscription business</h1>\\n            <p class=\\\"main__description\\\">\\n              Outcome-centered products that reduce churn, optimize pricing, and\\n              grow your subscription business end-to-end.\\n            </p>\\n            <div class=\\\"main__buttons-container\\\">\\n              <button class=\\\"main__button btn button\\\">Get Started</button>\\n              <a class=\\\"main__link link\\\" href=\\\"#\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"\\\" />\\n              </a>\\n            </div>\\n          </div>\\n          <img\\n            class=\\\"img-fluid col-lg-6 col-sm-12 order-1 order-lg-2\\\"\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\"\\n            alt=\\\"main-background\\\"\\n          />\\n        </div>\\n      </div>\\n    </main>\\n    <section class=\\\"slider\\\">\\n      <div class=\\\"container-xxl slider__container\\\">\\n        <div class=\\\"row\\\">\\n          <ul class=\\\"slider__list\\\">\\n            <li class=\\\"slider__item\\\">\\n              <img\\n                class=\\\"slider__image\\\"\\n                src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n                alt=\\\"logo-1\\\"\\n              />\\n            </li>\\n            <li class=\\\"slider__item\\\">\\n              <img\\n                class=\\\"slider__image\\\"\\n                src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"\\n                alt=\\\"logo-2\\\"\\n              />\\n            </li>\\n            <li class=\\\"slider__item\\\">\\n              <img\\n                class=\\\"slider__image\\\"\\n                src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\"\\n                alt=\\\"logo-3\\\"\\n              />\\n            </li>\\n            <li class=\\\"slider__item\\\">\\n              <img\\n                class=\\\"slider__image\\\"\\n                src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\"\\n                alt=\\\"logo-4\\\"\\n              />\\n            </li>\\n            <li class=\\\"slider__item\\\">\\n              <img\\n                class=\\\"slider__image\\\"\\n                src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\"\\n                alt=\\\"logo-5\\\"\\n              />\\n            </li>\\n          </ul>\\n        </div>\\n        <div class=\\\"carousel\\\">\\n          <button class=\\\"carousel__button prev\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"arrow-left\\\" />\\n          </button>\\n          <div class=\\\"carousel__container\\\">\\n            <div class=\\\"carousel__inner\\\">\\n              <div class=\\\"carousel__item\\\">\\n                <img\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\"\\n                  class=\\\"d-block carousel__image\\\"\\n                  alt=\\\"Logo-1\\\"\\n                />\\n              </div>\\n              <div class=\\\"carousel__item\\\">\\n                <img\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\"\\n                  class=\\\"d-block carousel__image\\\"\\n                  alt=\\\"logo-2\\\"\\n                />\\n              </div>\\n              <div class=\\\"carousel__item\\\">\\n                <img\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\"\\n                  class=\\\"d-block carousel__image\\\"\\n                  alt=\\\"logo-3\\\"\\n                />\\n              </div>\\n              <div class=\\\"carousel__item\\\">\\n                <img\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\"\\n                  class=\\\"d-block carousel__image\\\"\\n                  alt=\\\"logo-4\\\"\\n                />\\n              </div>\\n              <div class=\\\"carousel__item\\\">\\n                <img\\n                  src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\"\\n                  class=\\\"d-block carousel__image\\\"\\n                  alt=\\\"logo-5\\\"\\n                />\\n              </div>\\n            </div>\\n          </div>\\n          <button class=\\\"carousel__button next\\\">\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"arrow-right\\\" />\\n          </button>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"form-section\\\">\\n      <div class=\\\"container\\\">\\n        <div class=\\\"row\\\">\\n          <div class=\\\"form-section__images__container col-12 col-lg-7\\\">\\n            <img class=\\\"img-fluid\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"chart\\\" />\\n            <img\\n              class=\\\"img-fluid\\\"\\n              src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\"\\n              alt=\\\"main-2\\\"\\n            />\\n          </div>\\n          <div class=\\\"form__container col-12 col-lg-5\\\">\\n            <form action=\\\"#\\\" class=\\\"form\\\">\\n              <h3 class=\\\"form__title\\\">Grow your subscription</h3>\\n              <div class=\\\"form-floating mb-3\\\">\\n                <input\\n                  type=\\\"text\\\"\\n                  class=\\\"form-control form__input\\\"\\n                  id=\\\"loca\\\"\\n                  placeholder=\\\"Loca\\\"\\n                />\\n                <label for=\\\"loca\\\" class=\\\"form__input__label\\\">Loca</label>\\n              </div>\\n              <div class=\\\"form-floating mb-3\\\">\\n                <input\\n                  type=\\\"text\\\"\\n                  class=\\\"form-control form__input\\\"\\n                  id=\\\"typ\\\"\\n                  placeholder=\\\"Typ\\\"\\n                />\\n                <label for=\\\"typ\\\" class=\\\"form__input__label\\\">Typ</label>\\n              </div>\\n              <div class=\\\"form-floating mb-4\\\">\\n                <input\\n                  type=\\\"date\\\"\\n                  class=\\\"form-control form__input\\\"\\n                  id=\\\"date\\\"\\n                  placeholder=\\\"Date\\\"\\n                />\\n                <label for=\\\"date\\\" class=\\\"form__input__label\\\">Date</label>\\n              </div>\\n              <button class=\\\"form__button btn button\\\" type=\\\"submit\\\">\\n                send\\n              </button>\\n            </form>\\n          </div>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"statistic\\\">\\n      <div class=\\\"container-xxl statistic__container\\\">\\n        <div class=\\\"row align-items-center\\\">\\n          <div class=\\\"statistic__content col-lg-7 col-sm-12 order-2 order-lg-1\\\">\\n            <h2 class=\\\"statistic__title h2\\\">In-depth metrics</h2>\\n            <p class=\\\"statistic__description\\\">\\n              Accurate, real-time reporting at your fingertips. Getting data has\\n              never been easier.\\n            </p>\\n            <a class=\\\"statistic__link link\\\" href=\\\"#\\\">Learn more</a>\\n          </div>\\n          <img\\n            class=\\\"img-fluid statistic__image col-lg-5 col-sm-12 order-1 order-lg-2\\\"\\n            src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\"\\n            alt=\\\"statistic-background\\\"\\n          />\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"audits\\\">\\n      <div class=\\\"container-xxl audits__container\\\">\\n        <div class=\\\"row\\\">\\n          <div class=\\\"audits-item text-center col-12 col-md-4\\\">\\n            <div class=\\\"audits-item__icon\\\">\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"audits-icon\\\" />\\n            </div>\\n            <h3 class=\\\"audits-item__title\\\">Benchmarks</h3>\\n            <p class=\\\"audits-item__description\\\">\\n              See how you stack up against comparable companies in similar\\n              stages.\\n            </p>\\n          </div>\\n          <div class=\\\"audits-item text-center col-12 col-md-4\\\">\\n            <div class=\\\"audits-item__icon\\\">\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"audits-icon\\\" />\\n            </div>\\n            <h3 class=\\\"audits-item__title\\\">Pricing Audit</h3>\\n            <p class=\\\"audits-item__description\\\">\\n              Benchmark the health of your monetization and pricing strategy.\\n            </p>\\n          </div>\\n          <div class=\\\"audits-item text-center col-12 col-md-4\\\">\\n            <div class=\\\"audits-item__icon\\\">\\n              <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\" alt=\\\"audits-icon\\\" />\\n            </div>\\n            <h3 class=\\\"audits-item__title\\\">Retention Audit</h3>\\n            <p class=\\\"audits-item__description\\\">\\n              Audit where revenue leakage exists and where you can increase\\n              retention.\\n            </p>\\n          </div>\\n        </div>\\n      </div>\\n    </section>\\n    <section class=\\\"prices\\\">\\n      <div class=\\\"container-xxl prices__container\\\">\\n        <div class=\\\"row prices__header\\\">\\n          <h2 class=\\\"prices__title col-sm-8\\\">\\n            Get the right plan for future product.\\n          </h2>\\n          <label class=\\\"prices__switch switch col-sm-3\\\">\\n            <input class=\\\"switch__input\\\" type=\\\"checkbox\\\" />\\n            <span class=\\\"switch__slider\\\"></span>\\n          </label>\\n        </div>\\n        <div class=\\\"row cards align-items-center justify-content-center gap-2\\\">\\n          <div class=\\\"card col-12 col-xl-3 text-center\\\">\\n            <p class=\\\"card__title\\\">Starter</p>\\n            <h2 class=\\\"card__price\\\">Free</h2>\\n            <ul class=\\\"card__list\\\">\\n              <li class=\\\"list__item\\\">1 Website</li>\\n              <li class=\\\"list__item\\\">5 GB Hosting</li>\\n              <li class=\\\"list__item\\\">Limited Support</li>\\n            </ul>\\n            <button class=\\\"card__button\\\">Get Started</button>\\n          </div>\\n          <div class=\\\"card active col-12 col-xl-3 text-center\\\">\\n            <p class=\\\"card__title\\\">Premium</p>\\n            <h2 class=\\\"card__price\\\">$29<span>/month</span></h2>\\n            <ul class=\\\"card__list\\\">\\n              <li class=\\\"list__item\\\">10 Website</li>\\n              <li class=\\\"list__item\\\">15 GB Hosting</li>\\n              <li class=\\\"list__item\\\">Premium Support</li>\\n            </ul>\\n            <button class=\\\"card__button\\\">Get Started</button>\\n          </div>\\n          <div class=\\\"card col-12 col-xl-3 text-center\\\">\\n            <p class=\\\"card__title\\\">Enterprise</p>\\n            <h2 class=\\\"card__price\\\">$49<span>/month</span></h2>\\n            <ul class=\\\"card__list\\\">\\n              <li class=\\\"list__item\\\">Unlimited Website</li>\\n              <li class=\\\"list__item\\\">50 GB Hosting</li>\\n              <li class=\\\"list__item\\\">Premium Support</li>\\n            </ul>\\n            <button class=\\\"card__button\\\">Get Started</button>\\n          </div>\\n        </div>\\n      </div>\\n    </section>\\n    <\" + \"script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_16___ + \"\\\"><\" + \"/script>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://forforce-test/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://forforce-test/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://forforce-test/./src/styles.scss?");

/***/ }),

/***/ "./src/index.js?1e57":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/index.js\";\n\n//# sourceURL=webpack://forforce-test/./src/index.js?");

/***/ }),

/***/ "./src/images/arrow-left.png":
/*!***********************************!*\
  !*** ./src/images/arrow-left.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/arrow-left.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/arrow-left.png?");

/***/ }),

/***/ "./src/images/arrow-right.png":
/*!************************************!*\
  !*** ./src/images/arrow-right.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/arrow-right.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/arrow-right.png?");

/***/ }),

/***/ "./src/images/audits-icon-1.png":
/*!**************************************!*\
  !*** ./src/images/audits-icon-1.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/audits-icon-1.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/audits-icon-1.png?");

/***/ }),

/***/ "./src/images/audits-icon-2.png":
/*!**************************************!*\
  !*** ./src/images/audits-icon-2.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/audits-icon-2.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/audits-icon-2.png?");

/***/ }),

/***/ "./src/images/audits-icon-3.png":
/*!**************************************!*\
  !*** ./src/images/audits-icon-3.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/audits-icon-3.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/audits-icon-3.png?");

/***/ }),

/***/ "./src/images/chart.png":
/*!******************************!*\
  !*** ./src/images/chart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/chart.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/chart.png?");

/***/ }),

/***/ "./src/images/content-image.png":
/*!**************************************!*\
  !*** ./src/images/content-image.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/content-image.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/content-image.png?");

/***/ }),

/***/ "./src/images/down-arrow.png":
/*!***********************************!*\
  !*** ./src/images/down-arrow.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/down-arrow.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/down-arrow.png?");

/***/ }),

/***/ "./src/images/logo-color.svg":
/*!***********************************!*\
  !*** ./src/images/logo-color.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/logo-color.svg\";\n\n//# sourceURL=webpack://forforce-test/./src/images/logo-color.svg?");

/***/ }),

/***/ "./src/images/main-image-2.png":
/*!*************************************!*\
  !*** ./src/images/main-image-2.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/main-image-2.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/main-image-2.png?");

/***/ }),

/***/ "./src/images/main-image.png":
/*!***********************************!*\
  !*** ./src/images/main-image.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/main-image.png\";\n\n//# sourceURL=webpack://forforce-test/./src/images/main-image.png?");

/***/ }),

/***/ "./src/images/slide-logo-1.svg":
/*!*************************************!*\
  !*** ./src/images/slide-logo-1.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide-logo-1.svg\";\n\n//# sourceURL=webpack://forforce-test/./src/images/slide-logo-1.svg?");

/***/ }),

/***/ "./src/images/slide-logo-2.svg":
/*!*************************************!*\
  !*** ./src/images/slide-logo-2.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide-logo-2.svg\";\n\n//# sourceURL=webpack://forforce-test/./src/images/slide-logo-2.svg?");

/***/ }),

/***/ "./src/images/slide-logo-3.svg":
/*!*************************************!*\
  !*** ./src/images/slide-logo-3.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide-logo-3.svg\";\n\n//# sourceURL=webpack://forforce-test/./src/images/slide-logo-3.svg?");

/***/ }),

/***/ "./src/images/slide-logo-4.svg":
/*!*************************************!*\
  !*** ./src/images/slide-logo-4.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide-logo-4.svg\";\n\n//# sourceURL=webpack://forforce-test/./src/images/slide-logo-4.svg?");

/***/ }),

/***/ "./src/images/slide-logo-5.svg":
/*!*************************************!*\
  !*** ./src/images/slide-logo-5.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/slide-logo-5.svg\";\n\n//# sourceURL=webpack://forforce-test/./src/images/slide-logo-5.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js?ebc7");
/******/ 	
/******/ })()
;