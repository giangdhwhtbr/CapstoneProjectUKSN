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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var OfferService = (function () {
    function OfferService(_http) {
        this._http = _http;
        this._Url = '/api/offers/:id';
        this._OfferUrl = '/api/offers/:id/:num';
    }
    OfferService.prototype.updateOffer = function (id, newstatus) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _offer = JSON.stringify({
            status: newstatus
        });
        return this._http
            .put(this._Url.replace(':id', id), _offer, options)
            .map(function (r) { return r.json(); });
    };
    OfferService.prototype.addOffer = function (offer) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _offer = JSON.stringify({
            requestId: offer.requestId,
            message: offer.message,
            user: offer.user
        });
        return this._http
            .post(this._Url.replace(':id', ''), _offer, options)
            .map(function (r) { return r.json(); });
    };
    OfferService.prototype.getOfferByRequestId = function (id, num) {
        var header = new http_1.Headers;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var _data = JSON.stringify({
            id: id,
            num: num
        });
        return this._http.put(this._Url.replace(':id', ''), _data, options)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    OfferService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    OfferService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], OfferService);
    return OfferService;
})();
exports.OfferService = OfferService;
//# sourceMappingURL=request-offer.js.map