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

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingModule", function() { return routingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var src_app_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/student-form/student-form.component */ "./src/app/student-form/student-form.component.ts");
/* harmony import */ var src_app_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'admin-form', component: src_app_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"] },
    { path: 'students', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_1__["StudentListComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: src_app_student_form_student_form_component__WEBPACK_IMPORTED_MODULE_3__["StudentFormComponent"] },
];
var routingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


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

module.exports = "<router-outlet></router-outlet>\n"

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
        this.title = 'client';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./student-form/student-form.component */ "./src/app/student-form/student-form.component.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
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
                _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _student_form_student_form_component__WEBPACK_IMPORTED_MODULE_12__["StudentFormComponent"],
                _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_13__["UserFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([]),
                _app_app_routing__WEBPACK_IMPORTED_MODULE_10__["routingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_3__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n\t\twidth: 340px;\n    \tmargin: 50px auto;\n\t}\n    .login-form form {\n    \tmargin-bottom: 15px;\n        background: #f7f7f7;\n        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n        padding: 30px;\n    }\n    .login-form h2 {\n        margin: 0 0 15px;\n    }\n    .form-control, .btn {\n        min-height: 38px;\n        border-radius: 2px;\n    }\n    .btn {\n        font-size: 15px;\n        font-weight: bold;\n    }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h3 style=\"text-align: center; font-family: 'Times New Roman', Times, serif\">Student Tracking App</h3>\n</div>\n<body>\n<div class=\"login-form\">\n    <form action=\"/examples/actions/confirmation.php\" method=\"post\">\n        <h2 class=\"text-center\">Log in</h2>\n        <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"email\" required=\"required\" [(ngModel)]=\"model.email\" name=\"email\" #name=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\" [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\">\n        </div>\n        <div class=\"form-group\">\n            <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"onSubmit()\">Log in</button>\n        </div>\n        <div class=\"clearfix\">\n            <label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n        </div>\n    </form>\n    <button type=\"button\" href=\"\" (click)=\"createAccount()\" class=\"text-center\"><a >Create an Account</a></button>\n\n</div>\n</body>\n"

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
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
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
    function LoginComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.model = new _models_User__WEBPACK_IMPORTED_MODULE_1__["User"]("", "", "");
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.studentService.loginUser(this.model.email, this.model.password).subscribe(function (data) {
            console.log(data);
            localStorage.setItem('token', data.token);
            console.log('Login Successfull');
            _this.submitted = true;
            _this.router.navigate(['/students']);
        });
    };
    LoginComponent.prototype.createAccount = function () {
        this.router.navigate(['/admin-form']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/Student.ts":
/*!***********************************!*\
  !*** ./src/app/models/Student.ts ***!
  \***********************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student(_id, rollNumber, name, standard, age) {
        this._id = _id;
        this.rollNumber = rollNumber;
        this.name = name;
        this.standard = standard;
        this.age = age;
        this._id = _id;
        this.name = name;
        this.standard = standard;
        this.age = age;
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/models/User.ts":
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/student-form/student-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-form/student-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student-form/student-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-form/student-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<h2 style=\"text-align: center\">Register Student</h2>\n<br>\n<br>\n\n<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"rollnumber\"><strong>Roll Number</strong>  </label>\n            <input type=\"number\" class=\"form-control\" id=roll required [(ngModel)]=\"model.rollNumber\" #name=\"ngModel\" name=\"rollNumber\" placeholder=\"Enter Roll Number\">\n          </div>\n\n        <div class=\"form-group\">\n          <label for=\"phone\"> <strong>Name</strong>  </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.name\" name=\"name\" id=\"name\" placeholder=\"Enter Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"standard\"><strong>Standard</strong>  </label>\n            <input type=\"text\" class=\"form-control\" id=address [(ngModel)]=\"model.standard\" name=\"standard\" placeholder=\"Enter Standard\">\n          </div>\n        <div class=\"form-group\">\n          <label for=\"age\"><strong>Age</strong>  </label>\n          <input type=\"number\" class=\"form-control\" id=age required [(ngModel)]=\"model.age\" #name=\"ngModel\" name=\"age\" placeholder=\"Enter Age\">\n        </div>\n\n\n\n        <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-success\">Submit</button>\n      </form>\n\n        <br>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n          <strong>{{errorMessage}}</strong>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/student-form/student-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-form/student-form.component.ts ***!
  \********************************************************/
/*! exports provided: StudentFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentFormComponent", function() { return StudentFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _models_Student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Student */ "./src/app/models/Student.ts");
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




var StudentFormComponent = /** @class */ (function () {
    function StudentFormComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.model = new _models_Student__WEBPACK_IMPORTED_MODULE_2__["Student"]("", parseInt(""), "", '', parseInt(""));
    }
    StudentFormComponent.prototype.ngOnInit = function () {
    };
    StudentFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.studentService.addStudent(this.model.rollNumber, this.model.name, this.model.standard, this.model.age).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/students']);
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.errorMessage;
        });
    };
    StudentFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-form',
            template: __webpack_require__(/*! ./student-form.component.html */ "./src/app/student-form/student-form.component.html"),
            styles: [__webpack_require__(/*! ./student-form.component.css */ "./src/app/student-form/student-form.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StudentFormComponent);
    return StudentFormComponent;
}());



/***/ }),

