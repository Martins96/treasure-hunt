(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LUCAMARTINELLI\workspace.MY-WORK\treasure-hunt\treasure-hunt\src\main\angular\treasure-hunt-ng\src\main.ts */"zUnb");


/***/ }),

/***/ "2adB":
/*!****************************************************************************************!*\
  !*** ./src/app/home-user/enigma/homeuser-enigma-text/homeuser-enigmatext.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HomeuserEnigmatextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeuserEnigmatextComponent", function() { return HomeuserEnigmatextComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");




class HomeuserEnigmatextComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.cookieJWT = this.cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        let enigmaTextUrl = "/step/get-enigma-file";
        if (window.location.port === "4200")
            enigmaTextUrl = "http://localhost/step/get-enigma-file";
        this.rest.sendPostRawText(enigmaTextUrl, {
            "stepcode": this.stepCode,
            "filename": this.textFile
        }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.cookieJWT,
            "content-type": "application/json"
        })).subscribe(r => {
            this.enigmaDoc = r.body;
        }, err => {
            console.error(err);
        });
    }
}
HomeuserEnigmatextComponent.ɵfac = function HomeuserEnigmatextComponent_Factory(t) { return new (t || HomeuserEnigmatextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
HomeuserEnigmatextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeuserEnigmatextComponent, selectors: [["app-homeuser-enigma-text"]], inputs: { textFile: "textFile", stepCode: "stepCode" }, decls: 1, vars: 1, consts: [[1, "enigma-content", 3, "innerHTML"]], template: function HomeuserEnigmatextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.enigmaDoc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, styles: [".enigma-content[_ngcontent-%COMP%] {\r\n    margin: 2%;\r\n    font-family: TheStudentsTeacher;\r\n    font-size: 1.3em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWV1c2VyLWVuaWdtYXRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImhvbWV1c2VyLWVuaWdtYXRleHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbmlnbWEtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gICAgZm9udC1mYW1pbHk6IFRoZVN0dWRlbnRzVGVhY2hlcjtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbn0iXX0= */"] });


/***/ }),

/***/ "76OI":
/*!*************************************************************************************************!*\
  !*** ./src/app/home-user/resource/homeuser-resource-image/homeuser-resource-image.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: HomeuserResourceImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeuserResourceImageComponent", function() { return HomeuserResourceImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class HomeuserResourceImageComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ngOnChanges(change) {
        let objectURL = URL.createObjectURL(this.imageBlob);
        this.imageResult = this.sanitizer.bypassSecurityTrustUrl(objectURL);
    }
}
HomeuserResourceImageComponent.ɵfac = function HomeuserResourceImageComponent_Factory(t) { return new (t || HomeuserResourceImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
HomeuserResourceImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeuserResourceImageComponent, selectors: [["app-homeuser-resource-image"]], inputs: { imageBlob: ["blob", "imageBlob"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[3, "src"]], template: function HomeuserResourceImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageResult, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21ldXNlci1yZXNvdXJjZS1pbWFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "A8sk":
/*!*********************************!*\
  !*** ./src/app/cookie-utils.ts ***!
  \*********************************/
/*! exports provided: CookieManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieManager", function() { return CookieManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const COOKIE_CONSENT = 'allowed-cookie-banner';
const COOKIE_CONSENT_EXPIRE_DAYS = 180;
class CookieManager {
    constructor() {
        this.isConsented = false;
        this.isConsented = this.getCookie(COOKIE_CONSENT) === '1';
    }
    getCookie(name) {
        let ca = document.cookie.split(';');
        let caLen = ca.length;
        let cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return null;
    }
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    setCookie(name, value, expireDays, path = '') {
        let d = new Date();
        d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
        let expires = `expires=${d.toUTCString()}`;
        let cpath = path ? `; path=${path}` : '';
        document.cookie = `${name}=${value}; ${expires}${cpath}`;
    }
    consent(isConsent, e) {
        if (!isConsent) {
            return this.isConsented;
        }
        else if (isConsent) {
            this.setCookie(COOKIE_CONSENT, '1', COOKIE_CONSENT_EXPIRE_DAYS);
            this.isConsented = true;
            e.preventDefault();
        }
    }
}
CookieManager.ɵfac = function CookieManager_Factory(t) { return new (t || CookieManager)(); };
CookieManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookieManager, factory: CookieManager.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DwlU":
/*!******************************************************************************************!*\
  !*** ./src/app/home-user/enigma/homeuser-enigma-image/homeuser-enigmaimage.component.ts ***!
  \******************************************************************************************/
