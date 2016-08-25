var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
//cores
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var report_1 = require('../../report/report');
var UserProfileBarComponent = (function () {
    function UserProfileBarComponent(router, route, _userService, _noti) {
        this.router = router;
        this.route = route;
        this._userService = _userService;
        this._noti = _noti;
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');
    }
    UserProfileBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('#loading').show();
        this.route
            .params
            .subscribe(function (params) {
            _this.name = params['name'];
            _this.linkImg = '';
            _this._userService.getUserByUserName(_this.name).subscribe(function (user) {
                _this.userProfile = user;
                _this.linkImg = user.linkImg;
                $('#loading').hide();
            }, function (error) {
                console.log(error);
            });
            //check if current user is staying in his/her profile page
            if (_this.name === _this.userToken) {
                _this.checkUser = true;
            }
            _this.getFriendList();
        });
        $('ul.tabs').tabs();
        $('.tooltipped').tooltip({ delay: 5 });
    };
    UserProfileBarComponent.prototype.openReport = function () {
        $('#myModal').openModal();
    };
    UserProfileBarComponent.prototype.ngOnDestroy = function () {
        $(".material-tooltip").remove();
    };
    UserProfileBarComponent.prototype.openChooseFile = function () {
        $('#chFileImg').trigger("click");
    };
    UserProfileBarComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        if (this.filesToUpload) {
            $('#loading').show();
            this._userService.makeFileRequest("/api/media", [], this.filesToUpload).then(function (r) {
                _this.linkImg = '/uploads/' + r[0].filename;
                _this.userProfile.linkImg = _this.linkImg;
                _this.userProfile.username = localStorage.getItem('username');
                _this._userService.updateUser(_this.userProfile, []).subscribe(function (r) {
                    $('#loading').hide();
                });
            }, function (error) {
                console.error(error);
            });
        }
    };
    UserProfileBarComponent.prototype.addFriend = function () {
        var _this = this;
        if (this.isFriend === false) {
            this._userService
                .addFriend(this.userToken, this.name)
                .subscribe(function (r) {
                console.log('friendship was created by ' + _this.userToken + ' and ' + _this.name);
            });
            //create a notification to user who get accepted a friend request
            var title = 'Lời mời kết bạn từ ' + this.userToken;
            var link = '/user/' + this.name + '/friends';
            Materialize.toast('đã gửi lời mời kết bạn thành công', 4000);
            //call function using socket io to send notification
            this._noti.alertNotification(title, this.name, link);
            //save notification to database
            this._noti.createNotification(title, this.name, link).subscribe(function (notification) {
            });
            this.isFriend = true;
        }
        else {
            Materialize.toast('Bạn đã gửi kết bạn rồi!', 4000);
        }
        // this.getFriendList();
    };
    UserProfileBarComponent.prototype.deleteFriend = function () {
        var r = confirm("Bạn có muốn hủy kết bạn");
        if (r == true) {
            this._userService
                .deleteFriendRequest(this.userToken, this.name)
                .subscribe(function () {
                console.log('delete successfull');
            });
            this._userService
                .deleteFriendRequest(this.name, this.userToken)
                .subscribe(function () {
            });
            this._userService
                .deactivateChatRoom(this.name, this.userToken)
                .subscribe(function () {
            });
            this.getFriendList();
            this.isFriend = false;
            Materialize.toast('bạn đã hủy gửi lời  mời kết bạn', 4000);
        }
    };
    //get friend list: pending and accepted
    UserProfileBarComponent.prototype.getFriendList = function () {
        var _this = this;
        this.checkSentRequestUser = false;
        this._userService
            .getFriendList(this.userToken)
            .subscribe(function (friendlist) {
            _this.friendList = friendlist;
            _this.checkIsFriend();
            //check sent request
            for (var i = 0; i < _this.friendList.length; i++) {
                if (friendlist[i].user2 === _this.name && _this.friendList[i].status === "pending") {
                    _this.checkSentRequestUser = true;
                    break;
                }
            }
            for (var i = 0; i < _this.friendList.length; i++) {
                if (friendlist[i].user1 === _this.name && _this.friendList[i].status === "pending") {
                    _this.checkIsRecivedRequest = true;
                    break;
                }
            }
        });
    };
    UserProfileBarComponent.prototype.checkIsFriend = function () {
        this.isFriend = false;
        for (var i = 0; i < this.friendList.length; i++) {
            if ((this.name === this.friendList[i].user1 && this.friendList[i].status === "accepted") ||
                (this.name === this.friendList[i].user2 && this.friendList[i].status === "accepted")) {
                this.isFriend = true;
                break;
            }
        }
    };
    UserProfileBarComponent = __decorate([
        core_1.Component({
            selector: 'user-profile-bar',
            templateUrl: 'client/dev/app/components/front-end/user/user-profile/templates/user-profile-bar.html',
            styleUrls: ['client/dev/app/components/front-end/user/user-profile/styles/user-profile.css'],
            directives: [
                router_1.ROUTER_DIRECTIVES,
                report_1.ReportComponent
            ]
        })
    ], UserProfileBarComponent);
    return UserProfileBarComponent;
})();
exports.UserProfileBarComponent = UserProfileBarComponent;
//# sourceMappingURL=user-profile-bar.js.map