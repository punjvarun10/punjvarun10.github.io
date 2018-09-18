(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"aboutUs\" class=\"story-section\"> \n  <!--Seventh Fold-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2 class=\"wow fadeIn\" style=\"visibility: visible; animation-name: fadeIn;\">About Us</h2>\n      <p class=\"wow fadeIn\" data-wow-delay=\".5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;\">Artyllect\n        is a customer-centric employee-obsessed Adobe Experience Cloud \n        consulting company. We are an innovative digital development firm \n        focused on creating personalized digital experiences. Our team brings \n        leadership to clients such as Activision, Adobe, Autodesk, Barclays, \n        Blackberry, Cisco, Coca-Cola, JP Morgan, NBC, SONY, T-Mobile, Splunk, \n        Riverbed and many others. Our diverse solutions in content management, \n        mobile, enterprise web, e-commerce and digital marketing help our \n        clients to drive revenue, increase awareness and maximize value.</p>\n      <figure class=\"wow zoomIn\" style=\"visibility: visible; animation-name: zoomIn;\"><img src=\"assets/images/our-story-img.jpg\" alt=\"Our Story\" title=\"Our Story\"></figure>\n    </div>\n  </div>\n  <!--Sixth Fold--></section>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-header></app-header> \n  <div class=\"main-con\">\n    <router-outlet></router-outlet> \n  </div>\n  \n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./includes/footer/footer.component */ "./src/app/includes/footer/footer.component.ts");
/* harmony import */ var _includes_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./includes/header/header.component */ "./src/app/includes/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./casestudy/casestudy.component */ "./src/app/casestudy/casestudy.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _includes_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _includes_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_8__["CasestudyComponent"],
                _community_community_component__WEBPACK_IMPORTED_MODULE_9__["CommunityComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_12__["routing"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./casestudy/casestudy.component */ "./src/app/casestudy/casestudy.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");






var APP_ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'community', component: _community_community_component__WEBPACK_IMPORTED_MODULE_2__["CommunityComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"] },
    { path: 'case', component: _casestudy_casestudy_component__WEBPACK_IMPORTED_MODULE_4__["CasestudyComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/casestudy/casestudy.component.css":
/*!***************************************************!*\
  !*** ./src/app/casestudy/casestudy.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/casestudy/casestudy.component.html":
/*!****************************************************!*\
  !*** ./src/app/casestudy/casestudy.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"caseStudies\" class=\"riverbed-section casestudy\"> \n  <!--Second Fold-->\n  <div class=\"left-col wow slideInLeft\" style=\"visibility: visible; animation-name: slideInLeft;\">\n    <figure><img src=\"assets/images/riverbed-img.png\" alt=\"riverbed\" title=\"riverbed\"></figure>\n    <h2>AEM MSM Solution made Riverbed's multilingual sites easy</h2>\n    <p>Perfect the multisite implementation, achieve multilingual content and define a content management process.</p>\n    <a class=\"popup-link\" href=\"javascript:void(0);\" title=\"See Case Study\">See Case Study</a> </div>\n  <div class=\"right-col wow fadeIn\" style=\"visibility: visible; animation-name: fadeIn;\"> <img src=\"assets/images/riverbed-bg.jpg\" alt=\"riverbed\" title=\"riverbed\"> </div>\n  <div class=\"detail-content-popup\" style=\"display: none; opacity: 1;\">\n    <div class=\"popup-inner riverbed\"> <a class=\"close-btn\" href=\"javascript:void(0);\"><img src=\"assets/images/cross.png\" alt=\"Close\" title=\"Close\"></a>\n      <figure><img src=\"assets/images/riverbed-popup.png\" alt=\"riverbed\" title=\"riverbed\"></figure>\n      <div class=\"inner-col default-skin scrollable\" tabindex=\"-1\">\n        <div class=\"scroll-bar vertical\" style=\"height: 654px; display: block;\">\n          <div class=\"thumb\" style=\"top: 0px; height: 255.658px;\"></div>\n        </div>\n        <div class=\"viewport\" style=\"height: 654px;\">\n          <div class=\"overview\" style=\"top: 0px;\">\n            <h3>AEM MSM Solution made Riverbed's multilingual sites easy</h3>\n            <p>In late 2015, Riverbed, an American IT company that develops \n              products to improve application performance  across wide area networks \n              (WANs) using WAN Optimization, started using Adobe Experience Cloud \n              Platform  for their customer facing website www.riverbed.com. AEM has \n              been especially helpful to create a  multinational and multilingual \n              website and manage the website content by their authoring team across \n              the  globe.</p>\n            <h4>Multi Site Manager (MSM) helped create the multinational website's content</h4>\n            <p>In the early 2010s, the increasing need for a content management \n              solution to manage their  multilingual website was a primary driving \n              factor for Riverbed; and at the end of 2015, they chose  AEM Sites and \n              migrated their outdated legacy site content. Adobe's Multi Site Manager \n              (MSM)  helped them to create a blueprint English site and 3 regional \n              sites and 17 different country based  sites of which 10 of them were \n              non-English and required translation of the entire site's content.</p>\n            <h4><strong>Challenge 1:</strong> Lack of content sync configuration for multi valued properties </h4>\n            <p>A set of rollout configurations were created to meet Riverbed's \n              content synchronization needs  using OOTB sync actions. However, most of\n              the components were found using a handful of  multivalued properties \n              for which there are no OOTB sync actions found that can be used. It  \n              resulted in the content of the multivalued properties untouched by the \n              rollout, requiring manual  editing after rollout by authoring team. A \n              need to automate this became a crucial need for  Riverbed.</p>\n            <h4><strong>Challenge 2:</strong> Multilingual sites that requires content translation</h4>\n            <p>Of the various sites created using MSM, there were 10 sites \n              required translation of the entire site  content from English to local \n              language. In addition to the website content, a set of property values  \n              of their DAM assets' and i18n translator keys required translation as \n              well. It became vital to find a  translation provider which could help \n              Riverbed to meet  these needs as  seamlessly as  possible.</p>\n            <h4><strong>Challenge 3:</strong> Need for sophisticated content approval process</h4>\n            <p>Riverbed's authoring team was spread out across the globe with \n              different permission levels on  operating over the content such as \n              approver, author, contributor etc. The regional sites and  country based\n              sites required restricted access to the respective site(s). The default\n              users and  grouping mechanism were not sufficient to achieve a \n              controlled content flow from author to  publish or live site.</p>\n            <h4><strong>Solutions:</strong> Custom MSM Configurations, Translation.com for translation and  AEM user permissioning and workflows</h4>\n            <p>In order to overcome the first challenge, a custom \n              synchronization action design was needed to be  developed by extending \n              the Multi Site Manager. Adobe documentation has the basics of how to do \n              the same, using which a custom live action synchronization was created \n              similar to the OOTB action  for properties i.e. editProperties for the \n              multivalued properties, after which a sweep of every existing  multi \n              valued property names across the code base was performed to collect the \n              list and add it to the  configuration once the custom action is in \n              place. This enabled the content rollout auto update the  content of \n              multivalued properties across  the site.</p>\n            <h4><strong>Results:</strong> Significant gains in content rollouts, translational efforts and simplified  content lifecycle.</h4>\n            <p>With the default rollout taking care of the multivalued \n              properties, the authoring experience is much  improved. Due to that, the\n              manual overhead of fixing content after rollout was reduced to nothing.\n              This resulted in quick turnover of rollout of content upon change in \n              the master site content to the  child sites.</p>\n            <p>The global link plugin made the translation of the site content, \n              asset metadata content and the i18n  keys/labels possible and seamless \n              with mass requests made using the adaptor in the author. The  review of \n              the resulted content was quicker and there were very little to no manual\n              updates required  by the authors after completion of the translation, \n              hence the turnover of the content update in  English  site to \n              non-English  site in real time was  achieved  quicker as desired.</p>\n            <p>The custom workflows and the segregated user group permissioning \n              made the content activation  process simpler and quicker. The email \n              notification steps were used to reach out to the respective  users for \n              approval or rejection. The siteadmin changes resulted in reduced \n              training needs for the  authors to get their content update to the live \n              site.</p>\n          </div>\n        </div>\n        <div class=\"scroll-bar horizontal\">\n          <div class=\"thumb\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Second Fold--></section>\n<section class=\"att-section casestudy\"> \n  <!--Third Fold-->\n  <div class=\"left-col wow fadeIn\" style=\"visibility: visible; animation-name: fadeIn;\"> <img src=\"assets/images/att-bg.jpg\" alt=\"AT&amp;T\" title=\"AT&amp;T\"> </div>\n  <div class=\"right-col wow slideInRight\" style=\"visibility: visible; animation-name: slideInRight;\">\n    <figure><img src=\"assets/images/att-img.png\" alt=\"riverbed\" title=\"riverbed\"></figure>\n    <h2>AEM Personalization improves AT&amp;T's marketing focus</h2>\n    <p>Target content based on combination of user profile and \n      geographical attributes with no additional development need for every \n      new attribute added to the profile.</p>\n    <a class=\"popup-link\" href=\"javascript:void(0);\" title=\"See Case Study\">See Case Study</a> </div>\n  <div class=\"detail-content-popup\" style=\"display: none; opacity: 1;\">\n    <div class=\"popup-inner att\"> <a class=\"close-btn\" href=\"javascript:void(0);\"><img src=\"assets/images/cross.png\" alt=\"Close\" title=\"Close\"></a>\n      <figure><img src=\"assets/images/att-popup.png\" alt=\"att\" title=\"att\"></figure>\n      <div class=\"inner-col default-skin scrollable\" tabindex=\"-1\">\n        <div class=\"scroll-bar vertical\" style=\"height: 654px; display: block;\">\n          <div class=\"thumb\" style=\"top: 0px; height: 279.553px;\"></div>\n        </div>\n        <div class=\"viewport\" style=\"height: 654px;\">\n          <div class=\"overview\" style=\"top: 0px;\">\n            <h3>AEM Personalization improves AT&amp;T's marketing focus</h3>\n            <p>Since 2011, AT&amp;T, the largest telecommunication provider in \n              the United States, has been using Adobe  Platform for their customer \n              facing website www.att.com. AEM has been especially helpful to create, \n              manage  content by the merchandising team on a daily basis to meet their\n              marketing needs much better than ever  before.</p>\n            <h4>Targeted Content using Personalization</h4>\n            <p>With the everyday competitions from the other telecom providers \n              in the country, AT&amp;T  finds the need to update their website content\n              with advertisements, offers, promotions, campaigns,  discount programs \n              and such on a regular basis. These programs are usually targeted based \n              on the  customer profile or the geography. When AT&amp;T started with \n              the AEM's personalization features at  first, they customized their \n              personalization profile based on the customer profile received from  \n              their backend. If the customer is not logged in, then the geographical \n              profile supplied from the CDN  provider is used to target the content.</p>\n            <h4><strong>Challenge 1:</strong> Marketing campaigns were either based on user profile or the  geography</h4>\n            <p>AT&amp;T's merchandising team realized it later that current \n              personalization design in place, restricted  them from using campaigns \n              in combination of profiles from both profiles. When they tried to create\n              segmentation rules using user profile attributes and geographical \n              profile which are not common or  relatable to the user  profile, they \n              hit a roadblock.</p>\n            <h4><strong>Challenge 2:</strong> Repetitive development need for each new profile attribute added </h4>\n            <p>Whenever there is a new attribute added to the user or \n              geographical profile, there was a repeated  development required to \n              create a trait for each one of them in order to make them available for \n              designing the segmentation rules.</p>\n            <p>As a result of this constantly growing profile attributes, the \n              sidekick and the codebase started  growing with the duplicate trait \n              components. This resulted in poor authoring experience and  increased \n              training to the authors to identify newly added traits.</p>\n            <h4><strong>Solution:</strong> Combine geo-profile and user profile &amp; generalize traits</h4>\n            <p>In order to overcome both the challenges, AT&amp;T developed an \n              OSGi configuration that will hold all  the geographical and user profile\n              attributes along with the type of the attribute value such as string,  \n              number, float, boolean etc.</p>\n            <p>For the first challenge, the client context profile building \n              feature is extended to combine the user  profile and geographical \n              profile attributes together and persist in the local storage of the \n              browser for  the content targeting feature to use against the \n              segmentation rules. This made the segmentation  rules with combined \n              attribute possible in real-time.</p>\n            <p>For the second challenge, a generalized trait component is \n              created which can choose between the  user profile and geo-profile to \n              list the attributes and possible conditions from the OSGi configuration \n              created earlier.</p>\n            <h4><strong>Results:</strong> Significant gains in productivity, content targeting, and reduced  training needs and development efforts.</h4>\n            <p>With the combination made  available as  a  single profile, \n              marketing team is  now able  to create\n              segmentation rules combining the profile attributes from user \n              profile and geo-profile from CDN. This  enhanced  content targeting in a\n              much  better way led to a  broader customer base.</p>\n            <p>Whenever there is a new attribute added to either of these \n              profiles, marketing team is able to  cooperate with the operations team \n              to add the newly added attribute to either of these profiles and  made \n              them available for segmentation in just a matter of minutes compared to \n              days as it used to be  before relying on code  change  and  upcoming \n              releases.</p>\n            <p>The authoring experience for creating/editing segmentation rules \n              is better now with an intuitive  sidekick with reduced number of traits \n              and a single generalized trait that can be used for any of the  \n              attributes. This resulted in cut down of training to the authors as \n              there are no new traits added for  every attribute.</p>\n          </div>\n        </div>\n        <div class=\"scroll-bar horizontal\">\n          <div class=\"thumb\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Third Fold--></section>"

/***/ }),

/***/ "./src/app/casestudy/casestudy.component.ts":
/*!**************************************************!*\
  !*** ./src/app/casestudy/casestudy.component.ts ***!
  \**************************************************/
/*! exports provided: CasestudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasestudyComponent", function() { return CasestudyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CasestudyComponent = /** @class */ (function () {
    function CasestudyComponent() {
    }
    CasestudyComponent.prototype.ngOnInit = function () {
    };
    CasestudyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casestudy',
            template: __webpack_require__(/*! ./casestudy.component.html */ "./src/app/casestudy/casestudy.component.html"),
            styles: [__webpack_require__(/*! ./casestudy.component.css */ "./src/app/casestudy/casestudy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CasestudyComponent);
    return CasestudyComponent;
}());



/***/ }),

/***/ "./src/app/community/community.component.css":
/*!***************************************************!*\
  !*** ./src/app/community/community.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/community/community.component.html":
/*!****************************************************!*\
  !*** ./src/app/community/community.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"community\" class=\"community-section\"> \n  <!--Fifth Fold-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <h2>Community Leadership</h2>\n      <span class=\"sub-head\">Join, Speak, Organize, Build or Connect with an army of AEM Developers</span>\n      <ul class=\"community-list\" style=\"width: 1230px;\">\n        <a href=\"https://www.meetup.com/San-Francisco-Adobe-Experience-Cloud/\">\n        <li class=\"wow fadeInDown\" style=\"visibility: visible; animation-name: fadeInDown;\"><img src=\"assets/images/sanfransisco.svg\" alt=\"San Fransisco\" title=\"San Fransisco\"></li>\n        </a> <a href=\"https://www.meetup.com/New-York-Adobe-Experience-Cloud-Developer-Community/\">\n        <li class=\"wow fadeInDown\" style=\"visibility: visible; animation-name: fadeInDown;\"><img src=\"assets/images/nyc.svg\" alt=\"New York City\" title=\"New York City\"></li>\n        </a> <a href=\"https://www.meetup.com/Adobe-Experience-Cloud-Chicago-Developer-Community/\">\n        <li class=\"wow fadeInDown\" style=\"visibility: visible; animation-name: fadeInDown;\"><img src=\"assets/images/chicago.svg\" alt=\"Chicago\" title=\"Chicago\"></li>\n        </a> <a href=\"https://www.meetup.com/Atlanta-Adobe-Experience-Manager-Meetup-Group/\">\n        <li class=\"wow fadeInDown\" style=\"visibility: visible; animation-name: fadeInDown;\"><img src=\"assets/images/atlanta.svg\" alt=\"Atlanta\" title=\"Atlanta\"></li>\n        </a> <a href=\"https://www.meetup.com/Boston-Adobe-Experience-Manager/\">\n        <li class=\"wow fadeInUp\" data-wow-delay=\".3s\" style=\"visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;\"><img src=\"assets/images/boston.svg\" alt=\"Boston\" title=\"Boston\"></li>\n        </a> <a href=\"https://www.meetup.com/Washington-DC-AEM-Developer-Community/\">\n        <li class=\"wow fadeInUp\" data-wow-delay=\".3s\" style=\"visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;\"><img src=\"assets/images/washington.svg\" alt=\"Washington\" title=\"Washington\"></li>\n        </a> <a href=\"https://www.meetup.com/Seattle-Adobe-Experience-Cloud-Developer-Community/\">\n        <li class=\"wow fadeInUp\" data-wow-delay=\".3s\" style=\"visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;\"><img src=\"assets/images/seattle.svg\" alt=\"Seattle\" title=\"Seattle\"></li>\n        </a> <a href=\"https://www.facebook.com/groups/AdobeCQ\">\n        <li class=\"wow fadeInUp\" data-wow-delay=\".3s\" style=\"visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;\"><img src=\"assets/images/facebook.svg\" alt=\"Facebook\" title=\"Facebook\"></li>\n        </a>\n      </ul>\n    </div>\n  </div>\n  <!--Fourth Fold--></section>\n<section id=\"serivces\" class=\"content-section\"> \n  <!--Sixth Fold-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <h3 class=\"wow fadeInLeft\" style=\"visibility: visible; animation-name: fadeInLeft;\">Adobe Global Community</h3>\n      <span class=\"sub-head wow fadeInRight\" style=\"visibility: visible; animation-name: fadeInRight;\">Founding Board Members</span>\n      <ul class=\"member-list\">\n        <li class=\"wow zoomIn\" style=\"visibility: visible; animation-name: zoomIn;\"><img src=\"assets/images/intel-logo.png\" alt=\"intel\" title=\"intel\"></li>\n        <li class=\"wow zoomIn\" data-wow-delay=\".1s\" style=\"visibility: visible; animation-delay: 0.1s; animation-name: zoomIn;\"><img src=\"assets/images/symantec-logo.png\" alt=\"symantec\" title=\"symantec\"></li>\n        <li class=\"wow zoomIn\" data-wow-delay=\".2s\" style=\"visibility: visible; animation-delay: 0.2s; animation-name: zoomIn;\"><img src=\"assets/images/artyllect-logo.png\" alt=\"ARTYLLECT\" title=\"ARTYLLECT\"></li>\n        <li class=\"wow zoomIn\" data-wow-delay=\".3s\" style=\"visibility: visible; animation-delay: 0.3s; animation-name: zoomIn;\"><img src=\"assets/images/cisco-logo.png\" alt=\"CISCO\" title=\"CISCO\"></li>\n        <li class=\"wow zoomIn\" data-wow-delay=\".4s\" style=\"visibility: visible; animation-delay: 0.4s; animation-name: zoomIn;\"><img src=\"assets/images/stanford-logo.png\" alt=\"Stanford\" title=\"Stanford\"></li>\n      </ul>\n      <p class=\"wow fadeIn\" data-wow-delay=\".5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;\">Artyllect\n        is the founding board member of Adobe Global Community (AGC) along with\n        Intel, Stanford, Symantec, and Cisco. AGC is a 501 (c) (3) Califonia \n        non-profit.<br>\n        For more information: <a href=\"https://adobecommunity.org/\" target=\"_blank\" title=\"www.adobecommunity.org\">www.adobecommunity.org</a> </p>\n      <p class=\"wow fadeIn\" data-wow-delay=\".7s\" style=\"visibility: visible; animation-delay: 0.7s; animation-name: fadeIn;\">The\n        Adobe Global Community (AGC) is an independent, member-led group of \n        practitioners of Adobe solutions whose mission is to share knowledge, \n        facilitate learning and enable professional networking around the Adobe \n        technology platform. We facilitate collaboration, education, and events \n        that enable members to share best practices and real-life success \n        stories that can be used to help maximize investments in Adobe \n        solutions.</p>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/community/community.component.ts":
/*!**************************************************!*\
  !*** ./src/app/community/community.component.ts ***!
  \**************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunityComponent = /** @class */ (function () {
    function CommunityComponent() {
    }
    CommunityComponent.prototype.ngOnInit = function () {
    };
    CommunityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.css */ "./src/app/community/community.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n  background: black;\r\n  color: white;\r\n  padding: 20px;\r\n  border: none;\r\n  cursor: pointer;\r\n  border-radius: 5px;\r\n}\r\n\r\n.scroll-to-top {\r\n    position: fixed;\r\n    bottom: 15px;\r\n    right: 15px;\r\n    opacity: 0;\r\n    transition: all .2s ease-in-out;\r\n}\r\n\r\n.show-scroll {\r\n    opacity: 1;\r\n    transition: all .2s ease-in-out;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\" class=\"contact-section\"> \n  <!--Eight Fold-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"left-col wow slideInLeft\" style=\"visibility: visible; animation-name: slideInLeft;\">\n        <h3>Contact Us</h3>\n        <ul class=\"contact-details\">\n          <li class=\"address\"> <span class=\"heading\">Address</span>\n            <p>Artyllect Consulting<br>\n              424 Clay Street<br>\n              San Francisco, CA</p>\n          </li>\n          <li class=\"phone\"> <span class=\"heading\">Phone</span>\n            <p>Phone: <a href=\"tel:4157388881\" title=\"415.738.8881\">415.738.8881</a></p>\n          </li>\n          <li class=\"email\"> <span class=\"heading\">Email</span>\n            <p><a href=\"mailto:neil@artyllect.com\" title=\"neil@artyllect.com\">neil@artyllect.com</a></p>\n          </li>\n        </ul>\n      </div>\n      <div id=\"contactfrm\" class=\"right-col wow slideInRight\" style=\"visibility: visible; animation-name: slideInRight;\">\n        <h2>Contact Us</h2>\n        <!-- <p>You can expect a response within 24 hours.</p> -->\n        <form id=\"contactForm\" role=\"form\" class=\"contact-form\" action=\"#\" method=\"post\" novalidate=\"novalidate\">\n          <fieldset class=\"form-group\">\n            <label for=\"name\">Your Name (required)</label>\n            <input id=\"name\" name=\"name\" required=\"\" aria-required=\"true\" type=\"text\">\n          </fieldset>\n          <fieldset class=\"form-group\">\n            <label for=\"mail\">Your Email (required)</label>\n            <input id=\"mail\" name=\"email\" required=\"\" aria-required=\"true\" type=\"email\">\n          </fieldset>\n          <fieldset class=\"form-group\">\n            <label for=\"subject\">Subject</label>\n            <input id=\"subject\" name=\"subject\" type=\"text\">\n          </fieldset>\n          <fieldset class=\"form-group\">\n            <label for=\"message\">Your Message</label>\n            <textarea name=\"message\" id=\"message\"></textarea>\n          </fieldset>\n          <button type=\"submit\" id=\"submit\" name=\"submit\" title=\"Submit\">Send</button>\n        </form>\n        <div class=\"spinner\" style=\"display: none;\">\n          <div class=\"double-bounce1\"></div>\n          <div class=\"double-bounce2\"></div>\n        </div>\n        <div class=\"success\" style=\"display: none;\"></div>\n      </div>\n    </div>\n  </div>\n\n\n  <button [ngClass]=\"{'show-scroll': navIsFixed}\" (click)=\"scrollToTop()\" class=\"scroll-to-top\">\n    Scroll To Top\n</button>\n  <!--Eight Fold--></section>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(document) {
        this.document = document;
    }
    ContactComponent.prototype.onWindowScroll = function () {
        if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
            this.navIsFixed = true;
        }
        else if (this.navIsFixed && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
            this.navIsFixed = false;
        }
    };
    ContactComponent.prototype.scrollToTop = function () {
        (function smoothscroll() {
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 5));
            }
        })();
    };
    ContactComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ContactComponent.prototype, "onWindowScroll", null);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"main-banner-col\">\n    <ul class=\"test\">\n        <li *ngFor=\"let course of courses\">{{ course }}</li>\n    </ul> \n <!--First Fold-->\n <div class=\"container\">\n  <div class=\"row\">\n    <div class=\"left-col wow slideInLeft\" style=\"visibility: visible; animation-name: slideInLeft;\">\n      <h1>World-Class, Certified Adobe Experience Manager Implementation Experts</h1>\n      <span class=\"sub-head\">An Adobe Solution Partner Company based in San Francisco.</span>\n      <ul>\n        <li> <img src=\"assets/images/main-icon-one.png\" alt=\"Adobe Experience Manager\" title=\"Adobe Experience Manager\">\n          <div class=\"text-bar\">\n            <h4>Adobe Experience Manager</h4>\n            <p>An industrial grade enterprise web content management platform.</p>\n          </div>\n        </li>\n        <li> <img src=\"assets/images/main-icon-two.png\" alt=\"Adobe Audience Manager\" title=\"Adobe Audience Manager\">\n          <div class=\"text-bar\">\n            <h4>Adobe Audience Manager</h4>\n            <p>The next generation of Data Management Platform (DMP) to \n              accelerate the delivery of personalized experiences with speed and \n              precision.</p>\n          </div>\n        </li>\n      </ul>\n      <div class=\"bottom-logo\"><img src=\"assets/images/adobe-logo.png\" alt=\"Adobe Solution Partner\" title=\"Adobe Solution Partner\"></div>\n    </div>\n    <div class=\"right-col\"> <img class=\"macimg\" src=\"assets/images/mac-bg.png\" alt=\"\" title=\"\">\n      <h3>Featured Clients</h3>\n      <ul>\n        <li class=\"wow fadeIn\" data-wow-delay=\".1s\" style=\"visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/activision-logo.png\" alt=\"ACTIVISION\" title=\"ACTIVISION\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".1s\" style=\"visibility: visible; animation-delay: 0.1s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/adobe-top.png\" alt=\"Adobe\" title=\"Adobe\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".15s\" style=\"visibility: visible; animation-delay: 0.15s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/alex-top.png\" alt=\"ALEX AND ANI\" title=\"ALEX AND ANI\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".2s\" style=\"visibility: visible; animation-delay: 0.2s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/att-top.png\" alt=\"AT&amp;T\" title=\"AT&amp;T\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".25s\" style=\"visibility: visible; animation-delay: 0.25s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/autodesk-top.png\" alt=\"AUTODESK\" title=\"AUTODESK\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".3s\" style=\"visibility: visible; animation-delay: 0.3s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/barclays-logo.png\" alt=\"BARCLAYS\" title=\"BARCLAYS\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".35s\" style=\"visibility: visible; animation-delay: 0.35s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/cisco-logo.png\" alt=\"CISCO\" title=\"CISCO\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".4s\" style=\"visibility: visible; animation-delay: 0.4s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/cocacola-logo.png\" alt=\"CocaCola\" title=\"CocaCola\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".45s\" style=\"visibility: visible; animation-delay: 0.45s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/directv-top.png\" alt=\"DIRECTV\" title=\"DIRECTV\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/express-top.png\" alt=\"EXPRESS\" title=\"EXPRESS\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".55s\" style=\"visibility: visible; animation-delay: 0.55s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/jpmorgan-logo.png\" alt=\"JPMorganChase\" title=\"JPMorganChase\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".6s\" style=\"visibility: visible; animation-delay: 0.6s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/legg-top.png\" alt=\"LEGG MASON\" title=\"LEGG MASON\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".65s\" style=\"visibility: visible; animation-delay: 0.65s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/national-top.png\" alt=\"NATIONAL INSTRUMENTS\" title=\"NATIONAL INSTRUMENTS\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".7s\" style=\"visibility: visible; animation-delay: 0.7s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/rovi-top.png\" alt=\"rovi\" title=\"rovi\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".75s\" style=\"visibility: visible; animation-delay: 0.75s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/riverbed-top.png\" alt=\"riverbed\" title=\"riverbed\"></div>\n        </li>\n        <li class=\"wow fadeIn\" data-wow-delay=\".8s\" style=\"visibility: visible; animation-delay: 0.8s; animation-name: fadeIn;\">\n          <div class=\"img-logo\"><img src=\"assets/images/silicon-top.png\" alt=\"SILICON LABS\" title=\"SILICON LABS\"></div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<!--First Fold--></section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(db) {
        var _this = this;
        db.list('/courses').valueChanges().subscribe(function (courses) {
            _this.courses = courses;
            console.log(_this.courses);
        });
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/includes/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/includes/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/includes/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/includes/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"wow slideInUp\" style=\"visibility: visible; animation-name: slideInUp;\"> \n  <!--Footer Fold-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"footer-top-row\">\n        <div class=\"social-col\">\n          <div class=\"social-inner\"> <a href=\"https://www.facebook.com/groups/AdobeCQ/\" target=\"_blank\" title=\"Facebook\"><img src=\"assets/images/facebook_social.svg\" alt=\"Facebook\" title=\"Facebook\"></a> <a href=\"https://twitter.com/artyllect\" target=\"_blank\" title=\"Twitter\"><img src=\"assets/images/twitter-social.svg\" alt=\"Twitter\" title=\"Twitter\"></a> <a href=\"https://www.linkedin.com/company/artyllect-consulting\" target=\"_blank\" title=\"Linkedin\"><img src=\"assets/images/linkedin_social.svg\" alt=\"Linkedin\" title=\"Linkedin\"></a> </div>\n        </div>\n        <span class=\"sub-head\">Ask us how we can help you upgrade to AEM 6.4 at high speed!</span>\n        <ul class=\"footer-content\">\n          <li>\n            <h5>Address</h5>\n            <p>Artyllect Consulting<br>\n              424 Clay St,<br>\n              San Francisco, CA 94111, USA</p>\n          </li>\n          <li>\n            <h5>Contact</h5>\n            <p>Phone: <a href=\"tel:+14157388881\" title=\"+1 415-738-8881\">+1 415-738-8881</a><br>\n              <a href=\"mailto:neil@artyllect.com\" title=\"neil@artyllect.com\">neil@artyllect.com</a></p>\n          </li>\n          <li>\n            <h5>About</h5>\n            <p><a href=\"#community\" title=\"Community\">Community</a><br>\n              <a href=\"#clients\" title=\"Clients\">Clients</a><br>\n              <a href=\"#caseStudies\" title=\"Case Studies\">Case Studies</a><br>\n              <a href=\"#aboutUs\" title=\"About Us\">About Us</a><br>\n              <a href=\"#contact\" title=\"Contact\">Contact</a></p>\n          </li>\n          <li>\n            <h5>Services</h5>\n            <p><a href=\"javascript:void(0);\" title=\"Adobe Experience Manager\">Adobe Experience Manager</a><br>\n              <a href=\"javascript:void(0);\" title=\"Adode Audience Manager\">Adode Audience Manager</a></p>\n          </li>\n        </ul>\n      </div>\n      <div class=\"footer-bottom-row\">\n        <p>©2018 Artyllect Consulting. All rights reserved. Privacy Policy.</p>\n        <img src=\"assets/images/footer-img.png\" alt=\"California\" title=\"California\"> </div>\n    </div>\n  </div>\n  <!--Footer Fold--></footer>"

