webpackJsonp([12],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionAddPageModule", function() { return PredictionAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prediction_add__ = __webpack_require__(807);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PredictionAddPageModule = /** @class */ (function () {
    function PredictionAddPageModule() {
    }
    PredictionAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__prediction_add__["a" /* PredictionAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__prediction_add__["a" /* PredictionAddPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], PredictionAddPageModule);
    return PredictionAddPageModule;
}());

//# sourceMappingURL=prediction-add.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Predictions; });
var Predictions = /** @class */ (function () {
    function Predictions(awayteam, country, hometeam, league, matchdate, selections, matchtime, odds, id, status, user) {
        this.awayteam = awayteam;
        this.country = country;
        this.hometeam = hometeam;
        this.league = league;
        this.matchdate = matchdate;
        this.selections = selections;
        this.matchtime = matchtime;
        this.odds = odds;
        this.id = id;
        this.status = status;
        this.user = user;
    }
    return Predictions;
}());

//# sourceMappingURL=Predictions.js.map

/***/ }),

/***/ 807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredictionAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_games_games__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_Predictions__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PredictionAddPage = /** @class */ (function () {
    function PredictionAddPage(gamesProvider, authProvider, loadingCtrl, navCtrl, navParams) {
        this.gamesProvider = gamesProvider;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.prediction = new __WEBPACK_IMPORTED_MODULE_2__interfaces_Predictions__["a" /* Predictions */]({ id: "" }, { id: "" }, { id: "" }, { id: "" }, "", { id: "" }, "", "", "", { id: "", name: "" }, { id: "", firstname: "", lastname: "" });
    }
    PredictionAddPage.prototype.ionViewWillEnter = function () {
        this.Getcountries();
        this.GetSelections();
    };
    PredictionAddPage.prototype.Getcountries = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        loading.present();
        this.gamesProvider.Getcountries()
            .subscribe(function (resp) {
            loading.dismiss().catch(function () { });
            if (resp.statusCode === 200) {
                _this.countries = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            loading.dismiss().catch(function () { });
            _this.authProvider.showToast(error.error.error);
        });
    };
    PredictionAddPage.prototype.onSelectSelection = function (event) {
    };
    PredictionAddPage.prototype.onSelectHTeam = function (event) {
    };
    PredictionAddPage.prototype.onSelectATeam = function (event) {
    };
    PredictionAddPage.prototype.onSelectCountry = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.prediction.league = null;
        if (event.value.id) {
            loading.present();
            this.gamesProvider.GetLeaguesByCountryID(event.value.id)
                .subscribe(function (resp) {
                loading.dismiss().catch(function () { });
                if (resp.statusCode === 200) {
                    _this.leagues = resp.data;
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
            }, function (error) {
                loading.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
    };
    PredictionAddPage.prototype.onSelectLeague = function (event) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.prediction.awayteam = null;
        this.prediction.hometeam = null;
        if (event.value.id) {
            loading.present();
            this.gamesProvider.getTeamsByLeagueId(event.value.id)
                .subscribe(function (resp) {
                loading.dismiss().catch(function () { });
                if (resp.statusCode === 200) {
                    _this.hometeams = resp.data;
                    _this.awayteams = resp.data;
                }
                else {
                    _this.authProvider.showToast(resp.description);
                }
            }, function (error) {
                loading.dismiss().catch(function () { });
                _this.authProvider.showToast(error.error.error);
            });
        }
    };
    PredictionAddPage.prototype.onSubmit = function (prediction) {
        var _this = this;
        if (prediction.country) {
            if (prediction.league) {
                if (prediction.selections) {
                    if (prediction.hometeam && prediction.awayteam) {
                        if (prediction.odds) {
                            if (prediction.matchdate && prediction.matchtime) {
                                if (prediction.hometeam !== prediction.awayteam) {
                                    var loading_1 = this.loadingCtrl.create({
                                        content: "Please wait..."
                                    });
                                    loading_1.present();
                                    this.gamesProvider.CreatePrediction(prediction).subscribe(function (res) {
                                        loading_1.dismiss().catch(function () { });
                                        if (res.statusCode === 200) {
                                            _this.navCtrl.pop();
                                        }
                                        else {
                                            _this.authProvider.showToast(res.description);
                                        }
                                    }, function (error) {
                                        loading_1.dismiss().catch(function () { });
                                        _this.authProvider.showToast(error.error.error);
                                    });
                                }
                                else {
                                    this.authProvider.showToast("Home and Away Team cannot be same.");
                                }
                            }
                            else {
                                this.authProvider.showToast("Please, select either the Match Date or Time");
                            }
                        }
                        else {
                            this.authProvider.showToast("Odds input field is empty");
                        }
                    }
                    else {
                        this.authProvider.showToast("Please, select either Away or Home Team");
                    }
                }
                else {
                    this.authProvider.showToast("Please, select a Prediction");
                }
            }
            else {
                this.authProvider.showToast("Please, select a League");
            }
        }
        else {
            this.authProvider.showToast("Please, select a Country");
        }
    };
    PredictionAddPage.prototype.GetSelections = function () {
        var _this = this;
        this.gamesProvider.getSelections()
            .subscribe(function (resp) {
            if (resp.statusCode === 200) {
                _this.selections = resp.data;
            }
            else {
                _this.authProvider.showToast(resp.description);
            }
        }, function (error) {
            _this.authProvider.showToast(error.error.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('myselect'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_select_searchable__["SelectSearchableComponent"])
    ], PredictionAddPage.prototype, "selectComponent", void 0);
    PredictionAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-prediction-add',template:/*ion-inline-start:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/prediction-add/prediction-add.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add New Prediction</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="otherForm">\n    <ion-list>\n      <hr ion-text margin-top margin-bottom>\n      <ion-item>\n        <ion-label>\n          Select The Country\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.country" (onChange)="onSelectCountry($event)"\n          [items]="countries" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n\n        </select-searchable>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          Select The League\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.league" (onChange)="onSelectLeague($event)"\n          [items]="leagues" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n\n        </select-searchable>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Select The Home Team\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.hometeam" (onChange)="onSelectHTeam($event)"\n          [items]="hometeams" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n\n        </select-searchable>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>\n          Select The Away Team\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.awayteam" (onChange)="onSelectATeam($event)"\n          [items]="awayteams" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n\n        </select-searchable>\n\n      </ion-item>\n      <hr margin-top margin-bottom>\n      <ion-item>\n        <ion-label>\n          Select The selection\n        </ion-label>\n        <select-searchable item-content [(ngModel)]="prediction.selections" (onChange)="onSelectSelection($event)"\n          [items]="selections" itemValueField="id" [canClear]="true" clearButtonText="Clear Selected"\n          confirmButtonText="Proceed" itemTextField="name" [canSearch]="true">\n\n        </select-searchable>\n\n      </ion-item>\n      <hr margin-top margin-bottom>\n     \n      <ion-item>\n        <ion-label>\n          Match Date\n        </ion-label>\n        <ion-datetime [(ngModel)]="prediction.matchdate" required displayFormat="YYYY-MM-DD" min="2017" max="2050-12-31">\n        </ion-datetime>\n      </ion-item>\n      <ion-item>\n        <ion-label>\n          Match Time\n        </ion-label>\n        <ion-datetime displayFormat="h:mm A" required [(ngModel)]="prediction.matchtime"></ion-datetime>\n      </ion-item>\n      <hr margin-top margin-bottom>\n      <ion-item>\n        <ion-label stacked>Odds</ion-label>\n        <ion-input type="text" required [(ngModel)]="prediction.odds"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button ion-button block color="color2" (click)="onSubmit(prediction)">Submit</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/mac/Dropbox/GIDPSoftware/MacBook/Mobile/Sure3Odds/src/pages/prediction-add/prediction-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_games_games__["a" /* GamesProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_authenication_authenication__["a" /* AuthenicationProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["LoadingController"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["NavParams"]])
    ], PredictionAddPage);
    return PredictionAddPage;
}());

//# sourceMappingURL=prediction-add.js.map

/***/ })

});
//# sourceMappingURL=12.js.map