webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ngx-image-viewer {\n    min-height: 400px;\n    width: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"display: flex\">\n  <div style=\"width: 100%; display: flex\">\n    <ngx-image-viewer [src]=\"images\"\n                      [(config)]=\"config\"\n                      [(index)]=\"imageIndexOne\"\n                      (customEvent)=\"handleEvent($event)\">\n    </ngx-image-viewer>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.images = [
            '/assets/pexels-photo-352093.jpeg',
            'https://i.ytimg.com/vi/nlYlNF30bVg/hqdefault.jpg',
            'https://www.askideas.com/media/10/Funny-Goat-Closeup-Pouting-Face.jpg'
        ];
        this.imageIndexOne = 0;
        this.imageIndexTwo = 0;
        this.config = { customBtns: [{ name: 'print', icon: 'fa fa-print' }, { name: 'link', icon: 'fa fa-link' }] };
    }
    AppComponent.prototype.handleEvent = function (event) {
        console.log(event.name + " has been click on img " + (event.imageIndex + 1));
        switch (event.name) {
            case 'print':
                console.log('run print logic');
                break;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_viewer_image_viewer_module__ = __webpack_require__("../../../../../src/app/image-viewer/image-viewer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__image_viewer_image_viewer_module__["a" /* ImageViewerModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/image-viewer/fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("../../../../screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = (function () {
    function ToggleFullscreenDirective(el) {
        this.el = el;
    }
    //Important comment
    ToggleFullscreenDirective.prototype.ngOnChanges = function () {
        if (this.isFullscreen && __WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["request"](this.el.nativeElement);
        }
        else if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["exit"]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])('ngxToggleFullscreen'),
        __metadata("design:type", Boolean)
    ], ToggleFullscreenDirective.prototype, "isFullscreen", void 0);
    ToggleFullscreenDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
            selector: '[ngxToggleFullscreen]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */]])
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer-config.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEvent; });
var CustomEvent = (function () {
    function CustomEvent(name, imageIndex) {
        this.name = name;
        this.imageIndex = imageIndex;
    }
    return CustomEvent;
}());