/*! exports provided: HomeuserEnigmaimageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeuserEnigmaimageComponent", function() { return HomeuserEnigmaimageComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");




class HomeuserEnigmaimageComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.cookieJWT = this.cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        let enigmaTextUrl = "/step/get-enigma-file";
        if (window.location.port === "4200")
            enigmaTextUrl = "http://localhost/step/get-enigma-file";
        this.rest.sendPostRawText(enigmaTextUrl, {
            "stepcode": this.stepCode,
            "filename": this.imgFile
        }, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.cookieJWT,
            "content-type": "application/json"
        })).subscribe(r => {
            this.enigmaImgBase64 = r.body;
        }, err => {
            console.error(err);
        });
    }
}
HomeuserEnigmaimageComponent.ɵfac = function HomeuserEnigmaimageComponent_Factory(t) { return new (t || HomeuserEnigmaimageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
HomeuserEnigmaimageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeuserEnigmaimageComponent, selectors: [["app-homeuser-enigma-image"]], inputs: { imgFile: "imgFile", stepCode: "stepCode" }, decls: 1, vars: 1, consts: [[1, "enigma-content", 3, "src"]], template: function HomeuserEnigmaimageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.enigmaImgBase64, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21ldXNlci1lbmlnbWFpbWFnZS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "E9uI":
/*!*********************************!*\
  !*** ./src/app/rest-service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class RestService {
    constructor(http) {
        this.http = http;
    }
    sendPostRawText(url, body, headers) {
        // call
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendGetRawText(url, headers) {
        // call
        return this.http.get(url, {
            headers,
            observe: 'response',
            responseType: 'text'
        });
    }
    sendPost(url, body, headers) {
        return this.http.post(url, body, {
            headers,
            observe: 'response',
            responseType: 'json'
        });
    }
    sendGet(url, headers) {
        return this.http.get(url, {
            headers,
            observe: 'response'
        });
    }
    getImage(url, headers) {
        return this.http.get(url, {
            headers,
            responseType: 'blob'
        });
    }
    sendGetBlob(url, headers) {
        // call
        return this.http.get(url, {
            headers,
            observe: 'response',
            responseType: 'blob'
        });
    }
}
RestService.ɵfac = function RestService_Factory(t) { return new (t || RestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestService, factory: RestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "EuRW":
/*!**************************************************!*\
  !*** ./src/app/home-user/home-user.component.ts ***!
  \**************************************************/
/*! exports provided: HomeUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeUserComponent", function() { return HomeUserComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enigma_homeuser_enigmafile_homeuser_enigmafile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enigma/homeuser-enigmafile/homeuser-enigmafile.component */ "eTgy");
/* harmony import */ var _resource_homeuser_resourcefile_homeuser_resourcefile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resource/homeuser-resourcefile/homeuser-resourcefile.component */ "RRfo");








function HomeUserComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.imageToShow, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function HomeUserComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, ": Enigma da risolvere :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-homeuser-enigmafile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepCode", ctx_r1.submitedStepCode);
} }
function HomeUserComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, ": Risorsa disponibile per questo enigma :");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-homeuser-resourcefile", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("stepCode", ctx_r2.submitedStepCode);
} }
class HomeUserComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.stepLoading = false;
        this.cookieJWT = this.cookieMng.getCookie("user.jwt");
    }
    ngOnInit() {
        this.getImageFromService();
        this.getTeamNameFromService();
    }
    getTeamNameFromService() {
        let getNameUrl = "/team-info/name";
        if (window.location.port === "4200")
            getNameUrl = "http://localhost/team-info/name";
        this.rest.sendGetRawText(getNameUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.cookieJWT
        })).subscribe(r => {
            this.teamName = r.body;
        }, err => {
            console.error(err);
        });
    }
    getImageFromService() {
        let getImageUrl = "/team-info/avatar";
        if (window.location.port === "4200")
            getImageUrl = "http://localhost/team-info/avatar";
        this.rest.getImage(getImageUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.cookieJWT
        })).subscribe(data => {
            this.createImageFromBlob(data);
        }, error => {
            console.log(error);
        });
    }
    createImageFromBlob(image) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    }
    //---- STEPS ----
    submitStep() {
        this.submitedStepCode = this.stepCode;
    }
}
HomeUserComponent.ɵfac = function HomeUserComponent_Factory(t) { return new (t || HomeUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
HomeUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeUserComponent, selectors: [["app-home-user"]], decls: 17, vars: 5, consts: [[1, "container-title"], [1, "title-team"], [1, "team-name"], [1, "team-avatar"], [3, "src", 4, "ngIf"], [1, "container-form-step"], [1, "step-form", 3, "ngSubmit"], [1, "form-container"], ["for", "stepCode", 1, "form-title"], ["type", "text", "id", "stepCodeInput", "name", "stepCode", 3, "ngModel", "ngModelChange"], ["type", "submit"], ["class", "container-step enigma", 4, "ngIf"], ["class", "container-step resource", 4, "ngIf"], [3, "src"], [1, "container-step", "enigma"], [3, "stepCode"], [1, "container-step", "resource"]], template: function HomeUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HomeUserComponent_img_6_Template, 1, 1, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeUserComponent_Template_form_ngSubmit_8_listener() { return ctx.submitStep(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Inserisci il codice per avviare il prossimo step");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeUserComponent_Template_input_ngModelChange_12_listener($event) { return ctx.stepCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Invia codice");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, HomeUserComponent_div_15_Template, 4, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, HomeUserComponent_div_16_Template, 5, 1, "div", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Benvenuto team: ", ctx.teamName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.imageToShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.stepCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitedStepCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.submitedStepCode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _enigma_homeuser_enigmafile_homeuser_enigmafile_component__WEBPACK_IMPORTED_MODULE_6__["HomeuserEnigmafileComponent"], _resource_homeuser_resourcefile_homeuser_resourcefile_component__WEBPACK_IMPORTED_MODULE_7__["HomeuserResourcefileComponent"]], styles: [".container-title[_ngcontent-%COMP%] {\r\n    font-family: Germina-Bunt;\r\n    text-align: center;\r\n    padding-top: 1%;\r\n    padding-bottom: 10%;\r\n\r\n    background-image: url(\"/assets/home-bg.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.title-team[_ngcontent-%COMP%] {\r\n    background-color: rgba(200, 150, 120, 0.75);\r\n    border-radius: 25px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: 0 auto;\r\n    padding: 2%;\r\n}\r\n\r\n.team-name[_ngcontent-%COMP%] {\r\n    font-size: 1.6em;\r\n    padding: 5px 0;\r\n}\r\n\r\n.container-form-step[_ngcontent-%COMP%] {\r\n    font-family: Germina-Bunt;\r\n    font-size: 1.5em;\r\n    padding: 2%;\r\n\r\n    background-image: url(\"/assets/step-bg.png\");\r\n    background-repeat: repeat-y;\r\n    background-size: cover;\r\n}\r\n\r\n.step-form[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.step-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: 5px 0;\r\n    clear: both;\r\n}\r\n\r\n.enigma[_ngcontent-%COMP%] {\r\n    border: 2px solid black;\r\n    border-radius: 2px;\r\n    margin: 5px;\r\n}\r\n\r\n.enigma[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .resource[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-family: Germina-Bunt;\r\n    word-spacing: 2px;\r\n    letter-spacing: 3px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1COztJQUVuQiw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsV0FBVzs7SUFFWCw0Q0FBNEM7SUFDNUMsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiaG9tZS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBHZXJtaW5hLUJ1bnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaG9tZS1iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLnRpdGxlLXRlYW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDE1MCwgMTIwLCAwLjc1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIlO1xyXG59XHJcblxyXG4udGVhbS1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mb3JtLXN0ZXAge1xyXG4gICAgZm9udC1mYW1pbHk6IEdlcm1pbmEtQnVudDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nOiAyJTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3N0ZXAtYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLnN0ZXAtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnN0ZXAtZm9ybSBsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmVuaWdtYSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZW5pZ21hIGgzLCAucmVzb3VyY2UgaDN7XHJcbiAgICBmb250LWZhbWlseTogR2VybWluYS1CdW50O1xyXG4gICAgd29yZC1zcGFjaW5nOiAycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG59Il19 */"] });


/***/ }),

