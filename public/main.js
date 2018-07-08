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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _new_listing_new_listing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new-listing/new-listing.component */ "./src/app/new-listing/new-listing.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'wishlist', component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_5__["WishlistComponent"] },
    { path: 'listings/add', component: _new_listing_new_listing_component__WEBPACK_IMPORTED_MODULE_7__["NewListingComponent"] },
    { path: 'listings/:id', component: _listing_listing_component__WEBPACK_IMPORTED_MODULE_6__["ListingComponent"] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'messages', component: _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
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

module.exports = "<header class=\"h-100\">\n  <mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark cyan scrolling-navbar intro-fixed-nav\" [containerInside]=\"false\">\n    <logo>\n      <a class=\"logo navbar-brand\" href=\"#\">\n        <img src=\"https://mdbootstrap.com/img/logo/mdb-transparent.png\" height=\"30\" class=\"d-inline-block align-top\" alt=\"\">\n      </a>\n    </logo>\n    <links>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\" mdbWavesEffect>\n          <a class=\"nav-link\" [routerLink]=\"['/']\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a class=\"nav-link\" (click)=\"newListing()\">Add new Listing</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a class=\"nav-link\" (click)=\"logIn()\">LogIn</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a class=\"nav-link\" (click)=\"signUp()\">SignUp</a>\n        </li>\n        <li class=\"nav-item waves-light\" mdbWavesEffect>\n          <a class=\"nav-link\" (click)=\"logOut()\">Logout</a>\n        </li>\n      </ul>\n    </links>\n  </mdb-navbar>\n</header>\n\n<br><br><br>\n<!--Main Navigation-->\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = /** @class */ (function () {
    function AppComponent(http, globals, router, auth, toastr) {
        this.http = http;
        this.globals = globals;
        this.router = router;
        this.auth = auth;
        this.toastr = toastr;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        var retrievedObject = localStorage.getItem('userObject');
        console.log('retrievedObject: ', JSON.parse(retrievedObject));
    };
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this.http.post('/api/users/logout', {}).subscribe(function (message) {
            console.log('After logout: ', message);
            localStorage.removeItem('userObject');
            _this.toastr.success('Successfully logged out');
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err.error);
        });
    };
    AppComponent.prototype.logIn = function () {
        var _this = this;
        this.auth.getLogin().subscribe(function (data) {
            console.log('data', data);
        }, function (err) {
            if (err.status === 200) {
                _this.router.navigate(['/login']);
            }
            else {
                console.log(err.error);
            }
        });
    };
    AppComponent.prototype.signUp = function () {
        var _this = this;
        this.auth.getSignup().subscribe(function (data) {
            console.log('data', data);
        }, function (err) {
            if (err.status === 200) {
                _this.router.navigate(['/signup']);
            }
            else {
                console.log(err.error);
            }
        });
    };
    AppComponent.prototype.newListing = function () {
        this.router.navigate(['/listings/add']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _new_listing_new_listing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-listing/new-listing.component */ "./src/app/new-listing/new-listing.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_12__["WishlistComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_13__["ListingComponent"],
                _new_listing_new_listing_component__WEBPACK_IMPORTED_MODULE_14__["NewListingComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_15__["MessageComponent"]
            ],
            imports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_19__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_20__["MatSliderModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["NoopAnimationsModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"]
            ],
            providers: [_listing_service__WEBPACK_IMPORTED_MODULE_6__["ListingService"], _globals__WEBPACK_IMPORTED_MODULE_11__["Globals"], _message_service__WEBPACK_IMPORTED_MODULE_16__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.getLogin = function () {
        return this.http.get('api/users/login');
    };
    AuthenticationService.prototype.getSignup = function () {
        return this.http.get('api/users/signup');
    };
    AuthenticationService.prototype.getUser = function (id) {
        return this.http.get("api/users/" + id);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#prodCardImage:hover{\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n  -webkit-transform: scale(2.0);\n          transform: scale(2.0);\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<div class=\"row pt-4\">\n\n  <!-- Sidebar -->\n  <div class=\"col-lg-3\">\n    <form class=\"form\" [formGroup]=\"filterForm\" (ngSubmit)=\"submitFilterForm(filterForm.value)\">\n\n    <div class=\"\">\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <div class=\"col-md-6 col-lg-12 mb-5\">\n          <!-- Panel -->\n          <h5 class=\"font-weight-bold dark-grey-text\"><strong>Search</strong></h5>\n          <div class=\"divider\"></div>\n\n\n            <div class=\"md-form form-group\">\n              <!--<i class=\"fa fa-envelope prefix\"></i>-->\n              <input mdbInputDirective type=\"text\" class=\"form-control\" id=\"form9\" formControlName=\"book_name\">\n              <label for=\"form9\">Search by book name</label>\n            </div>\n\n            <div class=\"md-form form-group\">\n              <!--<i class=\"fa fa-lock prefix\"></i>-->\n              <input mdbInputDirective type=\"text\" class=\"form-control\" id=\"form10\" formControlName=\"author_name\">\n              <label for=\"form10\">Search by author</label>\n            </div>\n\n        </div>\n\n        <!-- Filter by category-->\n        <div class=\"col-md-6 col-lg-12 mb-5\">\n          <h5 class=\"font-weight-bold dark-grey-text\"><strong>Condition</strong></h5>\n          <div class=\"divider\"></div>\n\n          <mat-radio-group formControlName=\"condition\" class=\"example-radio-group\">\n            <mat-radio-button class=\"example-radio-button\" value=\"All\">All</mat-radio-button><br>\n            <mat-radio-button class=\"example-radio-button\" value=\"New\">New</mat-radio-button><br>\n            <mat-radio-button class=\"example-radio-button\" value=\"Almost new\">Almost new</mat-radio-button><br>\n            <mat-radio-button class=\"example-radio-button\" value=\"Slightly damage\">Slightly damage</mat-radio-button><br>\n            <mat-radio-button class=\"example-radio-button\" value=\"Worn\">Worn</mat-radio-button>\n          </mat-radio-group>\n        </div>\n        <!-- /Filter by category-->\n\n      </div>\n      <!-- /Grid row -->\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!-- Filter by price  -->\n        <div class=\"col-md-6 col-lg-12 mb-5\">\n          <h5 class=\"font-weight-bold dark-grey-text\"><strong>Price</strong></h5>\n\n          <div class=\"range-field mt-3\">\n            <!--<input mdbInputDirective formControlName=\"price\" id=\"calculatorSlider\" class=\"no-border\" type=\"range\" value=\"0\" min=\"0\" max=\"10000\">-->\n            <mat-slider style=\"width: 200px;\" formControlName=\"price\"\n              thumbLabel min=\"1\" max=\"10000\"></mat-slider>\n          </div>\n\n          <!-- Grid row -->\n          <div class=\"row justify-content-center\">\n\n            <!-- Grid column -->\n            <div class=\"col-md-6 text-left\">\n              <p class=\"dark-grey-text\"><strong id=\"resellerEarnings\">0$</strong></p>\n            </div>\n            <!-- Grid column -->\n\n            <!-- Grid column -->\n            <div class=\"col-md-6 text-right\">\n              <p class=\"dark-grey-text\"><strong id=\"clientPrice\">319$</strong></p>\n            </div>\n            <!-- Grid column -->\n          </div>\n          <!-- Grid row -->\n\n        </div>\n        <!-- /Filter by price -->\n\n        </div>\n      <!-- /Grid row -->\n    </div>\n  </form>\n  </div>\n  <!-- /.Sidebar -->\n\n  <!-- Content -->\n  <div class=\"col-lg-9\">\n\n    <!-- Products Grid -->\n    <section class=\"section pt-4\">\n\n      <!-- Grid row -->\n      <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-4\" *ngFor=\"let listing of listings;\">\n\n          <div routerLink=\"/listings/{{listing.id}}\" id=\"mainCard\" class=\"card card-cascade narrower card-ecommerce\">\n            <!--Card image-->\n            <div routerLink=\"/listings/{{listing.id}}\" class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n              <img id=\"prodCardImage\" style=\" width:100%; height: 200px;\" src=\"https://bookish-v1.herokuapp.com/{{listing.book_image_url}}\" class=\"img-fluid\" alt=\"sample photo\">\n              <a>\n                <div class=\"mask rgba-brown-slight\"></div>\n              </a>\n            </div>\n            <!--Card image-->\n            <!--Card content-->\n            <div class=\"card-body card-body-cascade text-center\">\n              <!--Category & Title-->\n              <a href=\"\" class=\"grey-text\">\n                <h5>{{listing.author_name}}</h5>\n              </a>\n              <h4 class=\"card-title\">\n                <strong>\n                  <a routerLink=\"/listings/{{listing.id}}\">{{listing.book_name}}</a>\n                </strong>\n              </h4>\n\n              <div  class=\"row justify-content-center\">\n                <h4 style=\"color: red;\">&#8377; {{listing.price}}</h4>\n              </div>\n\n              <!--Description-->\n              <p >Neque porro quisquam est, qui dolorem ipsum quia dolor sit..\n              </p>\n\n              <div class=\"row justify-content-center\">\n                <span class=\"card-text\"><i>by {{listing.user_name}}</i></span>\n              </div>\n              <!--Card footer-->\n              <div class=\"card-footer\">\n                  <span class=\"float-left font-weight-bold\">\n                    <h6><span class=\"badge badge-default\">{{listing.condition}}</span></h6>\n                  </span>\n                <span class=\"float-right\">\n                  <span *ngIf=\"current_user!=null\">\n                  <a class=\"active\" (click)=\"addWishlist(listing.id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Added to Wishlist\">\n                      <i style=\"\" class=\"fa fa-heart ml-3\"></i>\n                    </a>\n                  </span>\n                  </span>\n              </div>\n            </div>\n            <!--Card content-->\n          </div>\n          <!--Card-->\n\n        </div>\n        <!--Grid column-->\n\n\n      </div>\n      <!--Grid row-->\n\n      <!--Grid row-->\n    </section>\n    <!-- /.Products Grid -->\n\n  </div>\n  <!-- /.Content -->\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(listingService, router, wishlistService, fb) {
        var _this = this;
        this.listingService = listingService;
        this.router = router;
        this.wishlistService = wishlistService;
        this.fb = fb;
        this.listings = [];
        this.current_user = localStorage.getItem('userObject');
        this.filterForm = fb.group({
            price: [''],
            author_name: [''],
            book_name: [''],
            condition: ['']
        });
        this.filterForm.valueChanges.subscribe(function (data) {
            _this.submitFilterForm(data);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listingService.getListings().subscribe(function (listings) {
            console.log(listings);
            _this.listings = listings;
        });
    };
    DashboardComponent.prototype.ngOnChanges = function (changes) {
        console.log(changes.filterForm);
    };
    DashboardComponent.prototype.submitFilterForm = function (data) {
        var _this = this;
        if (data.condition === 'All') {
            data.condition = '';
        }
        this.listingService.getFilteredList(data).subscribe(function (items) {
            console.log(items);
            _this.listings = items;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent.prototype.showListing = function (id) {
        console.log('Show listing init: ', id);
        this.router.navigate(["/listings/" + id]);
    };
    DashboardComponent.prototype.addWishlist = function (id) {
        this.wishlistService.addWishlistItem(id).subscribe(function (data) {
            console.log('wishList item', data);
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.current_user = undefined;
    }
    Globals = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/listing.service.ts":
/*!************************************!*\
  !*** ./src/app/listing.service.ts ***!
  \************************************/
/*! exports provided: ListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingService = /** @class */ (function () {
    function ListingService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
    }
    ListingService.prototype.getListings = function () {
        return this.http.get('api/listings');
    };
    ListingService.prototype.getListing = function (id) {
        return this.http.get("api/listings/" + id);
    };
    ListingService.prototype.createListing = function (data) {
        return this.http.post('api/listings/add', {
            book_name: data.book_name,
            author_name: data.author_name,
            condition: data.condition,
            price: data.price,
            image: data.image
        });
    };
    ListingService.prototype.getListItems = function () {
        return this.http.get('api/listings/user');
    };
    ListingService.prototype.deleteWishlistItem = function (id) {
        return this.http.get("api/listings/delete/" + id);
    };
    ListingService.prototype.getFilteredList = function (data) {
        return this.http.get('api/listings/filter', {
            params: {
                book_name: data.book_name,
                author_name: data.author_name,
                price: data.price,
                condition: data.condition
            }
        });
    };
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], ListingService);
    return ListingService;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container\"> <div class=\"col-3 card mx-4 p-4\" style=\"box-shadow:2px; margin-bottom:30px;\">-->\n<!--<img src='http://localhost:4000/{{listing.book_image_url}}' width=\"300px\" height=\"100px\">-->\n<!--<h4 class=\"product-name\"><b>{{listing.book_name}}</b></h4>-->\n<!--<div class=\"product-manufacturer\">{{listing.author_name}}</div>-->\n<!--<div class=\"row\">-->\n<!--<div class=\"col m-3 p-2\">100px-->\n<!--<b>&#8377; {{listing.price}}</b>-->\n<!--</div>-->\n<!--</div>-->\n<!--<div class=\"row\">-->\n<!--<button class=\"col btn btn-primary m-3\" (click)=\"addWishlist(listing.id)\">Add to Wishlist</button>-->\n<!--</div>-->\n<!--</div>-->\n\n<!--<div><h4 id=\"trial\" style=\"text-align: center;\">Contact the Seller</h4></div>-->\n<!--<hr id=\"point\" style=\"margin-bottom: 40px;\">-->\n<!--<div class=\"container\">-->\n<!--<form #contactSellerForm=\"ngForm\" id=\"contactForm\" (ngSubmit)=\"sendMessage(contactSellerForm.value)\">-->\n<!--<div class=\"form-group\">-->\n<!--<input name=\"message\" type=\"text\" class=\"form-control\" id=\"message\" required ngModel>-->\n<!--</div>-->\n\n<!--<button type=\"submit\" class=\"btn btn-success\">Send</button>-->\n\n<!--</form>-->\n<!--</div>-->\n<!--</div>-->\n<!--<button class=\"btn btn-success\" (click)=\"getMessages()\">Message</button>-->\n\n<div class=\"container\">\n\n  <section id=\"productDetails\" class=\"pb-5\">\n\n    <!--News card-->\n    <div class=\"card mt-5 hoverable\">\n      <div class=\"row mt-5\">\n        <div class=\"col-lg-6\">\n          <div class=\"row mx-2\">\n            <!--Carousel Wrapper-->\n            <div id=\"carousel-thumb\" class=\"carousel slide carousel-fade carousel-thumbnails mb-5 pb-4\" data-ride=\"carousel\">\n\n              <!--Slides-->\n              <div class=\"carousel-inner text-center text-md-left\" role=\"listbox\">\n                <div class=\"carousel-item active\">\n                  <img src=\"https://bookish-v1.herokuapp.com/{{listing.book_image_url}}\" alt=\"First slide\" class=\"img-fluid\">\n                </div>\n              </div>\n              <!--/.Slides-->\n\n            </div>\n            <!--/.Carousel Wrapper-->\n          </div>\n          <!--Grid row-->\n        </div>\n        <div class=\"col-lg-5 mr-3 text-center text-md-left\">\n          <h2 class=\"h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4\">\n            <strong>{{listing.book_name}} </strong>\n          </h2>\n          <span class=\"badge badge-danger product mb-4 ml-xl-0 ml-4\">{{listing.condition}}</span>\n\n\n          <span class=\"badge badge-success product mb-4 ml-2\">SALE</span>\n          <h3 class=\"h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4\">\n                            <span class=\"red-text font-weight-bold\">\n                                <strong>&#8377; {{listing.price}}</strong>\n                            </span>\n          </h3>\n\n          <p class=\"ml-xl-0 ml-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente nesciunt atque nemo neque ut officiis\n            nostrum incidunt maiores, magni optio et sunt suscipit iusto nisi totam quis, nobis mollitia\n            necessitatibus.\n          </p>\n          <p class=\"ml-xl-0 ml-4\">\n            <strong>Author: </strong>{{listing.author_name}}</p>\n          <p class=\"ml-xl-0 ml-4\">\n            <strong>Seller: </strong>{{listing.user_name}}</p>\n          <p class=\"ml-xl-0 ml-4\">\n            <strong>Condition: </strong>{{listing.condition}}</p>\n          <p class=\"ml-xl-0 ml-4\">\n            <strong>Availability: </strong>In stock</p>\n\n          <!-- Add to Cart -->\n          <section class=\"color\">\n            <div class=\"mt-5\">\n\n              <div class=\"row mt-3 mb-4\">\n                <div class=\"col-md-12 text-center text-md-left text-md-right\">\n                  <button class=\"btn btn-primary btn-rounded waves-effect waves-light\" (click)=\"addWishlist(listing.id)\">\n                    <i class=\"fa fa-heart mr-2\" aria-hidden=\"true\"></i> Add to wishlist</button>\n                </div>\n              </div>\n            </div>\n          </section>\n          <!-- /.Add to Cart -->\n        </div>\n      </div>\n    </div>\n    <!--News card-->\n\n  </section>\n\n  <div *ngIf=\"showMessage;\">\n    <div class=\"divider-new\">\n      <h3 class=\"h3-responsive font-weight-bold blue-text mx-3\">Your recent messages with {{listing.user_name}} <small>(Seller)</small></h3>\n    </div>\n\n    <div class=\"row\" *ngFor=\"let message of conversation;\" id=\"messages\">\n      <div style=\"width: 400px; border-radius: 25px; border-top-left-radius: 0px; background-color: lightgoldenrodyellow; padding: 10px; margin-bottom: 10px\" >{{message.content}}</div>\n    </div>\n\n  </div>\n\n  <div id=\"point\" *ngIf=\"current_user; else no_user;\">\n    <section>\n      <div class=\"reply-form\">\n        <h2 class=\"h2 section-heading text-center\">Leave a message for Seller</h2>\n        <br>\n\n        <div class=\"row\">\n          <!--&lt;!&ndash;Image column&ndash;&gt;-->\n          <!--<div class=\"col-sm-2 col-12\">-->\n          <!--<img src=\"https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg\" class=\"avatar rounded-circle z-depth-1-half\">-->\n          <!--</div>-->\n          <!--&lt;!&ndash;/.Image column&ndash;&gt;-->\n\n          <div class=\"col-sm-10 col-12\">\n            <div class=\"md-form\">\n              <form #contactSellerForm=\"ngForm\" id=\"contactForm\" (ngSubmit)=\"sendMessage(contactSellerForm.value)\">\n                <textarea type=\"text\" name=\"message\" id=\"message\" class=\"md-textarea form-control\" required ngModel></textarea>\n\n              <label for=\"message\">Your message</label>\n              <div class=\"text-center mx-auto\">\n                <button type=\"submit\" class=\"btn btn-primary waves-light\" mdbWavesEffect>Send <i class=\"fa fa-send-o ml-2\"></i></button>\n              </div>\n              </form>\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n    </section>\n  </div>\n  <ng-template #no_user>\n    <div class=\"divider-new\">\n      <h3 class=\"h3-responsive font-weight-bold black-text mx-3\">Leave a message for seller by signing in...</h3>\n    </div>\n    <div class=\"row justify-content-md-center\">\n      <button type=\"button\" class=\"btn btn-info waves-effect waves-light\" routerLink=\"/login\">Log In <i class=\"fa fa-sign-in ml-2\"></i></button>\n      <button type=\"button\" class=\"btn btn-info waves-effect waves-light\" routerLink=\"/signup\">Sign Up</button>\n    </div>\n  </ng-template>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListingComponent = /** @class */ (function () {
    function ListingComponent(route, location, listingService, wishlistService, messageService, http) {
        this.route = route;
        this.location = location;
        this.listingService = listingService;
        this.wishlistService = wishlistService;
        this.messageService = messageService;
        this.http = http;
        this.id = +this.route.snapshot.paramMap.get('id');
        this.showMessage = false;
        this.current_user = localStorage.getItem('userObject');
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.getListing();
        this.getMessages();
    };
    ListingComponent.prototype.getListing = function () {
        var _this = this;
        this.listingService.getListing(this.id).subscribe(function (data) {
            console.log('Listing: ', data);
            _this.listing = data;
        }, function (err) {
            console.log(err);
        });
    };
    ListingComponent.prototype.addWishlist = function (id) {
        this.wishlistService.addWishlistItem(id).subscribe(function (data) {
            console.log('wishList item', data);
        }, function (err) {
            console.log(err);
        });
    };
    ListingComponent.prototype.getMessages = function () {
        var _this = this;
        console.log('Fetching messages!', this.id);
        this.messageService.fetchMessages(this.id).subscribe(function (data) {
            console.log('conversation', data);
            _this.conversation = data;
            if (_this.conversation.length > 0) {
                _this.showMessage = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ListingComponent.prototype.sendMessage = function (data) {
        console.log('Inside', data);
        this.messageService.sendMessage(data.message, this.listing.id).subscribe(function (message) {
            console.log(message);
            jquery__WEBPACK_IMPORTED_MODULE_7__('#point').prepend("<div class='row'><div style='width: 400px; border-radius: 25px;\n border-top-left-radius: 0px; background-color: lightgoldenrodyellow;\n padding: 10px; margin-bottom: 10px;'>" + data.message + "</div></div>");
        }, function (err) {
            console.log(err);
        });
    };
    ListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_5__["WishlistService"],
            _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-2 {\n  background: url('login_background.jpg')no-repeat center center;\n  background-size: cover;\n}\n.view {\n  height: 100vh !important;\n}\n.top-nav-collapse {\n  background-color: #3f51b5 !important;\n}\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important;\n}\n@media (max-width: 768px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #3f51b5 !important;\n  }\n}\n.rgba-gradient .full-bg-img {\n  background: linear-gradient(45deg, rgba(83, 125, 210, 0.4), rgba(178, 30, 123, 0.4) 100%);\n}\n.card {\n  background-color: rgba(229, 228, 255, 0.2);\n}\n.md-form .prefix {\n  font-size: 1.5rem;\n  margin-top: 1rem;\n}\n.md-form label {\n  color: #ffffff;\n}\nh6 {\n  line-height: 1.7;\n}\n@media (max-width: 740px) {\n  .full-height,\n  .full-height body,\n  .full-height header,\n  .full-height header .view {\n    height: 1040px;\n  }\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\" card cont\">-->\n  <!--<div class=\"form sign-in\">-->\n    <!--<div class=\"row justify-content-center\">-->\n      <!--<div class=\"col\"></div>-->\n\n      <!--<div class=\"col-6\" style=\"margin-top: 8%;\">-->\n        <!--<div class=\"divider-new\" style=\"margin-bottom: 14%;\">-->\n          <!--<h3 class=\"h3-responsive font-weight-bold blue-text mx-3\">LOG IN</h3>-->\n        <!--</div>-->\n    <!--<form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm.value)\">-->\n\n      <!--&lt;!&ndash; Material input email &ndash;&gt;-->\n      <!--<div class=\"md-form\">-->\n        <!--<i class=\"fa fa-envelope prefix\"></i>-->\n        <!--<input type=\"email\" id=\"materialFormCardEmailEx\" data-error=\"Please enter valid email ID!\" formControlName=\"email\" class=\"form-control\" mdbInputDirective>-->\n        <!--<label for=\"materialFormCardEmailEx\" class=\"font-weight-light\">Your email</label>-->\n      <!--</div>-->\n\n      <!--<br>-->\n\n      <!--&lt;!&ndash; Material input password &ndash;&gt;-->\n      <!--<div class=\"md-form\">-->\n        <!--<i class=\"fa fa-lock prefix\"></i>-->\n        <!--<input type=\"password\" id=\"materialFormCardPasswordEx\" data-error=\"Password is required!\" formControlName=\"password\" class=\"form-control\"-->\n               <!--mdbInputDirective>-->\n        <!--<label for=\"materialFormCardPasswordEx\" class=\"font-weight-light\">Your password</label>-->\n      <!--</div>-->\n\n      <!--<div class=\"text-center py-4 mt-3\">-->\n        <!--<button class=\"btn btn-cyan waves-light\" [disabled]=\"loginForm.invalid\" type=\"submit\" mdbWavesEffect>Login</button>-->\n      <!--</div>-->\n    <!--</form>-->\n      <!--</div>-->\n    <!--<div class=\"col-5\"></div>-->\n    <!--</div>-->\n\n  <!--</div>-->\n  <!--<div class=\"sub-cont\">-->\n    <!--<div class=\"img\">-->\n      <!--<div class=\"img__text m&#45;&#45;up\">-->\n        <!--<h2>New here?</h2>-->\n        <!--<p>Sign up and discover great amount of new opportunities!</p>-->\n      <!--</div>-->\n      <!--<div class=\"img__btn\">-->\n        <!--<span routerLink=\"/signup\" style=\"cursor: pointer;\" class=\"m&#45;&#45;up\">Sign Up</span>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n\n\n<!--Main Navigation-->\n<header>\n\n  <!--&lt;!&ndash;Navbar&ndash;&gt;-->\n  <!--<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar\">-->\n    <!--<logo>-->\n      <!--<a class=\"logo navbar-brand waves-light\" mdbWavesEffect href=\"#\"><strong>MDB</strong></a>-->\n    <!--</logo>-->\n    <!--<links>-->\n      <!--<ul class=\"navbar-nav mr-auto\">-->\n        <!--<li class=\"nav-item active waves-light\" mdbWavesEffect>-->\n          <!--<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>-->\n        <!--</li>-->\n        <!--<li class=\"nav-item waves-light\" mdbWavesEffect>-->\n          <!--<a class=\"nav-link\" href=\"#\">Link</a>-->\n        <!--</li>-->\n        <!--<li class=\"nav-item waves-light\" mdbWavesEffect>-->\n          <!--<a class=\"nav-link\" href=\"#\">Profile</a>-->\n        <!--</li>-->\n      <!--</ul>-->\n      <!--<form class=\"form-inline waves-light\" mdbWavesEffect>-->\n        <!--<div class=\"md-form mt-0\">-->\n          <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\n        <!--</div>-->\n      <!--</form>-->\n    <!--</links>-->\n  <!--</mdb-navbar>-->\n\n  <!--Intro Section-->\n  <section class=\"view intro-2\">\n    <div class=\"full-bg-img mask rgba-gradient\">\n      <div class=\"container flex-center\">\n        <div class=\"d-flex align-items-center content-height w-100\">\n          <div class=\"row flex-center pt-5 mt-3 w-100\">\n            <div class=\"col-md-6 text-center text-md-left mb-5\">\n              <div class=\"white-text\">\n                <h2 class=\"h1 h1-responsive font-bold wow fadeInLeft\" data-wow-delay=\"0.3s\">New here?</h2>\n                <hr class=\"hr-light wow fadeInLeft\" data-wow-delay=\"0.3s\">\n                <h6 class=\"wow fadeInLeft\" data-wow-delay=\"0.3s\">Sign up and get ready to experience the amazing world of books!</h6>\n                <br>\n                <a class=\"btn btn-outline-white wow fadeInLeft waves-light\" data-wow-delay=\"0.3s\" mdbWavesEffect>SIGN UP</a>\n              </div>\n            </div>\n\n            <div class=\"col-md-6 col-xl-5 offset-xl-1\">\n              <!--Form-->\n              <div class=\"card wow fadeInRight\" data-wow-delay=\"0.3s\">\n                <div class=\"card-body\">\n                  <!--Header-->\n                  <div class=\"text-center\">\n                    <h3 class=\"white-text\"><i class=\"fa fa-user white-text\"></i> SIGN IN</h3>\n                    <hr class=\"hr-light\">\n                  </div>\n\n                  <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm(loginForm.value)\">\n\n                    <!-- Material input email -->\n                    <div class=\"md-form\" >\n                      <i class=\"fa fa-envelope prefix white-text\"></i>\n                      <input type=\"email\" id=\"materialFormCardEmailEx\" data-error=\"Please enter valid email ID!\" formControlName=\"email\" class=\"form-control\" mdbInputDirective>\n                      <label for=\"materialFormCardEmailEx\" class=\"font-weight-light\">Your email</label>\n                    </div>\n\n                    <!-- Material input password -->\n                    <div class=\"md-form\">\n                      <i class=\"fa fa-lock prefix white-text\"></i>\n                      <input type=\"password\" id=\"materialFormCardPasswordEx\" data-error=\"Password is required!\" formControlName=\"password\" class=\"form-control\"\n                             mdbInputDirective>\n                      <label for=\"materialFormCardPasswordEx\" class=\"font-weight-light\">Your password</label>\n                    </div>\n\n                    <div class=\"text-center py-4 mt-3\">\n                      <button class=\"btn btn-indigo waves-light\" [disabled]=\"loginForm.invalid\" type=\"submit\" mdbWavesEffect>Login</button>\n                    </div>\n                  </form>\n\n                </div>\n              </div>\n              <!--/.Form-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n</header>\n<!--Main Navigation-->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, globals, router, fb) {
        this.http = http;
        this.globals = globals;
        this.router = router;
        this.fb = fb;
        this.loginForm = fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitForm = function (data) {
        var _this = this;
        console.log('dd', data);
        this.http.post('/api/users/login', {
            name: data.name,
            email: data.email,
            password: data.password
        }).subscribe(function (user) {
            _this.globals.current_user = user;
            console.log('After login: ', user);
            var userObj = { 'id': user.id, 'name': user.name };
            localStorage.setItem('userObject', JSON.stringify(userObj));
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err.error);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message-set.ts":
/*!********************************!*\
  !*** ./src/app/message-set.ts ***!
  \********************************/
/*! exports provided: MessageSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageSet", function() { return MessageSet; });
var MessageSet = /** @class */ (function () {
    function MessageSet(senderId, messages, senderName) {
        this.messages = messages;
        this.senderId = senderId;
        this.senderName = senderName;
    }
    return MessageSet;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = /** @class */ (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.sendMessage = function (message, listingId) {
        return this.http.post('api/messages/create', {
            content: message,
            listingId: listingId
        });
    };
    MessageService.prototype.fetchMessages = function (id) {
        return this.http.get("api/messages/" + id);
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-listing:hover{\n  background: aliceblue;\n}\n"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-5\" style=\"margin-right: 50px\">\n      <div class=\"row\">\n        Your Listings\n      </div>\n      <div class=\"row\">\n          <div class=\"card single-news mb-4 message-listing\" style=\"padding: 10px; height: 100px; cursor: pointer;\" (click)=\"getMessages(item.id)\" mdbTooltip=\"Click listing to view the messages!\" placement=\"right\" mdbWavesEffect *ngFor=\"let item of myListItems;\">\n\n            <div class=\"row\">\n\n              <div class=\"col-md-3\">\n\n                <!--Image-->\n                <div class=\"view overlay rounded z-depth-1 mb-4\">\n                  <img class=\"img-fluid\" src=\"https://bookish-v1.herokuapp.com/{{item.book_image_url}}\" alt=\"Sample image\">\n                </div>\n\n              </div>\n\n              <div class=\"col-md-5\" style=\"margin-bottom: 10px;\">\n                <div class=\"row\"><p style=\"font-size: 18px;\" class=\"font-weight-bold dark-grey-text\">{{item.book_name}}</p></div>\n                <div class=\"row\"><p class=\"dark-grey-text\">{{item.author_name}}</p></div>\n              </div>\n              <div class=\"col\">\n                <div class=\"row\">\n                  <h4><span class=\"badge badge-success\">{{item.price}}</span></h4> &nbsp; &nbsp;\n                  <h4><span class=\"badge badge-warning\">{{item.condition}}</span></h4>\n                </div>\n                <div class=\"row\">\n\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n      </div>\n    </div>\n    <div class=\"col-6\">\n\n      <section class=\"\">\n\n        <!--Main wrapper-->\n        <div class=\"comments-list text-left\">\n          <div class=\"section-heading\">\n            <h3>Messages <span class=\"badge blue\">{{messageSets.length}}</span></h3>\n          </div>\nn          <!--First row-->\n          <div class=\"row\" *ngFor=\"let message of messageSets;\">\n            <!--Image column-->\n            <div class=\"col-sm-2 col-12\">\n              <!--<img src=\"https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg\" class=\"avatar rounded-circle z-depth-1-half\">-->\n            </div>\n            <!--/.Image column-->\n            <!--Content column-->\n            <div class=\"col-sm-10 col-12\">\n              <a><h3 class=\"user-name\">{{message.senderName}}</h3></a>\n              <div class=\"card-data\">\n                <ul class=\"pl-0 list-unstyled\">\n                  <li class=\"comment-date\"><i class=\"fa fa-clock-o\"></i>{{message.messages[0].createdAt}}</li>\n                </ul>\n              </div>\n              <div class=\"comment-text\">\n                <div *ngFor=\"let msg of message.messages\">\n                  {{msg.content}}\n                </div>\n              </div>\n            </div>\n            <!--/.Content column-->\n          </div>\n          <!--/.First row-->\n\n        </div>\n        <!--/.Main wrapper-->\n\n      </section>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _message_set__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../message-set */ "./src/app/message-set.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MessageComponent = /** @class */ (function () {
    function MessageComponent(listingService, wishlistService, messageService, authService) {
        this.listingService = listingService;
        this.wishlistService = wishlistService;
        this.messageService = messageService;
        this.authService = authService;
        this.messageSets = [];
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.getUserSpecificListings();
    };
    MessageComponent.prototype.getMessages = function (id) {
        var _this = this;
        this.messageService.fetchMessages(id).subscribe(function (data) {
            console.log(data);
            _this.organizeData(data);
        }, function (err) {
            console.log(err);
        });
    };
    MessageComponent.prototype.getUserSpecificListings = function () {
        var _this = this;
        this.listingService.getListItems().subscribe(function (myItems) {
            _this.myListItems = myItems;
        }, function (err) {
            console.log(err);
        });
    };
    MessageComponent.prototype.organizeData = function (data) {
        var _this = this;
        var senderIds = [];
        this.messageSets = [];
        for (var i = 0; i < data.length; i++) {
            senderIds.push(data[i].senderId);
        }
        var fin = [];
        var uniq_ids = Array.from(new Set(senderIds));
        console.log(uniq_ids);
        var _loop_1 = function (i) {
            var temp = [];
            for (var j = 0; j < data.length; j++) {
                console.log(data[j]);
                if (data[j].senderId === uniq_ids[i]) {
                    temp.push(data[j]);
                }
            }
            console.log('Message array', temp);
            this_1.authService.getUser(uniq_ids[i]).subscribe(function (user) {
                _this.messageSets.push(new _message_set__WEBPACK_IMPORTED_MODULE_4__["MessageSet"](uniq_ids[i], temp, user.name));
            });
        };
        var this_1 = this;
        for (var i = 0; i < uniq_ids.length; i++) {
            _loop_1(i);
        }
        console.log(this.messageSets);
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_2__["WishlistService"],
            _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"],
            _authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/new-listing/new-listing.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-listing/new-listing.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-nav-collapse {\n  background-color: #f8bbd0 !important;\n}\n.view {\n  height: 100vh !important;\n}\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important;\n}\n@media (max-width: 768px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #f8bbd0 !important;\n  }\n}\n@media (max-width: 740px) {\n  .full-height,\n  .full-height body,\n  .full-height header,\n  .full-height header .view {\n    height: 700px;\n  }\n}\n.card {\n  padding-left: 40px;\n  padding-right: 40px;\n  padding-top: auto;\n}\n"

/***/ }),

/***/ "./src/app/new-listing/new-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-listing/new-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <!-- Intro Section -->\n  <div class=\"view  jarallax\" data-jarallax='{\"speed\": 0.2}' style=\"background-image: url('https://mdbootstrap.com/img/Photos/Others/gradient2.png');\">\n    <div class=\"full-bg-img mask rgba-purple-slight\">\n      <div class=\"container flex-center\">\n\n            <div class=\"card col-6  wow fadeInRight\" data-wow-delay=\"0.3s\">\n              <div class=\"divider-new\" style=\"margin-bottom: 2%;\">\n                <h3 class=\"h3-responsive font-weight-bold blue-text mx-3\">CREATE NEW LISTING</h3>\n              </div>\n              <form  [formGroup]=\"newListingForm\" (ngSubmit)=\"createListing(newListingForm.value)\">\n                <div class=\"md-form\">\n                  <i class=\"fa fa-book prefix\"></i>\n                  <input type=\"text\" id=\"materialFormCardNameEx\" data-error=\"Please enter valid name!\" formControlName=\"book_name\" class=\"form-control\" mdbInputDirective>\n                  <label for=\"materialFormCardNameEx\" class=\"font-weight-light\">Book Name</label>\n                </div>\n\n                <div class=\"md-form\">\n                  <i class=\"fa fa-user prefix\"></i>\n                  <input type=\"email\" id=\"materialFormCardUserEx\" data-error=\"Please enter valid author name!\" formControlName=\"author_name\" class=\"form-control\" mdbInputDirective>\n                  <label for=\"materialFormCardUserEx\" class=\"font-weight-light\">Author Name</label>\n                </div>\n\n                <div class=\"md-form\">\n                  <i class=\"fa fa-rupee prefix\"></i>\n                  <input type=\"text\" id=\"materialFormCardPriceEx\" data-error=\"Please enter valid amount!\" formControlName=\"price\" class=\"form-control\"\n                         mdbInputDirective>\n                  <label for=\"materialFormCardPriceEx\" class=\"font-weight-light\">Price</label>\n                </div>\n\n                <div class=\"md-form\">\n                  <mat-select placeholder=\"Select Condition\" formControlName=\"condition\" class=\"form-control\" mdbInputDirective>\n                    <mat-option *ngFor=\"let condition of conditions\" [value]=\"condition\">\n                      {{condition}}\n                    </mat-option>\n                  </mat-select>\n                </div>\n                <div class=\"md-form\">\n                  <input type=\"file\" id=\"materialFormCardImageEx\"  (change)=\"onFileSelected($event)\"  id=\"image\" formControlName=\"image\" class=\"form-control\"\n                         mdbInputDirective>\n                </div>\n\n                <div class=\"text-center py-4 mt-3\">\n                  <button class=\"btn btn-cyan waves-light\" [disabled]=\"newListingForm.invalid\" type=\"submit\" mdbWavesEffect>Create Listing</button>\n                </div>\n              </form>\n            </div>\n        </div>\n      </div>\n    </div>\n\n</header>\n<!--Main Navigation-->\n\n\n"

/***/ }),

/***/ "./src/app/new-listing/new-listing.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-listing/new-listing.component.ts ***!
  \******************************************************/
/*! exports provided: NewListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewListingComponent", function() { return NewListingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewListingComponent = /** @class */ (function () {
    function NewListingComponent(listingService, router, http, fb) {
        this.listingService = listingService;
        this.router = router;
        this.http = http;
        this.fb = fb;
        this.conditions = ['New', 'Almost new', 'Slightly worn', 'Worn'];
        this.selectedFile = null;
        this.newListingForm = fb.group({
            book_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            author_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            condition: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            image: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    NewListingComponent.prototype.ngOnInit = function () {
    };
    NewListingComponent.prototype.createListing = function (data) {
        var _this = this;
        var fd = new FormData();
        fd.append('bookImage', this.selectedFile, this.selectedFile.name);
        fd.append('price', data.price);
        fd.append('book_name', data.book_name);
        fd.append('author_name', data.author_name);
        fd.append('condition', data.condition);
        this.http.post('api/listings/add', fd).subscribe(function (res) {
            console.log('res', res);
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err);
        });
    };
    NewListingComponent.prototype.onFileSelected = function (event) {
        this.selectedFile = event.target.files[0];
    };
    NewListingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-listing',
            template: __webpack_require__(/*! ./new-listing.component.html */ "./src/app/new-listing/new-listing.component.html"),
            styles: [__webpack_require__(/*! ./new-listing.component.css */ "./src/app/new-listing/new-listing.component.css")]
        }),
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], NewListingComponent);
    return NewListingComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*, *:before, *:after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Open Sans', Helvetica, Arial, sans-serif;\n  background: #ededed;\n}\n\n.tip {\n  font-size: 20px;\n  margin: 40px auto 50px;\n  text-align: center;\n}\n\n.cont {\n  overflow: hidden;\n  position: relative;\n  width: 900px;\n  height: 700px;\n  margin: 0 auto 100px;\n  background: #fff;\n}\n\n.sub-cont {\n  overflow: hidden;\n  position: absolute;\n  left: 640px;\n  top: 0;\n  width: 900px;\n  height: 100%;\n  padding-left: 260px;\n  background: #fff;\n  transition: -webkit-transform 1.2s ease-in-out;\n  transition: transform 1.2s ease-in-out;\n  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;\n}\n\n.cont.s--signup .sub-cont {\n  -webkit-transform: translate3d(-640px, 0, 0);\n  transform: translate3d(-640px, 0, 0);\n}\n\nbutton {\n  display: block;\n  margin: 0 auto;\n  width: 260px;\n  height: 36px;\n  border-radius: 30px;\n  color: #fff;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.img {\n  overflow: hidden;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 260px;\n  height: 100%;\n  padding-top: 360px;\n}\n\n.img:before {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 900px;\n  height: 100%;\n  background-image: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg\");\n  background-size: cover;\n  transition: -webkit-transform 1.2s ease-in-out;\n  transition: transform 1.2s ease-in-out;\n  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;\n}\n\n.img:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.cont.s--signup .img:before {\n  -webkit-transform: translate3d(640px, 0, 0);\n  transform: translate3d(640px, 0, 0);\n}\n\n.img__text {\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 50px;\n  width: 100%;\n  padding: 0 20px;\n  text-align: center;\n  color: #fff;\n  transition: -webkit-transform 1.2s ease-in-out;\n  transition: transform 1.2s ease-in-out;\n  transition: transform 1.2s ease-in-out, -webkit-transform 1.2s ease-in-out;\n}\n\n.img__text h2 {\n  margin-bottom: 10px;\n  font-weight: normal;\n}\n\n.img__text p {\n  font-size: 14px;\n  line-height: 1.5;\n}\n\n.cont.s--signup .img__text.m--up {\n  -webkit-transform: translateX(520px);\n  transform: translateX(520px);\n}\n\n.img__text.m--in {\n  -webkit-transform: translateX(-520px);\n  transform: translateX(-520px);\n}\n\n.cont.s--signup .img__text.m--in {\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n.img__btn {\n  overflow: hidden;\n  z-index: 2;\n  position: relative;\n  width: 100px;\n  height: 36px;\n  margin: 0 auto;\n  background: transparent;\n  color: #fff;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n}\n\n.img__btn:after {\n  content: '';\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 2px solid #fff;\n  border-radius: 30px;\n}\n\n.img__btn span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  transition: -webkit-transform 1.2s;\n  transition: transform 1.2s;\n  transition: transform 1.2s, -webkit-transform 1.2s;\n}\n\n.img__btn span.m--in {\n  -webkit-transform: translateY(-72px);\n  transform: translateY(-72px);\n}\n\n.cont.s--signup .img__btn span.m--in {\n  -webkit-transform: translateY(0);\n  transform: translateY(0);\n}\n\n.cont.s--signup .img__btn span.m--up {\n  -webkit-transform: translateY(72px);\n  transform: translateY(72px);\n}\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" card cont\">\n  <div class=\"form sign-in\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col\"></div>\n\n      <div class=\"col-6\" style=\"margin-top: 4%;\">\n        <div class=\"divider-new\" style=\"margin-bottom: 10%;\">\n          <h3 class=\"h3-responsive font-weight-bold blue-text mx-3\">SIGN UP</h3>\n        </div>\n        <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm(signupForm.value)\">\n          <div class=\"md-form\">\n            <i class=\"fa fa-user prefix\"></i>\n            <input type=\"text\" id=\"materialFormCardNameEx\" data-error=\"Please enter valid name!\" formControlName=\"name\" class=\"form-control\" mdbInputDirective>\n            <label for=\"materialFormCardNameEx\" class=\"font-weight-light\">Your Name</label>\n          </div>\n\n          <br>\n\n          <div class=\"md-form\">\n            <i class=\"fa fa-envelope prefix\"></i>\n            <input type=\"email\" id=\"materialFormCardEmailEx\" data-error=\"Please enter valid email ID!\" formControlName=\"email\" class=\"form-control\" mdbInputDirective>\n            <label for=\"materialFormCardEmailEx\" class=\"font-weight-light\">Your email</label>\n          </div>\n\n          <br>\n\n          <div class=\"md-form\">\n            <i class=\"fa fa-phone prefix\"></i>\n            <input type=\"text\" id=\"materialFormCardContactEx\" data-error=\"Please enter valid contact number!\" formControlName=\"contact\" class=\"form-control\"\n                   mdbInputDirective>\n            <label for=\"materialFormCardContactEx\" class=\"font-weight-light\">Your contact number</label>\n          </div>\n\n          <br>\n\n          <div class=\"md-form\">\n            <i class=\"fa fa-graduation-cap prefix\"></i>\n            <input type=\"text\" id=\"materialFormCardCollegeEx\" formControlName=\"college\" class=\"form-control\"\n                   mdbInputDirective>\n            <label for=\"materialFormCardCollegeEx\" class=\"font-weight-light\">Your college</label>\n          </div>\n          <br>\n          <div class=\"md-form\">\n            <i class=\"fa fa-map-marker prefix\"></i>\n            <input type=\"text\" id=\"materialFormCardAddressEx\" formControlName=\"address\" class=\"form-control\"\n                   mdbInputDirective>\n            <label for=\"materialFormCardAddressEx\" class=\"font-weight-light\">Your address</label>\n          </div>\n          <br>\n          <div class=\"md-form\">\n            <i class=\"fa fa-lock prefix\"></i>\n            <input type=\"password\" id=\"materialFormCardPasswordEx\" data-error=\"Password is required!\" formControlName=\"password\" class=\"form-control\"\n                   mdbInputDirective>\n            <label for=\"materialFormCardPasswordEx\" class=\"font-weight-light\">Your password</label>\n          </div>\n\n          <!--<div class=\"md-form\">-->\n            <!--<i class=\"fa fa-exclamation-triangle prefix grey-text\"></i>-->\n            <!--<input type=\"password\" id=\"materialFormCardConfirmEx\" formControlName=\"confirmPassword\" class=\"form-control\" mdbInputDirective>-->\n            <!--<label for=\"materialFormCardConfirmEx\" class=\"font-weight-light\">Confirm your password</label>-->\n          <!--</div>-->\n\n          <div class=\"text-center py-4 mt-3\">\n            <button class=\"btn btn-cyan waves-light\" [disabled]=\"signupForm.invalid\" type=\"submit\" mdbWavesEffect>Sign up</button>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-5\"></div>\n    </div>\n\n  </div>\n  <div class=\"sub-cont\">\n    <div class=\"img\">\n      <div class=\"img__text m--up\">\n        <h2>One of us?</h2>\n        <p>  If you already has an account, just sign in. We've missed you!</p>\n      </div>\n      <div class=\"img__btn\">\n        <span routerLink=\"/signin\" style=\"cursor: pointer;\" class=\"m--up\">SIGN IN</span>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, globals, router, fb) {
        this.http = http;
        this.globals = globals;
        this.router = router;
        this.fb = fb;
        this.signupForm = fb.group({
            name: [''],
            contact: [''],
            college: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            address: [''],
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submitForm = function (data) {
        var _this = this;
        this.http.post('/api/users/signup', {
            name: data.name,
            email: data.email,
            password: data.password,
            college: data.college,
            contact: data.contact
        }).subscribe(function (user) {
            _this.globals.current_user = user;
            console.log('After signup: ', user);
            var userObj = { 'id': user.id, 'name': user.name };
            localStorage.setItem('userObject', JSON.stringify(userObj));
            _this.router.navigate(['/dashboard']);
        }, function (err) {
            console.log(err.error);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/wishlist.service.ts":
/*!*************************************!*\
  !*** ./src/app/wishlist.service.ts ***!
  \*************************************/
/*! exports provided: WishlistService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistService", function() { return WishlistService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistService = /** @class */ (function () {
    function WishlistService(http) {
        this.http = http;
    }
    WishlistService.prototype.getWishlist = function () {
        return this.http.get('/api/wishlist');
    };
    WishlistService.prototype.addWishlistItem = function (id) {
        return this.http.post('/api/wishlist/', {
            bookId: id
        });
    };
    WishlistService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistService);
    return WishlistService;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let listing of wishlist;\" class=\"col-3 card mx-4 p-4\" style=\"box-shadow:2px; margin-bottom:30px;\">-->\n  <!--<h4 class=\"product-name\"><b>{{listing.book_name}}</b></h4>-->\n  <!--<div class=\"product-manufacturer\">{{listing.author_name}}</div>-->\n  <!--<div class=\"row\">-->\n    <!--<div class=\"col m-3 p-2\">-->\n      <!--<b>&#8377; {{listing.price}}</b>-->\n    <!--</div>-->\n  <!--</div>-->\n  <!--<div class=\"row\">-->\n    <!--&lt;!&ndash;<button class=\"col btn btn-primary m-3\" (click)=\"showListing(listing.id)\">Show</button>&ndash;&gt;-->\n    <!--&lt;!&ndash;<button class=\"col btn btn-primary m-3\" (click)=\"addWishlist({{listing.id}})\">Add to Wishlist</button>&ndash;&gt;-->\n  <!--</div>-->\n<!--</div>-->\n\n<div class=\"container\">\n  <div class=\"card card-ecommerce\">\n  <!--Shopping Cart table-->\n  <div class=\"table-responsive\">\n    <table class=\"table product-table\">\n      <!--Table head-->\n      <thead class=\"mdb-color lighten-5\">\n      <tr>\n        <th></th>\n        <th class=\"font-weight-bold\">Product</th>\n        <th class=\"font-weight-bold\">Seller</th>\n        <th class=\"font-weight-bold\">Condition</th>\n        <th class=\"font-weight-bold\">Price</th>\n        <th></th>\n      </tr>\n      </thead>\n      <!--/Table head-->\n\n      <!--Table body-->\n      <tbody>\n\n      <!--First row-->\n      <tr *ngFor=\"let listing of wishlist;\">\n        <th scope=\"row\">\n          <img style=\"width: 180px; height:150px; \" src=\"https://bookish-v1.herokuapp.com/{{listing.book_image_url}}\" alt=\"\" class=\"img-fluid\">\n        </th>\n        <td>\n          <h5><strong>{{listing.book_name}}</strong></h5>\n          <p class=\"text-muted\">by {{listing.author_name}}</p>\n        </td>\n        <td>{{listing.user_name}}</td>\n        <td>{{listing.condition}}</td>\n        <td>{{listing.price}}</td>\n        <td>\n          <button type=\"button\" class=\"btn btn-tb btn-primary waves-effect waves-light\" (click) = \"deleteWishlistItem(listing.id)\"  data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Remove item\">X\n          </button>\n        </td>\n      </tr>\n      <!--/First row-->\n\n      </tbody>\n      <!--/Table body-->\n    </table>\n  </div>\n  <!--/Shopping Cart table-->\n  </div>\n</div>\n\n\n<!--<div class=\"card card-ecommerce\">-->\n  <!--<div class=\"card-body\">-->\n\n    <!--&lt;!&ndash; Shopping Cart table &ndash;&gt;-->\n    <!--<div class=\"table-responsive\">-->\n\n      <!--<table class=\"table product-table\">-->\n\n        <!--&lt;!&ndash; Table head &ndash;&gt;-->\n        <!--<thead class=\"mdb-color lighten-5\">-->\n        <!--<tr>-->\n          <!--<th></th>-->\n          <!--<th class=\"font-weight-bold\">-->\n            <!--<strong>Product</strong>-->\n          <!--</th>-->\n          <!--<th class=\"font-weight-bold\">-->\n            <!--<strong>Color</strong>-->\n          <!--</th>-->\n          <!--<th></th>-->\n          <!--<th class=\"font-weight-bold\">-->\n            <!--<strong>Price</strong>-->\n          <!--</th>-->\n          <!--<th class=\"font-weight-bold\">-->\n            <!--<strong>QTY</strong>-->\n          <!--</th>-->\n          <!--<th class=\"font-weight-bold\">-->\n            <!--<strong>Amount</strong>-->\n          <!--</th>-->\n          <!--<th></th>-->\n        <!--</tr>-->\n        <!--</thead>-->\n        <!--&lt;!&ndash; /.Table head &ndash;&gt;-->\n\n        <!--&lt;!&ndash; Table body &ndash;&gt;-->\n        <!--<tbody>-->\n\n        <!--&lt;!&ndash; First row &ndash;&gt;-->\n        <!--<tr>-->\n          <!--<th scope=\"row\">-->\n            <!--<img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg\" alt=\"\" class=\"img-fluid z-depth-0\">-->\n          <!--</th>-->\n          <!--<td>-->\n            <!--<h5 class=\"mt-3\">-->\n              <!--<strong>iPhone</strong>-->\n            <!--</h5>-->\n            <!--<p class=\"text-muted\">Apple</p>-->\n          <!--</td>-->\n          <!--<td>White</td>-->\n          <!--<td></td>-->\n          <!--<td>$800</td>-->\n          <!--<td class=\"text-center text-md-left\">-->\n            <!--<span class=\"qty\">1 </span>-->\n            <!--<div class=\"btn-group radio-group ml-2\" data-toggle=\"buttons\">-->\n              <!--<label class=\"btn btn-sm btn-primary btn-rounded waves-effect waves-light\">-->\n                <!--<input type=\"radio\" name=\"options\" id=\"option1\">—-->\n              <!--</label>-->\n              <!--<label class=\"btn btn-sm btn-primary btn-rounded waves-effect waves-light\">-->\n                <!--<input type=\"radio\" name=\"options\" id=\"option2\">+-->\n              <!--</label>-->\n            <!--</div>-->\n          <!--</td>-->\n          <!--<td class=\"font-weight-bold\">-->\n            <!--<strong>$800</strong>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Remove item\">X-->\n            <!--</button>-->\n          <!--</td>-->\n        <!--</tr>-->\n        <!--&lt;!&ndash; /.First row &ndash;&gt;-->\n\n        <!--&lt;!&ndash; Second row &ndash;&gt;-->\n        <!--<tr>-->\n          <!--<th scope=\"row\">-->\n            <!--<img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg\" alt=\"\" class=\"img-fluid z-depth-0\">-->\n          <!--</th>-->\n          <!--<td>-->\n            <!--<h5 class=\"mt-3\">-->\n              <!--<strong>Headphones</strong>-->\n            <!--</h5>-->\n            <!--<p class=\"text-muted\">Sony</p>-->\n          <!--</td>-->\n          <!--<td>Red</td>-->\n          <!--<td></td>-->\n          <!--<td>$200</td>-->\n          <!--<td class=\"text-center text-md-left\">-->\n            <!--<span class=\"qty\">3 </span>-->\n            <!--<div class=\"btn-group radio-group ml-2\" data-toggle=\"buttons\">-->\n              <!--<label class=\"btn btn-sm btn-primary btn-rounded waves-effect waves-light\">-->\n                <!--<input type=\"radio\" name=\"options\" id=\"option1\">—-->\n              <!--</label>-->\n              <!--<label class=\"btn btn-sm btn-primary btn-rounded waves-effect waves-light\">-->\n                <!--<input type=\"radio\" name=\"options\" id=\"option2\">+-->\n              <!--</label>-->\n            <!--</div>-->\n          <!--</td>-->\n          <!--<td class=\"font-weight-bold\">-->\n            <!--<strong>$600</strong>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Remove item\">X-->\n            <!--</button>-->\n          <!--</td>-->\n        <!--</tr>-->\n        <!--&lt;!&ndash; /.Second row &ndash;&gt;-->\n\n        <!--&lt;!&ndash; Third row &ndash;&gt;-->\n        <!--<tr>-->\n          <!--<th scope=\"row\">-->\n            <!--<img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg\" alt=\"\" class=\"img-fluid z-depth-0\">-->\n          <!--</th>-->\n          <!--<td>-->\n            <!--<h5 class=\"mt-3\">-->\n              <!--<strong>iPad Pro</strong>-->\n            <!--</h5>-->\n            <!--<p class=\"text-muted\">Apple</p>-->\n          <!--</td>-->\n          <!--<td>Gold</td>-->\n          <!--<td></td>-->\n          <!--<td>$600</td>-->\n          <!--<td class=\"text-center text-md-left\">-->\n            <!--<span class=\"qty\">2 </span>-->\n            <!--<div class=\"btn-group radio-group ml-2\" data-toggle=\"buttons\">-->\n              <!--<label class=\"btn btn-sm btn-primary btn-rounded waves-effect waves-light\">-->\n                <!--<input type=\"radio\" name=\"options\" id=\"option1\">—-->\n              <!--</label>-->\n              <!--<label class=\"btn btn-sm btn-primary btn-rounded waves-effect waves-light\">-->\n                <!--<input type=\"radio\" name=\"options\" id=\"option2\">+-->\n              <!--</label>-->\n            <!--</div>-->\n          <!--</td>-->\n          <!--<td class=\"font-weight-bold\">-->\n            <!--<strong>$1200</strong>-->\n          <!--</td>-->\n          <!--<td>-->\n            <!--<button type=\"button\" class=\"btn btn-sm btn-primary waves-effect waves-light\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\" data-original-title=\"Remove item\">X-->\n            <!--</button>-->\n          <!--</td>-->\n        <!--</tr>-->\n        <!--&lt;!&ndash; /.Third row &ndash;&gt;-->\n\n        <!--&lt;!&ndash; Fourth row &ndash;&gt;-->\n        <!--<tr>-->\n          <!--<td colspan=\"3\"></td>-->\n          <!--<td>-->\n            <!--<h4 class=\"mt-2\">-->\n              <!--<strong>Total</strong>-->\n            <!--</h4>-->\n          <!--</td>-->\n          <!--<td class=\"text-right\">-->\n            <!--<h4 class=\"mt-2\">-->\n              <!--<strong>$2600</strong>-->\n            <!--</h4>-->\n          <!--</td>-->\n          <!--<td colspan=\"3\" class=\"text-right\">-->\n            <!--<button type=\"button\" class=\"btn btn-primary btn-rounded waves-effect waves-light\">Complete purchase-->\n              <!--<i class=\"fa fa-angle-right right\"></i>-->\n            <!--</button>-->\n          <!--</td>-->\n        <!--</tr>-->\n        <!--&lt;!&ndash; Fourth row &ndash;&gt;-->\n\n        <!--</tbody>-->\n        <!--&lt;!&ndash; /.Table body &ndash;&gt;-->\n\n      <!--</table>-->\n\n    <!--</div>-->\n    <!--&lt;!&ndash; /.Shopping Cart table &ndash;&gt;-->\n\n  <!--</div>-->\n\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../listing.service */ "./src/app/listing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(wishlistService, listingService) {
        this.wishlistService = wishlistService;
        this.listingService = listingService;
        this.wishlist = [];
    }
    WishlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.wishlistService.getWishlist().subscribe(function (listings) {
            console.log(listings);
            _this.wishlist = listings;
        }, function (err) {
            console.log(err);
        });
    };
    WishlistComponent.prototype.deleteWishlistItem = function (id) {
        this.listingService.deleteWishlistItem(id).subscribe(function (item) {
            console.log(item);
        }, function (err) {
            console.log(err);
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"], _listing_service__WEBPACK_IMPORTED_MODULE_2__["ListingService"]])
    ], WishlistComponent);
    return WishlistComponent;
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
    production: false
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sachdevarockz/Desktop/nagarro_bootcamp/final_project/bookish-front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map