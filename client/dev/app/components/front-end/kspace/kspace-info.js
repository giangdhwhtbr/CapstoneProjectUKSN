var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * Created by GiangDH on 7/9/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var article_1 = require('../../../services/article');
var ng_semantic_1 = require("ng-semantic");
var KSpaceInfoComponent = (function () {
    function KSpaceInfoComponent(router, route, _kspaceService, _articleService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._kspaceService = _kspaceService;
        this._articleService = _articleService;
        this.accessRoomBtn = 'Access Room';
        this.isFinish = false;
        this.images = [];
        this.boards = [];
        this.isCreatingArt = false;
        this.route.params.subscribe(function (params) {
            _this.kspaceId = params['id'];
            _this.lecturer = params['lecturer'];
        });
    }
    KSpaceInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._kspaceService
            .getKSpaceById(this.kspaceId)
            .subscribe(function (kspace) {
            _this.kspace = kspace;
            _this.title = kspace.requestTitle;
            _this.reviews = kspace.reviews;
            _this.rateAve = parseInt(kspace.rateAve);
            for (var _i = 0, _a = kspace.chatlog; _i < _a.length; _i++) {
                var log = _a[_i];
                if (log.dataURL) {
                    var data = {
                        id: log._id,
                        des: log.message,
                        url: log.dataURL
                    };
                    _this.images.push(data);
                }
            }
            for (var _b = 0, _c = kspace.boards; _b < _c.length; _b++) {
                var board = _c[_b];
                if (board._id) {
                    var data = {
                        id: board._id,
                        des: board.boardNumber,
                        url: board.dataURL
                    };
                    _this.boards.push(data);
                }
            }
            if (kspace.finishedAt) {
                _this.isFinish = true;
                _this.finishDate = kspace.finishedAt;
            }
        });
        console.log(this.isCreatingArt);
    };
    KSpaceInfoComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (!this.ratePoint) {
            this.errorMessage = {
                header: '',
                content: 'Vui lòng chấm điểm cho bài giảng'
            };
        }
        else {
            var data = {
                id: this.kspaceId,
                createdUser: localStorage.getItem('username'),
                content: value.content,
                rate: this.ratePoint
            };
            this._kspaceService.createReview(data).subscribe(function (reviews) {
                _this.reviews = reviews;
            }, function (error) {
                if (error._body) {
                    console.log(error);
                    error = JSON.parse(error._body);
                    if (error.message) {
                        _this.errorMessage = {
                            header: '',
                            content: error.message
                        };
                    }
                }
            });
        }
    };
    KSpaceInfoComponent.prototype.onReceiveRating = function (event) {
        this.errorMessage = '';
        this.ratePoint = event;
    };
    KSpaceInfoComponent.prototype.accessRoom = function () {
        var specs = 'resizable=yes, fullscreen=yes';
        var name = '_blank';
        var url = '/room/' + this.kspaceId + '/' + this.lecturer;
        window.open(url, name, specs);
    };
    KSpaceInfoComponent.prototype.finishKp = function () {
        var _this = this;
        this._kspaceService.finish(this.kspaceId).subscribe(function (kspace) {
            _this.isFinish = true;
            _this.finishDate = kspace.finishedAt;
        });
    };
    KSpaceInfoComponent.prototype.openSelectElement = function () {
        this.isCreatingArt = true;
    };
    KSpaceInfoComponent.prototype.createArt = function () {
        var contentArt = '';
        for (var i = 0; i < this.images.length; i++) {
            contentArt += "<h5>" + this.images[i].des + "</h5><br>";
            contentArt += '<img class="responsive-img" src="' + this.images[i].url + '" style="background-color: black; border-radius: 10px;"><br>';
        }
        for (var i = 0; i < this.boards.length; i++) {
            contentArt += "<h5>" + this.boards[i].des + "</h5><br>";
            contentArt += '<img class="responsive-img" src="' + this.boards[i].url + '" style="background-color: black; border-radius: 10px;" ><br>';
        }
        var dateKs = new Date(this.kspace.createdAt);
        dateKs = dateKs.toLocaleDateString();
        var title = this.kspace.requestTitle + " " + dateKs;
        this._articleService.addArticle(title, contentArt);
    };
    KSpaceInfoComponent.prototype.deleteElement = function (id) {
        for (var i = 0; i < this.images.length; i++) {
            if (this.images[i].id == id) {
                this.images.splice(i, 1);
                break;
            }
        }
        for (var i = 0; i < this.boards.length; i++) {
            if (this.boards[i].id == id) {
                this.boards.splice(i, 1);
                break;
            }
        }
    };
    KSpaceInfoComponent = __decorate([
        core_1.Component({
            templateUrl: 'client/dev/app/components/front-end/kspace/templates/kspace-info.html',
            directives: [
                router_1.ROUTER_DIRECTIVES,
                ng_semantic_1.SEMANTIC_COMPONENTS,
                ng_semantic_1.SEMANTIC_DIRECTIVES
            ],
            providers: [article_1.ArticleService]
        })
    ], KSpaceInfoComponent);
    return KSpaceInfoComponent;
})();
exports.KSpaceInfoComponent = KSpaceInfoComponent;
//# sourceMappingURL=kspace-info.js.map