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
var core_1 = require('@angular/core');
var requests_1 = require('../../../services/requests');
var knowledge_1 = require('../../../services/knowledge');
var tag_1 = require('../../../services/tag');
var primeng_1 = require('primeng/primeng');
var private_chat_1 = require('../../shared/private-chat');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var CKEditor = (function () {
    function CKEditor(_elm, _requestService, router, route) {
        var _this = this;
        this._requestService = _requestService;
        this.router = router;
        this.route = route;
        CKEDITOR.replace(_elm.nativeElement);
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
    }
    CKEditor.prototype.ngOnInit = function () {
        var _this = this;
        this._requestService.getRequestById(this.id).subscribe(function (request) {
            _this.req = request;
            CKEDITOR.instances.editor1.setData(_this.req.description + '');
        });
    };
    CKEditor = __decorate([
        core_1.Component({
            selector: 'ck-editor',
            template: "",
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, requests_1.RequestService, router_1.Router, router_1.ActivatedRoute])
    ], CKEditor);
    return CKEditor;
})();
var UpdateRequestComponent = (function () {
    function UpdateRequestComponent(fb, _requestService, router, route, _tagService, _knowledgeService) {
        var _this = this;
        this._requestService = _requestService;
        this.router = router;
        this.route = route;
        this._tagService = _tagService;
        this._knowledgeService = _knowledgeService;
        this.route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.updateRequestFormCli = fb.group({
            "_id": [""],
            "title": [""],
            "description": [""],
            "knowledgeId": [""],
            "status": [""]
        });
    }
    UpdateRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        //get all back.knowledge
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            _this.CreateUploadImageCkeditor();
            _this.CreateYoutubeBtnCkeditor();
            _this.addCommandBtnCk();
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
            _this._requestService.getRequestById(_this.id).subscribe(function (request) {
                _this._knowledgeService.findKnowledgeById(request.knowledgeId).subscribe(function (knowledge) {
                    _this.kname = knowledge.name;
                    _this.knowledgeId = knowledge._id;
                });
                var ids = [];
                ids = request.tags;
                _this._tagService.getTagsByIds(ids).subscribe(function (tags) {
                    _this.request = request;
                    _this.title = request.title;
                    _this.description = request.description;
                    _this._id = request._id;
                    _this.status = request.status;
                    var nameArr = [];
                    for (var _i = 0; _i < tags.length; _i++) {
                        var e = tags[_i];
                        nameArr.push(e.name);
                    }
                    _this.tags = nameArr;
                    _this.loadAllTags();
                    $('.collapsible').collapsible({});
                });
            }, function (error) {
                console.log(error.text());
            });
        });
    };
    UpdateRequestComponent.prototype.openModalImg = function () {
        $('#ModalUploadImgCkeditor').openModal();
    };
    UpdateRequestComponent.prototype.openModalYoutube = function () {
        $('#ModalYTCkeditor').openModal();
    };
    UpdateRequestComponent.prototype.insertLinkToBox = function (link) {
        CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" height="536" width="858" /></p>');
    };
    UpdateRequestComponent.prototype.insertYoutubeToBox = function (link) {
        //https://www.youtube.com/watch?v=mraul5-1TBE
        var i = link.indexOf("=");
        link = link.substring(i + 1, link.length);
        var s = '<p><iframe frameborder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/' + link + '" width="500"></iframe></p>';
        CKEDITOR.instances.editor1.insertHtml(s);
    };
    UpdateRequestComponent.prototype.addCommandBtnCk = function () {
        CKEDITOR.instances.editor1.addCommand('uploadImage', { exec: this.openModalImg });
        CKEDITOR.instances.editor1.addCommand('youtube', { exec: this.openModalYoutube });
    };
    UpdateRequestComponent.prototype.CreateUploadImageCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('uploadImage', {
            label: 'Upload Image',
            command: 'uploadImage',
            icon: '/client/dev/asserts/images/icon-img-ck.png'
        });
    };
    UpdateRequestComponent.prototype.CreateYoutubeBtnCkeditor = function () {
        CKEDITOR.instances.editor1.ui.addButton('youtube', {
            label: 'Add youtube',
            command: 'youtube',
            icon: '/client/dev/asserts/images/icon-youtube.png'
        });
    };
    UpdateRequestComponent.prototype.filterONTag = function () {
        var oldTag = [];
        if (this.tags.length > 0) {
            for (var _i = 0, _a = this.tagsEx; _i < _a.length; _i++) {
                var e = _a[_i];
                for (var _b = 0, _c = this.tags; _b < _c.length; _b++) {
                    var e1 = _c[_b];
                    if (e.name == e1) {
                        oldTag.push(e._id);
                        var index = this.tags.indexOf(e1);
                        if (index > -1) {
                            this.tags.splice(index, 1);
                        }
                    }
                }
            }
        }
        return [oldTag, this.tags];
    };
    UpdateRequestComponent.prototype.filterKnw = function (event) {
        var query = event.query;
        this.filteredKnw = [];
        for (var i = 0; i < this.tagsEx.length; i++) {
            if (this.tagsEx[i].name.toLowerCase().includes(query.toLowerCase())) {
                this.filteredKnw.push(this.tagsEx[i].name);
            }
            if (this.filteredKnw.indexOf(query.trim()) < 0) {
                this.filteredKnw.unshift(query.trim());
            }
        }
    };
    //load all knowledge
    UpdateRequestComponent.prototype.loadAllTags = function () {
        var _this = this;
        this._tagService.getAllTag().subscribe(function (tags) {
            _this.tagsEx = tags;
        });
    };
    // ckeditor
    UpdateRequestComponent.prototype.makeFileRequest = function (url, params, files) {
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
    // uploading image
    UpdateRequestComponent.prototype.uploadImageCk = function () {
        if (this.filesToUpload) {
            this.makeFileRequest("/api/media", [], this.filesToUpload).then(function (result) {
                var link = '/uploads/' + result[0].filename;
                CKEDITOR.instances.editor1.insertHtml('<p><img alt="" src="' + link + '" style="height:536px; width:858px" /></p>');
            }, function (error) {
                console.error(error);
            });
        }
    };
    //action button upload
    UpdateRequestComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    UpdateRequestComponent.prototype.updateRequest = function (request) {
        var _this = this;
        var tags = [];
        tags = this.filterONTag();
        request.description = CKEDITOR.instances.editor1.getData();
        this._requestService.updateRequest(request, tags[0], tags[1]).subscribe(function (request) {
            _this.router.navigateByUrl('/requests/' + request._id + '/info');
        }, function (error) {
            console.log(error.text());
        });
    };
    UpdateRequestComponent = __decorate([
        core_1.Component({
            selector: 'request-update-cli',
            templateUrl: 'client/dev/app/components/back-end/request/templates/request-update.html',
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, primeng_1.AutoComplete, CKEditor, private_chat_1.PrivateChatComponent],
            providers: [tag_1.TagService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(requests_1.RequestService)),
        __param(5, core_1.Inject(knowledge_1.KnowledgeService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, requests_1.RequestService, router_1.Router, router_1.ActivatedRoute, tag_1.TagService, knowledge_1.KnowledgeService])
    ], UpdateRequestComponent);
    return UpdateRequestComponent;
})();
exports.UpdateRequestComponent = UpdateRequestComponent;
//# sourceMappingURL=request-update.js.map