/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngxToggleFullscreen]=\"fullscreen\" class=\"img-container\" [style.backgroundColor]=\"config.containerBackgroundColor\"\n     (wheel)=\"scrollZoom($event)\" (dragover)=\"onDragOver($event)\">\n  <img [src]=\"src[index]\" [ngStyle]=\"style\" alt=\"Image not found...\" (dragstart)=\"onDragStart($event)\" (load)=\"onLoad()\" (loadstart)=\"onLoadStart()\"/>\n  <!-- Div below will be used to hide the 'ghost' image when dragging -->\n  <div></div>\n  <div class=\"spinner-container\" *ngIf=\"loading\">\n    <div class=\"spinner\"></div>\n  </div>\n\n  <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.rotateCounterClockwise\" (click)=\"rotateCounterClockwise()\">\n    <span [class]=\"config.btnIcons.rotateCounterClockwise\"></span>\n  </button>\n  <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.rotateClockwise\" (click)=\"rotateClockwise()\">\n    <span [class]=\"config.btnIcons.rotateClockwise\"></span>\n  </button>\n\n  <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.zoomOut\" (click)=\"zoomOut()\">\n    <span [class]=\"config.btnIcons.zoomOut\"></span>\n  </button>\n  <button type=\"button\" [class]=\"config.btnClass\" *ngIf=\"config.btnShow.zoomIn\" (click)=\"zoomIn()\">\n    <span [class]=\"config.btnIcons.zoomIn\"></span>\n  </button>\n\n  <button type=\"button\" [class]=\"config.btnClass\" *ngFor=\"let cBtn of config.customBtns\" (click)=\"fireCustomEvent(cBtn.name, index)\">\n    <span [class]=\"cBtn.icon\"></span>\n  </button>\n\n  <button type=\"button\" id=\"ngx-fs-btn\" [class]=\"config.btnClass\" (click)=\"toggleFullscreen()\" *ngIf=\"config.allowFullscreen\">\n    <span [class]=\"config.btnIcons.fullscreen\"></span>\n  </button>\n\n  <div class=\"nav-button-container\" *ngIf=\"src.length > 1\">\n    <button type=\"button\" [class]=\"config.btnClass\" (click)=\"prevImage()\" [disabled]=\"index === 0\">\n      <span [class]=\"config.btnIcons.prev\"></span>\n    </button>\n    <button type=\"button\" [class]=\"config.btnClass\" (click)=\"nextImage()\" [disabled]=\"index === src.length - 1\">\n      <span [class]=\"config.btnIcons.next\"></span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img-container {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n\n.img-container img {\n  z-index: 2;\n  margin: 0 auto;\n  display: block;\n  max-width: 100%;\n  max-height: 100%; }\n\n.img-container button {\n  z-index: 99;\n  position: absolute;\n  right: 15px; }\n  .img-container button:not(:disabled) {\n    cursor: pointer; }\n\n.img-container > button:nth-of-type(1):not(#ngx-fs-btn) {\n  bottom: 15px; }\n\n.img-container > button:nth-of-type(2):not(#ngx-fs-btn) {\n  bottom: 65px; }\n\n.img-container > button:nth-of-type(3):not(#ngx-fs-btn) {\n  bottom: 115px; }\n\n.img-container > button:nth-of-type(4):not(#ngx-fs-btn) {\n  bottom: 165px; }\n\n.img-container > button:nth-of-type(5):not(#ngx-fs-btn) {\n  bottom: 215px; }\n\n.img-container > button:nth-of-type(6):not(#ngx-fs-btn) {\n  bottom: 265px; }\n\n.img-container > button:nth-of-type(7):not(#ngx-fs-btn) {\n  bottom: 315px; }\n\n#ngx-fs-btn {\n  top: 15px; }\n\nbutton.default {\n  height: 40px;\n  width: 40px;\n  border: 1px solid #555;\n  border-radius: 50%;\n  background-color: white;\n  opacity: 0.7;\n  transition: opacity 200ms; }\n\nbutton.default:hover {\n  opacity: 1; }\n\nbutton.default:disabled {\n  opacity: 0.25; }\n\n.nav-button-container > button {\n  position: relative;\n  right: 0;\n  margin: 0 10px; }\n\n.nav-button-container {\n  text-align: center;\n  position: absolute;\n  z-index: 98;\n  bottom: 10px;\n  left: 0;\n  right: 0; }\n\n.spinner-container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 60px;\n  height: 60px;\n  margin: auto;\n  padding: 10px;\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 25%; }\n\n.spinner {\n  border-width: 7px;\n  border-style: solid;\n  border-color: #ccc;\n  border-bottom-color: #222;\n  border-radius: 50%;\n  height: 100%;\n  width: 100%;\n  box-sizing: border-box;\n  -webkit-animation: rotation 2s linear infinite;\n  /* Safari 4+ */\n  /* Fx 5+ */\n  /* Opera 12+ */\n  animation: rotation 2s linear infinite;\n  /* IE 10+, Fx 29+ */ }\n\n@keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg); } }\n\n@-webkit-keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(359deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_viewer_config_model__ = __webpack_require__("../../../../../src/app/image-viewer/image-viewer-config.model.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DEFAULT_CONFIG = {
    btnClass: 'default',
    zoomFactor: 0.1,
    containerBackgroundColor: '#ccc',
    wheelZoom: false,
    allowFullscreen: true,
    allowKeyboardNavigation: true,
    btnShow: {
        zoomIn: true,
        zoomOut: true,
        rotateClockwise: true,
        rotateCounterClockwise: true,
        next: true,
        prev: true
    },
    btnIcons: {
        zoomIn: 'fa fa-plus',
        zoomOut: 'fa fa-minus',
        rotateClockwise: 'fa fa-repeat',
        rotateCounterClockwise: 'fa fa-undo',
        next: 'fa fa-arrow-right',
        prev: 'fa fa-arrow-left',
        fullscreen: 'fa fa-arrows-alt',
    }
};
var ImageViewerComponent = (function () {
    function ImageViewerComponent(moduleConfig) {
        this.moduleConfig = moduleConfig;
        this.index = 0;
        this.indexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.configChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.customEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.style = { transform: '', msTransform: '', oTransform: '', webkitTransform: '' };
        this.fullscreen = false;
        this.loading = true;
        this.scale = 1;
        this.rotation = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.hovered = false;
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        var merged = this.mergeConfig(DEFAULT_CONFIG, this.moduleConfig);
        this.config = this.mergeConfig(merged, this.config);
        this.triggerConfigBinding();
    };
    ImageViewerComponent.prototype.nextImage = function (event) {
        if (this.canNavigate(event) && this.index < this.src.length - 1) {
            this.loading = true;
            this.index++;
            this.triggerIndexBinding();
            this.reset();
        }
    };
    ImageViewerComponent.prototype.prevImage = function (event) {
        if (this.canNavigate(event) && this.index > 0) {
            this.loading = true;
            this.index--;
            this.triggerIndexBinding();
            this.reset();
        }
    };
    ImageViewerComponent.prototype.zoomIn = function () {
        this.scale *= (1 + this.config.zoomFactor);
        this.updateStyle();
    };
    ImageViewerComponent.prototype.zoomOut = function () {
        if (this.scale > this.config.zoomFactor) {
            this.scale /= (1 + this.config.zoomFactor);
        }
        this.updateStyle();
    };
    ImageViewerComponent.prototype.scrollZoom = function (evt) {
        if (this.config.wheelZoom) {
            evt.deltaY > 0 ? this.zoomOut() : this.zoomIn();
            return false;
        }
    };
    ImageViewerComponent.prototype.rotateClockwise = function () {
        this.rotation += 90;
        this.updateStyle();
    };
    ImageViewerComponent.prototype.rotateCounterClockwise = function () {
        this.rotation -= 90;
        this.updateStyle();
    };
    ImageViewerComponent.prototype.onLoad = function () {
        this.loading = false;
    };
    ImageViewerComponent.prototype.onLoadStart = function () {
        this.loading = true;
    };
    ImageViewerComponent.prototype.onDragOver = function (evt) {
        this.translateX += (evt.clientX - this.prevX);
        this.translateY += (evt.clientY - this.prevY);
        this.prevX = evt.clientX;
        this.prevY = evt.clientY;
        this.updateStyle();
    };
    ImageViewerComponent.prototype.onDragStart = function (evt) {
        if (evt.dataTransfer && evt.dataTransfer.setDragImage) {
            evt.dataTransfer.setDragImage(evt.target.nextElementSibling, 0, 0);
        }
        this.prevX = evt.clientX;
        this.prevY = evt.clientY;
    };
    ImageViewerComponent.prototype.toggleFullscreen = function () {
        this.fullscreen = !this.fullscreen;
        if (!this.fullscreen) {
            this.reset();
        }
    };
    ImageViewerComponent.prototype.triggerIndexBinding = function () {
        this.indexChange.emit(this.index);
    };
    ImageViewerComponent.prototype.triggerConfigBinding = function () {
        this.configChange.next(this.config);
    };
    ImageViewerComponent.prototype.fireCustomEvent = function (name, imageIndex) {
        this.customEvent.emit(new __WEBPACK_IMPORTED_MODULE_1__image_viewer_config_model__["a" /* CustomEvent */](name, imageIndex));
    };
    ImageViewerComponent.prototype.reset = function () {
        this.scale = 1;
        this.rotation = 0;
        this.translateX = 0;
        this.translateY = 0;
        this.updateStyle();
    };
    ImageViewerComponent.prototype.onMouseOver = function () {
        this.hovered = true;
    };
    ImageViewerComponent.prototype.onMouseLeave = function () {
        this.hovered = false;
    };
    ImageViewerComponent.prototype.canNavigate = function (event) {
        return event == null || (this.config.allowKeyboardNavigation && this.hovered);
    };
    ImageViewerComponent.prototype.updateStyle = function () {
        this.style.transform = "translate(" + this.translateX + "px, " + this.translateY + "px) rotate(" + this.rotation + "deg) scale(" + this.scale + ")";
        this.style.msTransform = this.style.transform;
        this.style.webkitTransform = this.style.transform;
        this.style.oTransform = this.style.transform;
    };
    ImageViewerComponent.prototype.mergeConfig = function (defaultValues, overrideValues) {
        var result = __assign({}, defaultValues);
        if (overrideValues) {
            result = __assign({}, defaultValues, overrideValues);
            if (overrideValues.btnIcons) {
                result.btnIcons = __assign({}, defaultValues.btnIcons, overrideValues.btnIcons);
            }
        }
        return result;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Array)
    ], ImageViewerComponent.prototype, "src", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageViewerComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Input */])(),
        __metadata("design:type", Object)
    ], ImageViewerComponent.prototype, "config", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ImageViewerComponent.prototype, "indexChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ImageViewerComponent.prototype, "configChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ImageViewerComponent.prototype, "customEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:keyup.ArrowRight', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageViewerComponent.prototype, "nextImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('window:keyup.ArrowLeft', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImageViewerComponent.prototype, "prevImage", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseover'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImageViewerComponent.prototype, "onMouseOver", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* HostListener */])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImageViewerComponent.prototype, "onMouseLeave", null);
    ImageViewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ngx-image-viewer',
            template: __webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Inject */])('config')),
        __metadata("design:paramtypes", [Object])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/image-viewer/image-viewer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_viewer_component__ = __webpack_require__("../../../../../src/app/image-viewer/image-viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fullscreen_directive__ = __webpack_require__("../../../../../src/app/image-viewer/fullscreen.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImageViewerModule = (function () {
    function ImageViewerModule() {
    }
    ImageViewerModule_1 = ImageViewerModule;
    ImageViewerModule.forRoot = function (config) {
        return {
            ngModule: ImageViewerModule_1,
            providers: [{ provide: 'config', useValue: config }]
        };
    };
    ImageViewerModule = ImageViewerModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__image_viewer_component__["a" /* ImageViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__fullscreen_directive__["a" /* ToggleFullscreenDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__image_viewer_component__["a" /* ImageViewerComponent */],
                __WEBPACK_IMPORTED_MODULE_3__fullscreen_directive__["a" /* ToggleFullscreenDirective */]
            ]
        })
    ], ImageViewerModule);
    return ImageViewerModule;
    var ImageViewerModule_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map