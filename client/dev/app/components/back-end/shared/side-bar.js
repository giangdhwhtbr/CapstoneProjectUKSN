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
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], SidebarComponent.prototype, "pageTitle", void 0);
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            templateUrl: 'client/dev/app/components/back-end/shared/templates/side-bar.html',
            styleUrls: ['client/dev/asserts/css/admin.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
})();
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=side-bar.js.map