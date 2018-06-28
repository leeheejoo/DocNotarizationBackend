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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/ipfs-service.service */ "./src/app/service/ipfs-service.service.ts");
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
    function AppComponent(ipfsService) {
        this.ipfsService = ipfsService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_1__["IpfsService"]])
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
/* harmony import */ var _service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/ipfs-service.service */ "./src/app/service/ipfs-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_main_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/registration/registration.component */ "./src/app/components/main/registration/registration.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _components_main_documents_documents_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/documents/documents.component */ "./src/app/components/main/documents/documents.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/alert-dialog/alert-dialog.component */ "./src/app/components/alert-dialog/alert-dialog.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _components_pdf_dialog_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/pdf-dialog/pdf-dialog.component */ "./src/app/components/pdf-dialog/pdf-dialog.component.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    { path: '', redirectTo: 'registration', pathMatch: 'full' },
    { path: 'registration', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"] },
    //	{ path: '...', component: DocumentsComponent },
    { path: '**', redirectTo: 'registration', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_main_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _components_main_documents_documents_component__WEBPACK_IMPORTED_MODULE_10__["DocumentsComponent"],
                _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AlertDialogComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_13__["MainComponent"],
                _components_pdf_dialog_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_14__["PdfDialogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_15__["PdfViewerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: true }),
            ],
            providers: [_service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_3__["IpfsService"]],
            entryComponents: [
                _components_alert_dialog_alert_dialog_component__WEBPACK_IMPORTED_MODULE_12__["AlertDialogComponent"],
                _components_pdf_dialog_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_14__["PdfDialogComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/alert-dialog/alert-dialog.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/alert-dialog/alert-dialog.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/alert-dialog/alert-dialog.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/alert-dialog/alert-dialog.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{title}}</h2>\n<mat-dialog-content>\n  <p>{{message}}</p>\n</mat-dialog-content>\n<mat-dialog-actions align=\"end\">\n  <button mat-button matDialogClose=\"ok\" color=\"primary\">Ok</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/components/alert-dialog/alert-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/alert-dialog/alert-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: AlertDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogComponent", function() { return AlertDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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


var AlertDialogComponent = /** @class */ (function () {
    function AlertDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = data.title;
        this.message = data.message;
    }
    AlertDialogComponent.prototype.ngOnInit = function () {
    };
    AlertDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert-dialog',
            template: __webpack_require__(/*! ./alert-dialog.component.html */ "./src/app/components/alert-dialog/alert-dialog.component.html"),
            styles: [__webpack_require__(/*! ./alert-dialog.component.css */ "./src/app/components/alert-dialog/alert-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], AlertDialogComponent);
    return AlertDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/main/documents/documents.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/main/documents/documents.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".documents {\n    background: rgb(255, 255, 255);\n    height: 92vh;\n    text-align: center;\n    float: left;\n    width: 50%;\n}\n\n.documents-show-buttton {\n    margin-top: 40vh;\n}"

/***/ }),

/***/ "./src/app/components/main/documents/documents.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/main/documents/documents.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"documents\">\n\t<button mat-raised-button color=\"primary\" class=\"documents-show-buttton\" (click)=\"showDocument()\">Show document</button>   \n</div>\n"

/***/ }),

/***/ "./src/app/components/main/documents/documents.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/main/documents/documents.component.ts ***!
  \******************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/ipfs-service.service */ "./src/app/service/ipfs-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentsComponent = /** @class */ (function () {
    function DocumentsComponent(ipfsService, dialog) {
        this.ipfsService = ipfsService;
        this.dialog = dialog;
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent.prototype.showDocument = function () {
        this.ipfsService.getDocument('QmVTaCbtLaasDniwD2Tr8mPmstzPwnDnkTEw1mkpfeJ3Dz');
    };
    DocumentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__(/*! ./documents.component.html */ "./src/app/components/main/documents/documents.component.html"),
            styles: [__webpack_require__(/*! ./documents.component.css */ "./src/app/components/main/documents/documents.component.css")]
        }),
        __metadata("design:paramtypes", [_service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_2__["IpfsService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n    background: white;\n    height: 84vh;\n    text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <app-registration></app-registration>\n    <app-documents></app-documents>\n</div>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
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

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/components/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/main/registration/registration.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/main/registration/registration.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registration {\n    background: rgb(255, 255, 255);\n    height: 92vh;\n    text-align: center;\n    float: left;\n    width: 50%;\n\n}\n\n.registration-user-name-input {\n    margin-top: 30vh;\n    width: 334px;\n}\n\n.registration-file-wrapper {\n    margin-top: 5vh;\n    margin-bottom: 10vh;\n}\n\n.registration-file-input {\n    margin-right: 10px;\n    width: 300px;\n}\n\n.registration-file-open-buttton {\n    color:#3F51B5;\n    font-size: 33px;\n    vertical-align: bottom;\n    padding-bottom: 25px;\n\n}\n\n.registration-register-buttton {\n    margin-top: 5vh;\n}"

/***/ }),

/***/ "./src/app/components/main/registration/registration.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/registration/registration.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registration\">\n\t<mat-form-field class=\"registration-user-name-input\"> \n\t\t<input matInput placeholder=\"Document id\" [value]=\"documentId\"> \n\t</mat-form-field> \n\t<div class=\"registration-file-wrapper\">\n\t\t<mat-form-field class=\"registration-file-input\"> \n\t\t\t<input matInput placeholder=\"File name\" value=\"{{fileName}}\"> \n\t\t</mat-form-field> \n\t\t<input type=\"file\" id=\"upload\" style=\"display:none\" accept=\".pdf\" (change)=\"getFileInfo($event.target.files[0])\">\n\t\t<label for=\"upload\" >\n\t\t\t<mat-icon class=\"registration-file-open-buttton\" >description</mat-icon>\n\t\t</label>\n\t</div>\n\t<button mat-raised-button color=\"primary\" class=\"registration-register-button\" (click)=\"registerFile()\">Register</button> \n</div>\n"

/***/ }),

/***/ "./src/app/components/main/registration/registration.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/main/registration/registration.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/ipfs-service.service */ "./src/app/service/ipfs-service.service.ts");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(base64_arraybuffer__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(ipfsService, dialog) {
        this.ipfsService = ipfsService;
        this.dialog = dialog;
        this.documentId = "";
        this.fileName = "";
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.getFileInfo = function (file) {
        //console.log(file.name);
        this.fileName = file.name;
        this.file = file;
    };
    RegistrationComponent.prototype.registerFile = function () {
        var reader = new FileReader();
        reader.onload = function () {
            var str64 = base64_arraybuffer__WEBPACK_IMPORTED_MODULE_3__["encode"](reader.result);
            //console.log(str64);
        };
        reader.readAsArrayBuffer(this.file);
        /*
                this.dialog.closeAll();
        
                let dialogRef = this.dialog.open(AlertDialog,{
                    minWidth: '300px',
                    data: {
                        title:"Test",
                        message:this.file
                    }
                });
        */
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/main/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/main/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_service_ipfs_service_service__WEBPACK_IMPORTED_MODULE_2__["IpfsService"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.navi {\n    height: 8vh;\n}\n\n.navi-button {\n    margin-right: 3vw;\n}\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class =\"navi\" color=\"primary\">\n  <span class=\"navi-button\" routerLink=\"/registration\">Registration</span> \n  <span class=\"navi-button\" routerLink=\"/...\">...</span> \n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/components/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/pdf-dialog/pdf-dialog.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pdf-dialog/pdf-dialog.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pdf-dialog/pdf-dialog.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/pdf-dialog/pdf-dialog.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-dialog-content>\n\t<pdf-viewer [src]=\"dataBuffer\" [render-text]=\"true\" style=\"display: block;\"></pdf-viewer>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/components/pdf-dialog/pdf-dialog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pdf-dialog/pdf-dialog.component.ts ***!
  \***************************************************************/
/*! exports provided: PdfDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDialogComponent", function() { return PdfDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! base64-arraybuffer */ "./node_modules/base64-arraybuffer/lib/base64-arraybuffer.js");
/* harmony import */ var base64_arraybuffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(base64_arraybuffer__WEBPACK_IMPORTED_MODULE_2__);
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



var PdfDialogComponent = /** @class */ (function () {
    function PdfDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dataBuffer = base64_arraybuffer__WEBPACK_IMPORTED_MODULE_2__["decode"](data.data);
        this.dataString = atob(data.data);
    }
    PdfDialogComponent.prototype.ngOnInit = function () {
    };
    PdfDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pdf-dialog',
            template: __webpack_require__(/*! ./pdf-dialog.component.html */ "./src/app/components/pdf-dialog/pdf-dialog.component.html"),
            styles: [__webpack_require__(/*! ./pdf-dialog.component.css */ "./src/app/components/pdf-dialog/pdf-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], PdfDialogComponent);
    return PdfDialogComponent;
}());



/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: Config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.apiServer = "http://localhost:3000";
    Config.apiVersion = "/api/v1";
    return Config;
}());



/***/ }),

