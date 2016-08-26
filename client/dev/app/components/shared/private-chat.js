var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 8/12/16.
 */
var core_1 = require('@angular/core');
var PrivateChatComponent = (function () {
    function PrivateChatComponent(_chatService, _noti, _userService) {
        this._chatService = _chatService;
        this._noti = _noti;
        this._userService = _userService;
        this.username = localStorage.getItem('username');
        this.socket = io('https://localhost:80');
        this.messages = [];
        this.allChatRooms = [];
    }
    PrivateChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket.on('private-message-return', function (data) {
            var news = 0;
            for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.user === _this.username) {
                    news = user.newMessages;
                }
            }
            for (var _b = 0, _c = _this.allChatRooms; _b < _c.length; _b++) {
                var room = _c[_b];
                if (room._id === data.id) {
                    room.lastSent = data.sentAt;
                    room.lastMsg = data.message;
                    room.newMessages = news;
                }
            }
            _this.allChatRooms.sort(function (a, b) {
                if (a.lastSent > b.lastSent) {
                    return -1;
                }
                else if (a.lastSent < b.lastSent) {
                    return 1;
                }
                return 0;
            });
            _this.messages.push(data);
        });
        this.socket.on('private-message-reset', function (data) {
            var news = 0;
            for (var _i = 0, _a = data.users; _i < _a.length; _i++) {
                var user = _a[_i];
                if (user.user === _this.username) {
                    news = user.newMessages;
                }
            }
            for (var _b = 0, _c = _this.allChatRooms; _b < _c.length; _b++) {
                var room = _c[_b];
                if (room.friendName === data.receiver) {
                    room.lastMsg = data.message;
                    room.newMessages = news;
                }
            }
        });
        if (this.username) {
            this.loadAva();
            this.listAllChatRoom();
        }
    };
    PrivateChatComponent.prototype.loadAva = function () {
        var _this = this;
        this._userService.loadAva(this.username)
            .subscribe(function (res) {
            _this.avatar = res.linkImg;
        }, function (err) {
            console.log(err);
        });
    };
    PrivateChatComponent.prototype.listAllChatRoom = function () {
        var _this = this;
        this.allChatRooms = [];
        if (localStorage.getItem('username')) {
            this.sub = this._chatService.getAllChatRoomOfUser(this.username)
                .subscribe(function (chatRooms) {
                if (chatRooms) {
                    for (var _i = 0; _i < chatRooms.length; _i++) {
                        var chatRoom = chatRooms[_i];
                        _this.socket.emit('subscribe-private-chat', chatRoom._id);
                        var room = {
                            _id: chatRoom._id,
                            chatLogs: chatRoom.chatLogs,
                            newMessages: 0
                        };
                        if (chatRoom.chatLogs.length) {
                            room.lastMsg = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].message;
                            room.lastSent = chatRoom.chatLogs[chatRoom.chatLogs.length - 1].sentAt;
                        }
                        for (var _a = 0, _b = chatRoom.users; _a < _b.length; _a++) {
                            var user = _b[_a];
                            if (user.user !== _this.username) {
                                room.friendName = user.user;
                                room.friendAva = user.avatar;
                            }
                            if (user.user === _this.username) {
                                room.newMessages = user.newMessages;
                            }
                        }
                        _this.allChatRooms.push(room);
                        _this.allChatRooms.sort(function (a, b) {
                            if (a.lastSent > b.lastSent) {
                                return -1;
                            }
                            if (a.lastSent < b.lastSent) {
                                return 1;
                            }
                            return 0;
                        });
                        _this.receiver = _this.allChatRooms[0].friendName;
                        _this.messages = _this.allChatRooms[0].chatLogs;
                        _this.currentRoom = _this.allChatRooms[0]._id;
                    }
                }
            });
        }
    };
    PrivateChatComponent.prototype.getReceiver = function (slRoom) {
        //Click on friend
        this.messages = [];
        // this.news = 0;
        this.currentRoom = slRoom._id;
        this.receiver = slRoom.friendName;
        this.messages = slRoom.chatLogs;
        var data = {
            sender: this.username,
            receiver: this.receiver
        };
        this.socket.emit('reset-new-message', data);
    };
    PrivateChatComponent.prototype.sendMessage = function () {
        var data = {
            sender: this.username,
            message: this.mess,
            receiver: this.receiver,
            avatar: this.avatar
        };
        this._noti.alertNotification('Bạn có tin nhắn mới', this.receiver, '');
        this.socket.emit('private-message', data);
        this.socket.emit('reset-new-message', data);
        this.mess = "";
    };
    PrivateChatComponent = __decorate([
        core_1.Component({
            selector: 'private-chat',
            templateUrl: 'client/dev/app/components/shared/templates/chatbox.html',
            styleUrls: ['client/dev/app/components/shared/styles/chatbox.css']
        })
    ], PrivateChatComponent);
    return PrivateChatComponent;
})();
exports.PrivateChatComponent = PrivateChatComponent;
//# sourceMappingURL=private-chat.js.map