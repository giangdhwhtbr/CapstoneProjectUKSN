"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
/**
 * Created by GiangDH on 5/25/16.
 */
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var LoggedInRouterOutlet = (function (_super) {
    __extends(LoggedInRouterOutlet, _super);
    function LoggedInRouterOutlet(_elementRef, _loader, _parentRouter, nameAttr) {
        _super.call(this, _elementRef, _loader, _parentRouter, nameAttr);
        this.parentRouter = _parentRouter;
        // The Boolean following each route below denotes whether the route requires authentication to view
        this.publicRoutes = {
            '': true,
            'admin/users': false
        };
    }
    LoggedInRouterOutlet.prototype.activate = function (instruction) {
        var url = instruction.urlPath;
        this.roleToken = localStorage.getItem('userrole');
        if (!this.publicRoutes[url] && !this._canActive(this.roleToken)) {
            // todo: redirect to Login, may be there a better way?
            this.parentRouter.navigateByUrl('/');
        }
        return _super.prototype.activate.call(this, instruction);
    };
    LoggedInRouterOutlet.prototype._canActive = function (userrole) {
        if (!userrole) {
            return false;
        }
        else if (userrole != 'admin' || userrole != 'manager') {
            return false;
        }
        return true;
    };
    LoggedInRouterOutlet = __decorate([
        core_1.Directive({
            selector: 'router-outlet'
        }),
        __param(3, core_1.Attribute('name')), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, router_1.Router, String])
    ], LoggedInRouterOutlet);
    return LoggedInRouterOutlet;
}(router_1.RouterOutlet));
exports.LoggedInRouterOutlet = LoggedInRouterOutlet;