/***/ "./src/app/service/ipfs-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/ipfs-service.service.ts ***!
  \*************************************************/
/*! exports provided: IpfsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpfsService", function() { return IpfsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_pdf_dialog_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pdf-dialog/pdf-dialog.component */ "./src/app/components/pdf-dialog/pdf-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IpfsService = /** @class */ (function () {
    function IpfsService(http, dialog) {
        this.http = http;
        this.dialog = dialog;
    }
    IpfsService.prototype.getDocument = function (id) {
        var _this = this;
        if (id) {
            //let params = new HttpParams().set('id', id);
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('hash', id);
            return this.http.get(_config_config__WEBPACK_IMPORTED_MODULE_2__["Config"].apiServer + "/document", { params: params }).subscribe(function (res) {
                if (res['code'] == 0 && res['data']) {
                    _this.dialog.closeAll();
                    var dialogRef = _this.dialog.open(_components_pdf_dialog_pdf_dialog_component__WEBPACK_IMPORTED_MODULE_4__["PdfDialogComponent"], {
                        minWidth: '600px',
                        data: {
                            'data': res['data']
                        }
                    });
                    //let balance = res['data']['balance'];
                    //console.log(balance);
                    //this.store.dispatch({ type: ETH_BALACNE,
                    //	'balance':balance,
                    //});
                }
            }, function (err) {
                console.log("IpfsService getDocument error occured");
                console.log(err);
            });
        }
    };
    IpfsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], IpfsService);
    return IpfsService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





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

module.exports = __webpack_require__(/*! /home/lhj/project/DocNotarization/DocNotarizationFront/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map