/***/ }),

/***/ "./src/app/includes/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/includes/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/includes/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/includes/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/includes/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/includes/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/includes/header/header.component.html":
/*!*******************************************************!*\
  !*** ./src/app/includes/header/header.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"\"> \n  <!--Header Fold-->\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n          <a class=\"navbar-brand\" [routerLink]=\"['']\"><img src=\"assets/images/logo.jpg\" alt=\"Artyllect\" title=\"Artyllect\"></a> </div>\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a [routerLink]=\"['about']\" title=\"About Us\">About Us</a></li>\n            <!-- <li><a title=\"Clients\">Clients</a></li> -->\n            <li><a [routerLink]=\"['case']\" title=\"Case Studies\">Case Studies</a></li>\n            <li><a [routerLink]=\"['community']\" title=\"Community\">Community</a></li>\n            <li><a [routerLink]=\"['contact']\" title=\"Contact\">Contact</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n  <!--Header Fold--></header>"

/***/ }),

/***/ "./src/app/includes/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/includes/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/includes/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/includes/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDNI_FaWf_XeuzE9aWAi8_x6gXhObEqaWg",
        authDomain: "fed-netsol-bfae6.firebaseapp.com",
        databaseURL: "https://fed-netsol-bfae6.firebaseio.com",
        projectId: "fed-netsol-bfae6",
        storageBucket: "fed-netsol-bfae6.appspot.com",
        messagingSenderId: "1058067585843"
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Design\A PRACTICE EXAMPLE\Angular6\assignment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map