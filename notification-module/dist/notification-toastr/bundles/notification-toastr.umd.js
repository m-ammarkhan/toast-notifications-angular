(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('notification-toastr', ['exports', '@angular/core', 'rxjs', '@angular/common', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['notification-toastr'] = {}, global.ng.core, global.rxjs, global.ng.common, global.ng.platformBrowser));
}(this, (function (exports, i0, rxjs, i2, platformBrowser) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    var Notification = /** @class */ (function () {
        function Notification(title, type, msg, show, timeout) {
            this.title = title;
            this.type = type;
            this.msg = msg;
            this.show = show;
            this.timeout = timeout;
        }
        return Notification;
    }());

    var NotificationToastService = /** @class */ (function () {
        function NotificationToastService() {
            this.notifications = [];
            this.subject = new rxjs.Subject();
            this.notification = new Notification("", "", "", false, 4000);
        }
        NotificationToastService.prototype.getAlert = function () {
            return this.subject.asObservable();
        };
        NotificationToastService.prototype.sendSuccess = function (message, title) {
            this.notification = new Notification("", "", "", false, 4000);
            this.notification.title = title;
            this.notification.type = "success";
            this.notification.msg = message;
            this.notification.show = true;
            this.subject.next(this.notification);
        };
        NotificationToastService.prototype.sendError = function (message, title) {
            this.notification = new Notification("", "", "", false, 4000);
            this.notification.title = title;
            this.notification.type = "error";
            this.notification.msg = message;
            this.notification.show = true;
            this.subject.next(this.notification);
        };
        NotificationToastService.prototype.sendInfo = function (message, title) {
            this.notification = new Notification("", "", "", false, 90000);
            this.notification.title = title;
            this.notification.type = "info";
            this.notification.msg = message;
            this.notification.show = true;
            this.subject.next(this.notification);
        };
        NotificationToastService.prototype.sendWarning = function (message, title) {
            this.notification = new Notification("", "", "", false, 4000);
            this.notification.title = title;
            this.notification.type = "warning";
            this.notification.msg = message;
            this.notification.show = true;
            this.subject.next(this.notification);
        };
        NotificationToastService.prototype.clear = function () {
            this.subject.next();
        };
        NotificationToastService.prototype.hideNotification = function () {
            return this.notification.show = false;
        };
        return NotificationToastService;
    }());
    NotificationToastService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NotificationToastService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], ctorParameters: function () { return []; } });

    var NotificationToastrComponent = /** @class */ (function () {
        function NotificationToastrComponent(notificationService) {
            this.notificationService = notificationService;
            this.notifications = [];
            this.aboveFive = [];
            this.moreThanFive = false;
            this.hide = true;
        }
        NotificationToastrComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.aboveFive.length == 0) {
                this.moreThanFive = false;
            }
            this.notificationService.getAlert().subscribe(function (toast) {
                if (!toast) {
                    _this.notifications = [];
                    return;
                }
                _this.notifications.push(toast);
                if (_this.notifications.length > 5) {
                    _this.moreThanFive = true;
                    _this.aboveFive.push(_this.notifications[0]);
                    _this.notifications.splice(0, 1);
                }
                setTimeout(function () {
                    if (_this.aboveFive.length > 0) {
                        _this.notifications.push(_this.aboveFive[_this.aboveFive.length - 1]);
                        _this.aboveFive.splice(_this.aboveFive.length - 1, 1);
                    }
                    if (_this.aboveFive.length == 0) {
                        _this.moreThanFive = false;
                    }
                    if (_this.notifications.length > 0 || _this.aboveFive.length > 0) {
                        _this.notifications = _this.notifications.filter(function (x) { return x !== toast; });
                        _this.aboveFive = _this.aboveFive.filter(function (x) { return x !== toast; });
                    }
                }, toast.timeout);
            });
        };
        NotificationToastrComponent.prototype.removeNotification = function (notification) {
            this.notifications = this.notifications.filter(function (x) { return x !== notification; });
            if (this.aboveFive.length > 0) {
                this.notifications.push(this.aboveFive[this.aboveFive.length - 1]);
                this.aboveFive.splice(this.aboveFive.length - 1, 1);
            }
            if (this.aboveFive.length == 0) {
                this.moreThanFive = false;
            }
        };
        return NotificationToastrComponent;
    }());
    NotificationToastrComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastrComponent, deps: [{ token: NotificationToastService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    NotificationToastrComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.3", type: NotificationToastrComponent, selector: "notification-toastr", ngImport: i0__namespace, template: "<div class=\"toast-top-right\">\n  <ng-container *ngFor=\"let notification of notifications\">\n    <div\n      *ngIf=\"notification.show\"\n      id=\"toast-container\"\n      role=\"button\"\n      (click)=\"removeNotification(notification)\"\n    >\n      <div\n        class=\"toast toast-{{ notification.type }}\"\n        aria-live=\"polite\"\n        style=\"display: block\"\n      >\n        <div class=\"toast-title\">\n          {{ notification.title }}\n        </div>\n        <div class=\"toast-message\">\n          {{ notification.msg }}\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <div *ngIf=\"moreThanFive\">\n    <button *ngIf=\"hide\" (click)=\"hide = false\" class=\"btn\">Show</button\n    ><button *ngIf=\"!hide\" (click)=\"hide = true\" class=\"btn\">Hide</button>\n\n    <div *ngIf=\"!hide\" class=\"toast-group\">\n      <div *ngFor=\"let notification of aboveFive\" class=\"toast-container-group\">\n        <div *ngIf=\"notification.show\">\n          <div class=\"toast-container-group-text-{{ notification.type }}\">\n            <b style=\"margin-left: 5px\">{{ notification.title }}:</b>\n            {{ notification.msg }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", styles: [".toast-title{font-weight:bold}.toast-message{word-wrap:break-word}.toast-message a,.toast-message label{color:#fff}.toast-message a:hover{color:#ccc;text-decoration:none}.toast-close-button{position:relative;right:-.3em;top:-.3em;float:right;font-size:25px;font-weight:bold;color:#fff;-webkit-text-shadow:0 1px 0 #ffffff;text-shadow:0 1px 0 #ffffff;opacity:.8}.toast-close-button:hover,.toast-close-button:focus{color:#000;font-size:30px;text-decoration:none;cursor:pointer;opacity:.2}button.toast-close-button{padding:0;cursor:pointer;background:transparent;border:0;-webkit-appearance:none}.toast-top-right{position:absolute;top:40px;right:20px}.toast-top-left{position:absolute;top:40px;left:20px}#toast-container{pointer-events:none;z-index:99999}#toast-container *{box-sizing:border-box;z-index:inherit}#toast-container>div{overflow:hidden;padding:15px 15px 15px 50px;width:300px;border-radius:3px;background-position:15px center;background-repeat:no-repeat;box-shadow:0 0 12px #999;color:#fff;opacity:.8}#toast-container>div.toast-custom{padding:15px;color:#030303}#toast-container>div.toast-custom .toast-close-button{color:#999!important}#toast-container>:hover{box-shadow:0 0 12px #000;opacity:2;cursor:pointer}#toast-container>.toast-info{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=)!important}#toast-container>.toast-error{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=)!important}#toast-container>.toast-success{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==)!important}#toast-container>.toast-warning{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=)!important}#toast-container.toast-top-center>div,#toast-container.toast-bottom-center>div{width:300px;margin:auto}#toast-container.toast-top-full-width>div,#toast-container.toast-bottom-full-width>div{width:96%;margin:auto}.btn{font-size:large;margin:5px;background-color:teal;color:#fff;border-radius:5px;border-style:none}.btn:hover{box-shadow:0 0 12px #000;margin:5px;background-color:teal;color:#fff;border-radius:5px;border-style:none}.toast-group{border-style:solid;border-width:.5px;border-color:teal;border-radius:10px}.toast-container-group{margin:5px;border-radius:5px}.toast-container-group-text-success{background-color:green;opacity:.8;color:#fff;border-radius:5px}.toast-container-group-text-success:hover{box-shadow:0 0 12px #000;background-color:green;opacity:.8;color:#fff;font-size:large;text-shadow:#999999}.toast-container-group-text-info{border-radius:5px;background-color:#00f;opacity:.8;color:#fff}.toast-container-group-text-info:hover{box-shadow:0 0 12px #000;background-color:#00f;opacity:.8;color:#fff;font-size:large;text-shadow:#999999}.toast-container-group-text-warning{border-radius:5px;background-color:#ff4500;opacity:.8;color:#fff}.toast-container-group-text-warning:hover{box-shadow:0 0 12px #000;background-color:#ff4500;opacity:.8;color:#fff;font-size:large;text-shadow:#999999}.toast-container-group-text-error{border-radius:5px;background-color:red;opacity:.8;color:#fff}.toast-container-group-text-error:hover{box-shadow:0 0 12px #000;background-color:red;opacity:.8;color:#fff;font-size:large;text-shadow:#999999}.toast{background-color:#fff;pointer-events:auto;margin-bottom:10px}.toast-success{background-color:green}.toast-error{background-color:red}.toast-info{background-color:#00f}.toast-warning{background-color:#ff4500}@media all and (max-width: 240px){#toast-container>div{padding:8px 8px 8px 50px;width:11em}#toast-container .toast-close-button{right:-.2em;top:-.2em}}@media all and (min-width: 241px) and (max-width: 480px){#toast-container>div{padding:8px 8px 8px 50px;width:18em}#toast-container .toast-close-button{right:-.2em;top:-.2em}}@media all and (min-width: 481px) and (max-width: 768px){#toast-container>div{padding:15px 15px 15px 50px;width:25em}}\n"], directives: [{ type: i2__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastrComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'notification-toastr',
                        templateUrl: './notification-toastr.component.html',
                        styleUrls: ['./notification-toastr.component.css']
                    }]
            }], ctorParameters: function () { return [{ type: NotificationToastService }]; } });

    var NotificationToastrModule = /** @class */ (function () {
        function NotificationToastrModule() {
        }
        return NotificationToastrModule;
    }());
    NotificationToastrModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastrModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NotificationToastrModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastrModule, declarations: [NotificationToastrComponent], imports: [platformBrowser.BrowserModule], exports: [NotificationToastrComponent] });
    NotificationToastrModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastrModule, providers: [
            NotificationToastService
        ], imports: [[
                platformBrowser.BrowserModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: NotificationToastrModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NotificationToastrComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            NotificationToastrComponent
                        ],
                        providers: [
                            NotificationToastService
                        ]
                    }]
            }] });

    /*
     * Public API Surface of notification-toastr
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NotificationToastService = NotificationToastService;
    exports.NotificationToastrComponent = NotificationToastrComponent;
    exports.NotificationToastrModule = NotificationToastrModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=notification-toastr.umd.js.map
