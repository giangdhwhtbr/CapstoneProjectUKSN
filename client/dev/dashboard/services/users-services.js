/**
 * Created by GiangDH on 5/8/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var Observable_1 = require('rxjs/Observable');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._usersUrl = '/api/user/:id';
    }
    UserService.prototype.getAllUsers = function () {
        return this._http.get(this._usersUrl.replace(':id', ''))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        return this._http.get(this._usersUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _user = JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.displayName,
            username: user.username,
            password: user.password,
            email: user.email,
            role: user.role
        });
        return this._http
            .post(this._usersUrl.replace(':id', ''), _user, options)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(user);
        var _user = JSON.stringify({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.displayName,
            username: user.username,
            password: user.password,
            email: user.email,
            role: user.role
        });
        return this._http
            .put(this._usersUrl.replace(':id', user._id), _user, options)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=users-services.js.map