/***/ "./src/app/student-list/student-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-list/student-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student-list/student-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-list/student-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h3 style=\"text-align: center; font-family: 'Times New Roman', Times, serif\">Student Tracking App</h3>\n</div>\n\n<div class=\"container\">\n    <thead style=\"align-items: center\" class=\"container\">\n        <tr>\n          <th><strong class=\"add\">Add new Student</strong></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>\n            <button (click)=\"btnClick()\" type=\"button\" class=\"btn btn-primary\">Add Student</button>\n          </td>\n        </tr>\n      </tbody>\n      <br>\n    <table class=\"table table-hover\">\n        <thead class=\"thead-dark\">\n          <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">Roll Number</th>\n            <th scope=\"col\">Standard</th>\n            <th scope=\"col\">Age</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let student of students$ | async; let i = index\">\n              <th scope=\"row\">{{i+1}}</th>\n              <td>{{student.name}}</td>\n              <td>{{student.rollNumber}}</td>\n              <td>{{student.standard}}</td>\n              <td>{{student.age}}</td>\n              <td><button class=\"btn btn-danger\" (click)=\"removeStudent(student.rollNumber)\">Delete</button></td>\n\n            </tr>\n        </tbody>\n      </table>\n\n</div>\n<br>"

/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
    }
    StudentListComponent.prototype.ngOnInit = function () {
        this.students$ = this.studentService.getStudents();
    };
    StudentListComponent.prototype.btnClick = function () {
        this.router.navigate(['/register']);
    };
    StudentListComponent.prototype.removeStudent = function (rollNumber) {
        var _this = this;
        console.log(rollNumber);
        this.studentService.deleteStudent(rollNumber).subscribe(function (data) {
            console.log(data);
            _this.students$ = _this.studentService.getStudents();
        }, function (error) { return console.log(error); });
    };
    StudentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/student-list/student-list.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/student.service.ts":
/*!************************************!*\
  !*** ./src/app/student.service.ts ***!
  \************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
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


var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.baseUrl = "api/";
    }
    // Login User
    StudentService.prototype.loginUser = function (email, password) {
        return this.http.post(this.baseUrl + "users/login", { email: email, password: password });
    };
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.baseUrl + 'students');
    };
    // register Student
    StudentService.prototype.addStudent = function (rollNumber, name, standard, age) {
        return this.http.post(this.baseUrl + "students", { rollNumber: rollNumber, name: name, standard: standard, age: age });
    };
    // delete Student
    StudentService.prototype.deleteStudent = function (rollNumber) {
        return this.http.delete(this.baseUrl + "students/" + rollNumber);
    };
    // admin register
    StudentService.prototype.addAdmin = function (name, email, password) {
        return this.http.post(this.baseUrl + "users/" + "register", { name: name, email: email, password: password });
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "" + this.auth.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-form/user-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-form/user-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<h2 style=\"text-align: center\">Admin Registration</h2>\n<br>\n<br>\n\n<div class=\"container\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"emailr\"><strong>Email</strong>  </label>\n            <input type=\"email\" class=\"form-control\" id=email required [(ngModel)]=\"model.email\" #name=\"ngModel\" name=\"email\" placeholder=\"Enter Email\">\n          </div>\n\n        <div class=\"form-group\">\n          <label for=\"name\"> <strong>Name</strong>  </label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.name\" name=\"name\" id=\"name\" placeholder=\"Enter Name\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\"><strong>Password</strong>  </label>\n            <input type=\"password\" class=\"form-control\" id=address [(ngModel)]=\"model.password\" name=\"password\" placeholder=\"Enter password\">\n          </div>\n        <button type=\"button\" (click)=\"onSubmit()\" class=\"btn btn-success\">Submit</button>\n      </form>\n\n        <br>\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\n          <strong>{{errorMessage}}</strong>\n      </div>\n\n</div>"

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../student.service */ "./src/app/student.service.ts");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/User */ "./src/app/models/User.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(studentService, router) {
        this.studentService = studentService;
        this.router = router;
        this.model = new _models_User__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "");
    }
    UserFormComponent.prototype.ngOnInit = function () {
    };
    UserFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.studentService.addAdmin(this.model.name, this.model.email, this.model.password).subscribe(function (data) {
            console.log(data);
            _this.router.navigate(['/login']);
            console.log("Admin Added");
        }, function (error) {
            console.log(error);
            _this.errorMessage = error.error.errorMessage;
        });
    };
    UserFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! ./user-form.component.html */ "./src/app/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")]
        }),
        __metadata("design:paramtypes", [_student_service__WEBPACK_IMPORTED_MODULE_2__["StudentService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserFormComponent);
    return UserFormComponent;
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

module.exports = __webpack_require__(/*! /home/vishal/Documents/student-track-app/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map