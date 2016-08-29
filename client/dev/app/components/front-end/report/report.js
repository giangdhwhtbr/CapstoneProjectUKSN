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
var common_1 = require('@angular/common');
var report_1 = require('../../../services/report');
var notification_1 = require('../../../services/notification');
var users_1 = require('../../../services/users');
var private_chat_1 = require('../../shared/private-chat');
var ReportComponent = (function () {
    function ReportComponent(fb, _reportService, _noti, _userService) {
        this._reportService = _reportService;
        this._noti = _noti;
        this._userService = _userService;
        this.user = localStorage.getItem('username');
        this.link = window.location.pathname;
        this.reportForm = fb.group({
            "title": [""],
            "content": [""],
            "user": [""],
            "reportedUser": [""],
            "link": [""]
        });
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.close = function () {
        $("#myModal").closeModal();
    };
    ReportComponent.prototype.addReport = function (report) {
        var _this = this;
        this._reportService.addReport(report).subscribe(function (report) {
            //call function send notification for admin realtime
            //user === null means sending notification for every user roles admin
            var title = "Nhận được một báo cáo vi phạm";
            var link = report.link;
            _this._userService.getAllUsers().subscribe(function (users) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].role === 'admin') {
                        console.log(users[i]);
                        _this._noti.alertNotification(title, users[i].username, link);
                    }
                }
                _this._noti.createNotificationAdmin(title, link).subscribe(function (r) {
                    //$('#mess').html('<div class="alert alert-success"> <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> <strong>Báo cáo thành công !</strong> </div>');
                    $('#btnCl').trigger("click");
                });
            });
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input('reportedUser'), 
        __metadata('design:type', String)
    ], ReportComponent.prototype, "reportedUser", void 0);
    ReportComponent = __decorate([
        core_1.Component({
            selector: 'report',
            templateUrl: 'client/dev/app/components/front-end/report/templates/report.html',
            styleUrls: [],
            directives: [
                common_1.FORM_DIRECTIVES, private_chat_1.PrivateChatComponent
            ]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder, report_1.ReportService, notification_1.NotificationService, users_1.UserService])
    ], ReportComponent);
    return ReportComponent;
})();
exports.ReportComponent = ReportComponent;
//# sourceMappingURL=report.js.map