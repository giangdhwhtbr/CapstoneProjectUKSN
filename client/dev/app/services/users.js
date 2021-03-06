/**
 * Created by GiangDH on 5/8/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._usersUrl = '/api/user/:id';
        this._profilePictureUrl = '/api/user-picture';
        this._friendUrl = '/api/friendship/:id';
        this._getFriendUrl = '/api/getFriendship';
        this._getRequestByUserUrl = '/api/requests-user/:user/:num';
        this._isUserExistUrl = '/api/is-user-exist/:username';
        this._friendshipStatusUrl = '/api/friendship-status/:user1/:user2';
        this._banUrl = '/api/ban/:id';
        this._emailResetPass = '/api/email-reset-pass/:email';
        this._changePass = '/api/new-pass/:token';
        this._chatRoomUrl = 'api/chat-rooms';
        this._searchUrl = '/api/search-user/:username';
    }
    UserService.prototype.getUserByToken = function (token) {
        return this._http.get(this._changePass.replace(':token', token))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.searchUserByUsername = function (name) {
        return this._http.get(this._searchUrl.replace(':username', name))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateNewPassword = function (password, token) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var data = {
            password: password,
            token: token
        };
        return this._http.put(this._changePass.replace(':token', token), data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.sendEmailResetPassword = function (email) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._emailResetPass.replace(':email', email), options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.deactivateChatRoom = function (user1, user2) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var data = JSON.stringify({
            user1: user1,
            user2: user2
        });
        return this._http.put(this._chatRoomUrl, data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getAllUsers = function () {
        return this._http.get(this._usersUrl.replace(':id', ''))
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUserById = function (id) {
        return this._http.get(this._usersUrl.replace(':id', id))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //get user informations by username
    UserService.prototype.getUserByUserName = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _search = JSON.stringify({
            username: user
        });
        return this._http.put(this._usersUrl.replace(':id', ''), _search, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.addUser = function (user) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Connection': 'keep-alive' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _user = JSON.stringify({
            username: user.username,
            password: user.password,
            email: user.email,
            role: user.role
        });
        return this._http
            .post(this._usersUrl.replace(':id', ''), _user, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (user, _newTag) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            user: {
                _id: user._id,
                fullName: user.fullName,
                displayName: user.displayName,
                birthday: user.birthday,
                phone: user.phone,
                username: user.username,
                password: user.password,
                email: user.email,
                role: user.role,
                linkImg: user.linkImg,
                status: user.status,
                banStatus: user.banStatus
            },
            newTag: _newTag
        });
        return this._http
            .put(this._usersUrl.replace(':id', user._id), _data, options)
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.banUser = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http
            .put(this._banUrl.replace(':id', id), options);
    };
    //add friend service
    UserService.prototype.addFriend = function (requestUser, acceptUser) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _friendship = JSON.stringify({
            user1: requestUser,
            user2: acceptUser
        });
        return this._http
            .post(this._friendUrl.replace(':id', ''), _friendship, options)
            .map(function (r) { return r.json(); });
    };
    //select friend of logined user
    UserService.prototype.getFriendList = function (currentUser) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _friendship = JSON.stringify({
            user: currentUser
        });
        return this._http
            .post(this._getFriendUrl, _friendship, options)
            .map(function (r) { return r.json(); });
    };
    //get request of an user
    UserService.prototype.getRequestByUser = function (user, num) {
        return this._http
            .get(this._getRequestByUserUrl.replace(':user', user).replace(':num', num))
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    //delete friend request
    UserService.prototype.deleteFriendRequest = function (user1, user2) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _friendship = JSON.stringify({
            requestUser: user1,
            acceptUser: user2
        });
        return this._http
            .put(this._friendUrl.replace(':id', ''), _friendship, options);
    };
    //if user is exist, return 1, else return 0
    UserService.prototype.checkUserExist = function (username) {
        return this._http
            .get(this._isUserExistUrl.replace(':username', username));
    };
    UserService.prototype.acceptFriendRequest = function (user1, user2) {
        return this._http
            .get(this._friendshipStatusUrl.replace(':user1', user1).replace(':user2', user2));
    };
    UserService.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    UserService.prototype.loadAva = function (username) {
        var avaUrl = '/api/user/avatar/:username';
        return this._http
            .get(avaUrl.replace(':username', username))
            .map(function (r) { return r.json(); });
    };
    UserService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=users.js.map