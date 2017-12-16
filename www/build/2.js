webpackJsonp([2],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroModule", function() { return IntroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroModule = (function () {
    function IntroModule() {
    }
    IntroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */]
            ]
        })
    ], IntroModule);
    return IntroModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Intro = (function () {
    function Intro(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Intro.prototype.goToHome = function () {
        this.navCtrl.setRoot('Tabs');
    };
    Intro.prototype.slideNext = function () {
        this.slides.slideNext();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], Intro.prototype, "slides", void 0);
    Intro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\Users\camel\Documents\novel\rpgNovel\src\pages\intro\intro.html"*/`<ion-slides pager="false">\n\n  <ion-slide>\n    <img src="images/slide1.png" />\n    <h2> First slide </h2>\n    <p> Welcome to this baller APP </p>\n    <button ion-button color="dark">Login here (doesn\'t do anything yet)</button><p> OR </p>\n    <button ion-button color="light" (click)="slideNext()">Continue to next slide and Register</button>\n  </ion-slide>\n\n  <ion-slide>\n    <img src="images/slide2.png" />\n    <h2> Second slide </h2>\n    <p> Enter email, username, password etc. </p>\n    <button ion-button color="light" (click)="slideNext()">Continue</button>\n  </ion-slide>\n\n  <ion-slide>\n    <img src="images/slide3.png" />\n    <h2> Third slide </h2>\n    <p> Enter any extra details that need to be saved to users profile </p>\n    <button ion-button color="light" (click)="slideNext()">Continue</button>\n  </ion-slide>\n\n  <ion-slide>\n    <ion-row>\n      <ion-col>\n        <img src="images/slide4.png" />\n       <h2> Fourth slide </h2>\n       <p> Profile created, continue to APP </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <button ion-button color="light" (click)="goToHome()">Start Using My App</button>\n      </ion-col>\n    </ion-row>\n  </ion-slide>\n\n</ion-slides>`/*ion-inline-end:"C:\Users\camel\Documents\novel\rpgNovel\src\pages\intro\intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], Intro);
    return Intro;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=2.js.map