/***/ "PKRR":
/*!***********************************************************************************************!*\
  !*** ./src/app/home-user/resource/homeuser-resource-text/homeuser-resource-text.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: HomeuserResourceTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeuserResourceTextComponent", function() { return HomeuserResourceTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HomeuserResourceTextComponent {
    constructor() { }
    ngOnChanges(change) {
        this.textBlob.text().then(r => {
            this.textResult = r;
        });
    }
}
HomeuserResourceTextComponent.ɵfac = function HomeuserResourceTextComponent_Factory(t) { return new (t || HomeuserResourceTextComponent)(); };
HomeuserResourceTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeuserResourceTextComponent, selectors: [["app-homeuser-resource-text"]], inputs: { textBlob: ["blob", "textBlob"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[3, "innerHTML"]], template: function HomeuserResourceTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.textResult, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21ldXNlci1yZXNvdXJjZS10ZXh0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "RRfo":
/*!*********************************************************************************************!*\
  !*** ./src/app/home-user/resource/homeuser-resourcefile/homeuser-resourcefile.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HomeuserResourcefileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeuserResourcefileComponent", function() { return HomeuserResourcefileComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _homeuser_resource_image_homeuser_resource_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homeuser-resource-image/homeuser-resource-image.component */ "76OI");
/* harmony import */ var _homeuser_resource_text_homeuser_resource_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../homeuser-resource-text/homeuser-resource-text.component */ "PKRR");
/* harmony import */ var _homeuser_resource_pdf_homeuser_resource_pdf_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../homeuser-resource-pdf/homeuser-resource-pdf.component */ "Zgqs");








function HomeuserResourcefileComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-homeuser-resource-image", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blob", ctx_r1.resourceContent);
} }
function HomeuserResourcefileComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-homeuser-resource-text", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blob", ctx_r2.resourceContent);
} }
function HomeuserResourcefileComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-homeuser-resource-pdf", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blob", ctx_r3.resourceContent);
} }
function HomeuserResourcefileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeuserResourcefileComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeuserResourcefileComponent_div_0_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HomeuserResourcefileComponent_div_0_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.filetype === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.filetype === "txt" || ctx_r0.filetype === "html");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.filetype === "pdf");
} }
class HomeuserResourcefileComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.cookieJWT = this.cookieMng.getCookie("user.jwt");
    }
    ngOnChanges(changes) {
        let enigmaTextUrl = "/step/get-resource/" + changes.stepCode.currentValue;
        if (window.location.port === "4200")
            enigmaTextUrl = "http://localhost/step/get-resource/" + changes.stepCode.currentValue;
        this.filetype = null;
        this.resourceContent = null;
        this.rest.sendGetBlob(enigmaTextUrl, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "Authorization": "Bearer " + this.cookieJWT,
            "content-type": "application/octet-stream"
        })).subscribe(r => {
            this.filetype = r.headers.get("content-file-type");
            this.resourceContent = r.body;
        }, err => {
            console.error(err);
        });
    }
}
HomeuserResourcefileComponent.ɵfac = function HomeuserResourcefileComponent_Factory(t) { return new (t || HomeuserResourcefileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
HomeuserResourcefileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeuserResourcefileComponent, selectors: [["app-homeuser-resourcefile"]], inputs: { stepCode: "stepCode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "content", 4, "ngIf"], [1, "content"], ["class", "image", 4, "ngIf"], ["class", "text", 4, "ngIf"], ["class", "pdf", 4, "ngIf"], [1, "image"], [3, "blob"], [1, "text"], [1, "pdf"]], template: function HomeuserResourcefileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeuserResourcefileComponent_div_0_Template, 4, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filetype);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _homeuser_resource_image_homeuser_resource_image_component__WEBPACK_IMPORTED_MODULE_5__["HomeuserResourceImageComponent"], _homeuser_resource_text_homeuser_resource_text_component__WEBPACK_IMPORTED_MODULE_6__["HomeuserResourceTextComponent"], _homeuser_resource_pdf_homeuser_resource_pdf_component__WEBPACK_IMPORTED_MODULE_7__["HomeuserResourcePdfComponent"]], styles: [".content[_ngcontent-%COMP%] {\r\n    border: 1px lightgray solid;\r\n    border-radius: 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWV1c2VyLXJlc291cmNlZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJob21ldXNlci1yZXNvdXJjZWZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGJvcmRlcjogMXB4IGxpZ2h0Z3JheSBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie-utils */ "A8sk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_user_home_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-user/home-user.component */ "EuRW");
/* harmony import */ var _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-login/home-login.component */ "W6tu");





function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(cookieMng) {
        this.cookieMng = cookieMng;
        this.cookieJWT = this.cookieMng.getCookie('user.jwt');
    }
    getJWT() {
        return this.cookieJWT;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_1__["CookieManager"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getJWT());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getJWT());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _home_user_home_user_component__WEBPACK_IMPORTED_MODULE_3__["HomeUserComponent"], _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__["HomeLoginComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "W6tu":
/*!****************************************************!*\
  !*** ./src/app/home-login/home-login.component.ts ***!
  \****************************************************/
/*! exports provided: HomeLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLoginComponent", function() { return HomeLoginComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cookie-utils */ "A8sk");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-service */ "E9uI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HomeLoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Server Error, Aia! sentite lo sviluppatore (scarso)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.serverErrorMsg);
} }
class HomeLoginComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.serverError = false;
        this.serverErrorMsg = null;
    }
    ngOnInit() {
    }
    submitLogin() {
        this.serverError = true;
        this.serverErrorMsg = null;
        let loginUrl = "/login";
        if (window.location.port === "4200")
            loginUrl = "http://localhost/login";
        this.rest.sendPostRawText(loginUrl, this.teamCode, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "content-type": "text/plain"
        })).subscribe(r => {
            console.log("Ok from login:" + r);
            this.cookieMng.setCookie('user.jwt', r.body, 1);
            window.location.href = "/";
        }, err => {
            this.error = err;
            if (err.status >= 500) {
                this.serverError = true;
                this.serverErrorMsg = err.message;
            }
        });
    }
    getError() {
        return this.error;
    }
}
HomeLoginComponent.ɵfac = function HomeLoginComponent_Factory(t) { return new (t || HomeLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
HomeLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeLoginComponent, selectors: [["app-home-login"]], decls: 9, vars: 2, consts: [[1, "container"], [1, "login-form", 3, "ngSubmit"], [1, "form-container"], ["for", "teamCode", 1, "form-title"], ["type", "text", "id", "teamCode", "name", "teamCode", 3, "ngModel", "ngModelChange"], ["type", "submit"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function HomeLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function HomeLoginComponent_Template_form_ngSubmit_1_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Inserisci il codice del team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HomeLoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.teamCode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HomeLoginComponent_div_8_Template, 5, 1, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.teamCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\r\n    background-image: url(\"/assets/login-bg.png\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 100vh\r\n}\r\n\r\n.form-title[_ngcontent-%COMP%] {\r\n    font-family: Cardinal;\r\n    font-size: 2em;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top:10%; \r\n    left:10%; \r\n    right:0; \r\n    bottom:0;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n    display: grid;\r\n    padding: 5% 2%;\r\n    background-color: rgba(220, 180, 180, 0.5);\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n}\r\n\r\n.login-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .login-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    max-width: 175px;\r\n    min-height: 25px;\r\n    margin: 15px 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZDQUE2QztJQUM3Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQjtBQUNKOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixPQUFPO0lBQ1AsUUFBUTtBQUNaOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQiIsImZpbGUiOiJob21lLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbG9naW4tYmcucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoXHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBDYXJkaW5hbDtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcblxyXG4ubG9naW4tZm9ybSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MTAlOyBcclxuICAgIGxlZnQ6MTAlOyBcclxuICAgIHJpZ2h0OjA7IFxyXG4gICAgYm90dG9tOjA7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBwYWRkaW5nOiA1JSAyJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAxODAsIDE4MCwgMC41KTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLmxvZ2luLWZvcm0gaW5wdXQsXHJcbi5sb2dpbi1mb3JtIGxhYmVsLFxyXG4ubG9naW4tZm9ybSBidXR0b24ge1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW46IDE1cHggMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-login/home-login.component */ "W6tu");
/* harmony import */ var _home_user_home_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-user/home-user.component */ "EuRW");
/* harmony import */ var _home_user_enigma_homeuser_enigma_text_homeuser_enigmatext_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-user/enigma/homeuser-enigma-text/homeuser-enigmatext.component */ "2adB");
/* harmony import */ var _home_user_enigma_homeuser_enigma_image_homeuser_enigmaimage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home-user/enigma/homeuser-enigma-image/homeuser-enigmaimage.component */ "DwlU");
/* harmony import */ var _home_user_resource_homeuser_resourcefile_homeuser_resourcefile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-user/resource/homeuser-resourcefile/homeuser-resourcefile.component */ "RRfo");
/* harmony import */ var _home_user_resource_homeuser_resource_text_homeuser_resource_text_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-user/resource/homeuser-resource-text/homeuser-resource-text.component */ "PKRR");
/* harmony import */ var _home_user_resource_homeuser_resource_image_homeuser_resource_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-user/resource/homeuser-resource-image/homeuser-resource-image.component */ "76OI");
/* harmony import */ var _home_user_resource_homeuser_resource_pdf_homeuser_resource_pdf_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-user/resource/homeuser-resource-pdf/homeuser-resource-pdf.component */ "Zgqs");
/* harmony import */ var _home_user_enigma_homeuser_enigmafile_homeuser_enigmafile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home-user/enigma/homeuser-enigmafile/homeuser-enigmafile.component */ "eTgy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_login_home_login_component__WEBPACK_IMPORTED_MODULE_4__["HomeLoginComponent"],
        _home_user_home_user_component__WEBPACK_IMPORTED_MODULE_5__["HomeUserComponent"],
        _home_user_enigma_homeuser_enigma_text_homeuser_enigmatext_component__WEBPACK_IMPORTED_MODULE_6__["HomeuserEnigmatextComponent"],
        _home_user_enigma_homeuser_enigma_image_homeuser_enigmaimage_component__WEBPACK_IMPORTED_MODULE_7__["HomeuserEnigmaimageComponent"],
        _home_user_resource_homeuser_resourcefile_homeuser_resourcefile_component__WEBPACK_IMPORTED_MODULE_8__["HomeuserResourcefileComponent"],
        _home_user_resource_homeuser_resource_text_homeuser_resource_text_component__WEBPACK_IMPORTED_MODULE_9__["HomeuserResourceTextComponent"],
        _home_user_resource_homeuser_resource_image_homeuser_resource_image_component__WEBPACK_IMPORTED_MODULE_10__["HomeuserResourceImageComponent"],
        _home_user_resource_homeuser_resource_pdf_homeuser_resource_pdf_component__WEBPACK_IMPORTED_MODULE_11__["HomeuserResourcePdfComponent"],
        _home_user_enigma_homeuser_enigmafile_homeuser_enigmafile_component__WEBPACK_IMPORTED_MODULE_12__["HomeuserEnigmafileComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "Zgqs":
/*!*********************************************************************************************!*\
  !*** ./src/app/home-user/resource/homeuser-resource-pdf/homeuser-resource-pdf.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: HomeuserResourcePdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeuserResourcePdfComponent", function() { return HomeuserResourcePdfComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


class HomeuserResourcePdfComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.filename = "resource.pdf";
    }
    ngOnChanges(change) {
        let fileURL = URL.createObjectURL(this.pdfBlob);
        this.pdfObj = this.sanitizer.bypassSecurityTrustUrl(fileURL);
    }
}
HomeuserResourcePdfComponent.ɵfac = function HomeuserResourcePdfComponent_Factory(t) { return new (t || HomeuserResourcePdfComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
HomeuserResourcePdfComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeuserResourcePdfComponent, selectors: [["app-homeuser-resource-pdf"]], inputs: { pdfBlob: ["blob", "pdfBlob"] }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [["id", "pdf"], [3, "href", "download"]], template: function HomeuserResourcePdfComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Risorsa PDF \u00E8 disponibile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "download PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.pdfObj, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("download", ctx.filename);
    } }, styles: ["div[_ngcontent-%COMP%] {\r\n    padding: 1% 3%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWV1c2VyLXJlc291cmNlLXBkZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJob21ldXNlci1yZXNvdXJjZS1wZGYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XHJcbiAgICBwYWRkaW5nOiAxJSAzJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "eTgy":
/*!***************************************************************************************!*\
  !*** ./src/app/home-user/enigma/homeuser-enigmafile/homeuser-enigmafile.component.ts ***!
  \***************************************************************************************/
/*! exports provided: HomeuserEnigmafileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeuserEnigmafileComponent", function() { return HomeuserEnigmafileComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cookie-utils */ "A8sk");
/* harmony import */ var src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-service */ "E9uI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _homeuser_enigma_text_homeuser_enigmatext_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../homeuser-enigma-text/homeuser-enigmatext.component */ "2adB");
/* harmony import */ var _homeuser_enigma_image_homeuser_enigmaimage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../homeuser-enigma-image/homeuser-enigmaimage.component */ "DwlU");







function HomeuserEnigmafileComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-homeuser-enigma-text", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("textFile", ctx_r3.stepInfoResponse.enigmaTextFile)("stepCode", ctx_r3.stepCode);
} }
function HomeuserEnigmafileComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-homeuser-enigma-image", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imgFile", ctx_r4.stepInfoResponse.enigmaImageFile)("stepCode", ctx_r4.stepCode);
} }
function HomeuserEnigmafileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeuserEnigmafileComponent_div_0_div_1_Template, 2, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeuserEnigmafileComponent_div_0_div_2_Template, 2, 2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stepInfoResponse && ctx_r0.stepInfoResponse.enigmaTextFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.stepInfoResponse && ctx_r0.stepInfoResponse.enigmaImageFile);
} }
function HomeuserEnigmafileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mi dispiace, il codice ", ctx_r1.stepCode, " non \u00E8 corretto, riprova!");
} }
function HomeuserEnigmafileComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Server Error, Aia! sentite lo sviluppatore (scarso)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.serverErrorMsg);
} }
class HomeuserEnigmafileComponent {
    constructor(cookieMng, rest) {
        this.cookieMng = cookieMng;
        this.rest = rest;
        this.stepCodeResult = null;
        this.stepInfoResponse = null;
        this.serverError = false;
        this.serverErrorMsg = null;
        this.cookieJWT = this.cookieMng.getCookie("user.jwt");
    }
    ngOnChanges(change) {
        this.serverError = false;
        this.serverErrorMsg = null;
        let getStepUrl = "/step/get-info";
        if (window.location.port === "4200")
            getStepUrl = "http://localhost/step/get-info";
        this.rest.sendPost(getStepUrl, change.stepCode.currentValue, new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
            "content-type": "text/plain",
            "Authorization": "Bearer " + this.cookieJWT
        })).subscribe(r => {
            this.stepInfoResponse = r.body;
            this.stepCodeResult = true;
        }, err => {
            console.error(err);
            if (err.status === 400)
                this.stepCodeResult = false;
            else {
                this.serverError = true;
                this.serverErrorMsg = err.message;
            }
        });
    }
}
HomeuserEnigmafileComponent.ɵfac = function HomeuserEnigmafileComponent_Factory(t) { return new (t || HomeuserEnigmafileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_cookie_utils__WEBPACK_IMPORTED_MODULE_2__["CookieManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"])); };
HomeuserEnigmafileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeuserEnigmafileComponent, selectors: [["app-homeuser-enigmafile"]], inputs: { stepCode: "stepCode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[4, "ngIf"], ["class", "wrong-code", 4, "ngIf"], [3, "textFile", "stepCode"], [3, "imgFile", "stepCode"], [1, "wrong-code"]], template: function HomeuserEnigmafileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomeuserEnigmafileComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomeuserEnigmafileComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, HomeuserEnigmafileComponent_div_2_Template, 5, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.serverError && ctx.stepCodeResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.stepCodeResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.serverError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _homeuser_enigma_text_homeuser_enigmatext_component__WEBPACK_IMPORTED_MODULE_5__["HomeuserEnigmatextComponent"], _homeuser_enigma_image_homeuser_enigmaimage_component__WEBPACK_IMPORTED_MODULE_6__["HomeuserEnigmaimageComponent"]], styles: [".wrong-code[_ngcontent-%COMP%] {\r\n    margin: 2%;\r\n    font-family: TheStudentsTeacher;\r\n    font-size: 1.5em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWV1c2VyLWVuaWdtYWZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImhvbWV1c2VyLWVuaWdtYWZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cm9uZy1jb2RlIHtcclxuICAgIG1hcmdpbjogMiU7XHJcbiAgICBmb250LWZhbWlseTogVGhlU3R1ZGVudHNUZWFjaGVyO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map