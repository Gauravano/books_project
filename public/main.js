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
    { path: 'messages/:id', component: _message_message_component__WEBPACK_IMPORTED_MODULE_8__["MessageComponent"] }
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"btn btn-success my-2 my-sm-0\" (click)=\"newListing()\">Add new Listing</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"btn btn-success my-2 my-sm-0\" (click)=\"logIn()\">LogIn</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"btn btn-success my-2 my-sm-0\" (click)=\"signUp()\">SignUp</button>\n      </li>\n      <li class=\"nav-item\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"logOut()\">Logout</button>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n"

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
    function AppComponent(http, globals, router, auth) {
        this.http = http;
        this.globals = globals;
        this.router = router;
        this.auth = auth;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.logOut = function () {
        this.http.post('/api/users/logout', {}).subscribe(function (message) {
            console.log('After logout: ', message);
            // this.router.navigate(['/dashboard']);
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _listing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listing.service */ "./src/app/listing.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _new_listing_new_listing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./new-listing/new-listing.component */ "./src/app/new-listing/new-listing.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_11__["WishlistComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_12__["ListingComponent"],
                _new_listing_new_listing_component__WEBPACK_IMPORTED_MODULE_13__["NewListingComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_14__["MessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [_listing_service__WEBPACK_IMPORTED_MODULE_5__["ListingService"], _globals__WEBPACK_IMPORTED_MODULE_10__["Globals"], _message_service__WEBPACK_IMPORTED_MODULE_15__["MessageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let listing of listings;\" class=\"col-3 card mx-4 p-4\" style=\"box-shadow:2px; margin-bottom:30px;\">\n  <img src=\"http://localhost:4000/{{listing.book_image_url}}\" width=\"300px\" height=\"100px\">\n  <h4 class=\"product-name\"><b>{{listing.book_name}}</b></h4>\n  <div class=\"product-manufacturer\">{{listing.author_name}}</div>\n  <div class=\"row\">\n    <div class=\"col m-3 p-2\">100px\n      <b>&#8377; {{listing.price}}</b>\n    </div>\n  </div>\n  <div class=\"row\">\n    <button class=\"col btn btn-primary m-3\" (click)=\"showListing(listing.id)\">Show</button>\n    <button class=\"col btn btn-primary m-3\" (click)=\"addWishlist(listing.id)\">Add to Wishlist</button>\n  </div>\n</div>\n"

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
    function DashboardComponent(listingService, router, wishlistService) {
        this.listingService = listingService;
        this.router = router;
        this.wishlistService = wishlistService;
        this.listings = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listingService.getListings().subscribe(function (listings) {
            console.log(listings);
            _this.listings = listings;
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
            _wishlist_service__WEBPACK_IMPORTED_MODULE_3__["WishlistService"]])
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
    function ListingService(http) {
        this.http = http;
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
    ListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
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

module.exports = "<div class=\"container\"> <div class=\"col-3 card mx-4 p-4\" style=\"box-shadow:2px; margin-bottom:30px;\">\n  <img src='http://localhost:4000/{{listing.book_image_url}}' width=\"300px\" height=\"100px\">\n  <h4 class=\"product-name\"><b>{{listing.book_name}}</b></h4>\n  <div class=\"product-manufacturer\">{{listing.author_name}}</div>\n  <div class=\"row\">\n    <div class=\"col m-3 p-2\">100px\n      <b>&#8377; {{listing.price}}</b>\n    </div>\n  </div>\n  <div class=\"row\">\n    <button class=\"col btn btn-primary m-3\" (click)=\"addWishlist(listing.id)\">Add to Wishlist</button>\n  </div>\n</div>\n\n<div><h4 id=\"trial\" style=\"text-align: center;\">Contact the Seller</h4></div>\n<hr id=\"point\" style=\"margin-bottom: 40px;\">\n<div class=\"container\">\n<form #contactSellerForm=\"ngForm\" id=\"contactForm\" (ngSubmit)=\"sendMessage(contactSellerForm.value)\">\n  <div class=\"form-group\">\n    <input name=\"message\" type=\"text\" class=\"form-control\" id=\"message\" required ngModel>\n  </div>\n\n  <button type=\"submit\" class=\"btn btn-success\">Send</button>\n\n</form>\n</div>\n</div>\n<button class=\"btn btn-success\" (click)=\"getMessages()\">Message</button>\n"

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
    }
    ListingComponent.prototype.ngOnInit = function () {
        this.getListing();
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
        console.log('Fetching messages!', this.id);
        this.messageService.fetchMessages(this.id).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    ListingComponent.prototype.sendMessage = function (data) {
        this.messageService.sendMessage(data.message, this.listing.id).subscribe(function (message) {
            console.log(message);
            jquery__WEBPACK_IMPORTED_MODULE_7__('#contactForm').prepend("<div style='background-color: dodgerblue; padding: 4px;'>" + data.message + "</div>");
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

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Login Form</h1>\n  <form #loginForm=\"ngForm\" (ngSubmit)=\"submitForm(loginForm.value)\">\n\n    <div class=\"form-group\">\n      <label for=\"email\">Email</label>\n      <input name=\"email\" type=\"text\" class=\"form-control\" id=\"email\" required ngModel>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input name=\"password\" type=\"text\" class=\"form-control\" id=\"password\" required ngModel>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n</div>\n"

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
    function LoginComponent(http, globals, router) {
        this.http = http;
        this.globals = globals;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submitForm = function (data) {
        var _this = this;
        this.http.post('/api/users/login', {
            name: data.name,
            email: data.email,
            password: data.password
        }).subscribe(function (user) {
            _this.globals.current_user = user;
            console.log('After login: ', user);
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
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

module.exports = ""

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  message works!\n</p>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wishlist_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wishlist.service */ "./src/app/wishlist.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
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
    function MessageComponent(route, location, listingService, wishlistService, messageService) {
        this.route = route;
        this.location = location;
        this.listingService = listingService;
        this.wishlistService = wishlistService;
        this.messageService = messageService;
        this.id = +this.route.snapshot.paramMap.get('id');
    }
    MessageComponent.prototype.ngOnInit = function () {
        this.getMessages();
    };
    MessageComponent.prototype.getMessages = function () {
        console.log('Fetching messages!', this.id);
        this.messageService.fetchMessages(this.id).subscribe(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"],
            _wishlist_service__WEBPACK_IMPORTED_MODULE_4__["WishlistService"],
            _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"]])
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

module.exports = ""

/***/ }),

/***/ "./src/app/new-listing/new-listing.component.html":
/*!********************************************************!*\
  !*** ./src/app/new-listing/new-listing.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>create new Listing</h1>\n  <form #newListingForm=\"ngForm\" (ngSubmit)=\"createListing(newListingForm.value)\">\n    <div class=\"form-group\">\n      <label for=\"book_name\">Book Name</label>\n      <input name=\"book_name\" type=\"text\" class=\"form-control\" id=\"book_name\" required ngModel>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"author_name\">Author Name</label>\n      <input name=\"author_name\" type=\"text\" class=\"form-control\" id=\"author_name\" required ngModel>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"price\">Price</label>\n      <input name=\"price\" type=\"text\" class=\"form-control\" id=\"price\" required ngModel>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"condition\">Condition</label>\n      <input name=\"condition\" type=\"text\" class=\"form-control\" id=\"condition\" required ngModel>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"image\">Image</label>\n      <input name=\"image\" type=\"file\" (change)=\"onFileSelected($event)\" class=\"form-control\" id=\"image\" required ngModel>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n</div>\n"

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
    function NewListingComponent(listingService, router, http) {
        this.listingService = listingService;
        this.router = router;
        this.http = http;
        this.selectedFile = null;
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
        __metadata("design:paramtypes", [_listing_service__WEBPACK_IMPORTED_MODULE_1__["ListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
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

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Signup Form</h1>\n  <form #signupForm=\"ngForm\" (ngSubmit)=\"submitForm(signupForm.value)\">\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" required ngModel>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Email</label>\n      <input name=\"email\" type=\"text\" class=\"form-control\" id=\"email\" required ngModel>\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Password</label>\n      <input name=\"password\" type=\"text\" class=\"form-control\" id=\"password\" required ngModel>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n</div>\n"

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
    function SignupComponent(http, globals, router) {
        this.http = http;
        this.globals = globals;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.submitForm = function (data) {
        var _this = this;
        this.http.post('/api/users/signup', {
            name: data.name,
            email: data.email,
            password: data.password
        }).subscribe(function (user) {
            _this.globals.current_user = user;
            console.log('After signup: ', user);
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
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<div *ngFor=\"let listing of wishlist;\" class=\"col-3 card mx-4 p-4\" style=\"box-shadow:2px; margin-bottom:30px;\">\n  <h4 class=\"product-name\"><b>{{listing.book_name}}</b></h4>\n  <div class=\"product-manufacturer\">{{listing.author_name}}</div>\n  <div class=\"row\">\n    <div class=\"col m-3 p-2\">\n      <b>&#8377; {{listing.price}}</b>\n    </div>\n  </div>\n  <div class=\"row\">\n    <!--<button class=\"col btn btn-primary m-3\" (click)=\"showListing(listing.id)\">Show</button>-->\n    <!--<button class=\"col btn btn-primary m-3\" (click)=\"addWishlist({{listing.id}})\">Add to Wishlist</button>-->\n  </div>\n</div>\n"

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
    function WishlistComponent(wishlistService) {
        this.wishlistService = wishlistService;
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
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_wishlist_service__WEBPACK_IMPORTED_MODULE_1__["WishlistService"]])
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