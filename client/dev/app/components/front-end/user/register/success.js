var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var RegisterSuccessComponent = (function () {
    function RegisterSuccessComponent(router) {
        this.router = router;
        this.username = localStorage.getItem('username');
    }
    RegisterSuccessComponent.prototype.returnHome = function () {
        this.router.navigateByUrl('/');
    };
    RegisterSuccessComponent = __decorate([
        core_1.Component({
            template: "\n        <div class=\"container mg-top-50\">\n            <h1>Register Success, Welcome {{username}}</h1>\n            <button (click)=\"returnHome()\">Home</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], RegisterSuccessComponent);
    return RegisterSuccessComponent;
})();
exports.RegisterSuccessComponent = RegisterSuccessComponent;
//# sourceMappingURL=success.js.map