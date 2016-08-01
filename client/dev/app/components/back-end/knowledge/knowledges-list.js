var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var knowledge_1 = require('../../../services/knowledge');
var knowledge_update_1 = require('./knowledge-update');
var sub_knowledge_create_1 = require('./sub-knowledge-create');
var ng2_pagination_1 = require('ng2-pagination');
var filter_1 = require('../shared/filter');
var KnowledgeListComponent = (function () {
    function KnowledgeListComponent(fb, _elRef, _knowledgeService, _requestService) {
        this._elRef = _elRef;
        this._knowledgeService = _knowledgeService;
        this._requestService = _requestService;
        this.pageTitle = 'Knowledge List';
        this.knowledgeForm = fb.group({
            "name": [""],
            "description": [""]
        });
        this.subCategoryForm = fb.group({
            "name": [""],
            "description": [""],
            "parent": [""]
        });
    }
    KnowledgeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._requestService.getAllRequests().subscribe(function (requests) {
            _this.requests = requests;
        });
        this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
            for (var i = 0; i < knowledges.length; i++) {
                var length = 0;
                for (var j = 0; j < _this.requests.length; j++) {
                    if (_this.requests[j].knowledgeId == knowledges[i]._id) {
                        length++;
                        knowledges[i]["requestLength"] = length;
                    }
                }
            }
            _this.knowledges = _this._knowledgeService.getChildFromParent(knowledges);
            console.log(_this.knowledges);
            for (var i = 0; i < _this.knowledges.length; i++) {
                var a = 0;
                for (var j = 0; j < _this.knowledges[i]["subCategory"].length; j++) {
                    a += _this.knowledges[i]["subCategory"][j]["requestLength"];
                    _this.knowledges[i]["requestLength"] = a;
                }
            }
            for (var i = 0; i < _this.knowledges.length - 1; i++) {
                for (var j = 1; j < _this.knowledges.length; j++) {
                    if (_this.knowledges[i]["requestLength"] < _this.knowledges[j]["requestLength"]) {
                        _this.knowledge = _this.knowledges[i];
                        _this.knowledges[i] = _this.knowledges[j];
                        _this.knowledges[j] = _this.knowledge;
                    }
                }
            }
        });
    };
    KnowledgeListComponent.prototype.deleteKnowledge = function (id) {
        var _this = this;
        this._knowledgeService
            .deleteKnowledge(id)
            .subscribe(function () {
            _this.knowledges.forEach(function (t, i) {
                if (t._id === id)
                    return _this.knowledges.splice(i, 1);
            });
        });
    };
    KnowledgeListComponent.prototype.addKnowledge = function (knowledge) {
        var _this = this;
        this._knowledgeService
            .addKnowledge(knowledge)
            .subscribe(function (m) {
            _this.knowledges.push(m);
            _this.knowledgeForm.controls["name"].updateValue("");
            _this.knowledgeForm.controls["description"].updateValue("");
        });
    };
    KnowledgeListComponent.prototype.changeKnowledgeStatus = function (knowledge) {
        var _this = this;
        this._knowledgeService
            .changeKnowledgeStatus(knowledge)
            .subscribe(function (knowledge) {
            if (knowledge.hasOwnProperty("subCategory")) {
                for (var i = 0; i < knowledge["subCategory"].length; i++) {
                    if (knowledge["subCategory"][i].status == knowledge.status) {
                        _this._knowledgeService
                            .changeKnowledgeStatus(knowledge["subCategory"][i])
                            .subscribe(function (knowledge) {
                        });
                    }
                }
            }
            _this._knowledgeService.getAllKnowledges().subscribe(function (knowledges) {
                _this.knowledges = knowledges;
            });
        });
    };
    KnowledgeListComponent.prototype.hide = function () {
        $(".collapse").collapse("hide");
    };
    __decorate([
        core_1.Input()
    ], KnowledgeListComponent.prototype, "knowledge");
    KnowledgeListComponent = __decorate([
        core_1.Component({
            selector: 'knowledge-list',
            templateUrl: 'client/dev/app/components/back-end/knowledge/templates/knowledge-list.html',
            directives: [
                knowledge_update_1.UpdateKnowledgeComponent,
                sub_knowledge_create_1.CreateSubCategoryComponent,
                router_1.ROUTER_DIRECTIVES, ng2_pagination_1.PaginationControlsCmp],
            providers: [knowledge_1.KnowledgeService, ng2_pagination_1.PaginationService],
            pipes: [ng2_pagination_1.PaginatePipe, filter_1.StringFilterPipe]
        })
    ], KnowledgeListComponent);
    return KnowledgeListComponent;
})();
exports.KnowledgeListComponent = KnowledgeListComponent;
//# sourceMappingURL=knowledges-list.js.map