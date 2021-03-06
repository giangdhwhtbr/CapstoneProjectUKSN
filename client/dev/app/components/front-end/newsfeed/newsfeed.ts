/**
 * Created by GiangDH on 5/18/16.
 */
import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { RequestService } from '../../../services/requests';
import { UserService } from '../../../services/users';
import { ArticleService } from '../../../services/article';
import { PrivateChatComponent } from './../../shared/private-chat';
import { listTagComponent } from '../tag/tag';
import { topArticlesComponent } from './topArticle';
import { infoHover } from '../user/user-profile/info-hover';

declare var $: any;

@Component({
    selector: 'news-feed',
    templateUrl: 'client/dev/app/components/front-end/newsfeed/templates/newsfeed.html',
    styleUrls: ['client/dev/app/components/front-end/newsfeed/styles/newsfeed.css'],
    directives: [
        ROUTER_DIRECTIVES,
        PrivateChatComponent,
        listTagComponent,
        topArticlesComponent,
        infoHover
    ]
})

export class NewsFeedComponent implements OnInit {
    roleToken: string;
    userToken: string;
    pageTitle: string = 'Welcome to Knowledge Sharing Network';
    records: any;

    //count for request
    countR1: number;
    countR2: number;

    //count for articles
    countA1: number;
    countA2: number;
    height: number = 400;

    constructor(private _userService: UserService,
        private _requestService: RequestService,
        private _articleService: ArticleService,
        private router: Router) {
        this.roleToken = localStorage.getItem('role');
        this.userToken = localStorage.getItem('username');

    }

    ngOnInit(): void {
        this.countA1 = 5;
        this.countR1 = 5;
        this.countA2 = 5;
        this.countR2 = 5;
        this.records = [];
        if (this.userToken === null) {
            this.getArts();
        } else {
            this.getRequests();
            this.getArticles();
        }

          $('.carousel.carousel-slider').carousel({full_width: true});
    }

    seeMore(): void {
        this.countR1 = this.countR1 + 5;
        this.countA1 = this.countA1 + 5;
        if (this.userToken === null) {
            this.getArts();
        } else {
            this.getRequests();
            this.getArticles();
        }
    }

    getArts() {
        this._articleService.getAllArts(this.countA1).subscribe((arts) => {
            console.log(arts);
            for (let a of arts) {
                this.records.push(a);
            }
            this.getReqs();
        });
    }

    getReqs() {
        this._requestService.getAllRequests(this.countR1).subscribe((reqs) => {
            for (let r of reqs) {
                this.records.push(r);
            }
        })
    }

    getRequests() {
        this._userService.getUserByUserName(this.userToken).subscribe((user) => {
            //get onwknowledgeId of user
            this._requestService.getRequestByUserTags(user.ownKnowledgeIds, this.countR1).subscribe((requests) => {
                //if there is no request which has tagid same as onwknowledgeId
                if (requests.length === 0 || user.ownKnowledgeIds.length === 0) {
                    this._requestService.getRequestExceptUserTags(user.ownKnowledgeIds, this.countR2).subscribe((requests) => {
                        if (requests.length <= 0) {
                        } else {
                            for (var i = 0; i < requests.length; i++) {

                                //get summary
                                let html = requests[i].description;
                                let div = document.createElement("div");
                                div.innerHTML = html;
                                let text = div.textContent || div.innerText || "";

                                requests[i].description = text;

                                // push each records to records array
                                this.records.push(requests[i]);
                            }
                            this.countR2 = this.countR2 + 5;
                        }
                    });
                } else {
                    for (var i = 0; i < requests.length; i++) {
                        //get summary
                        let html = requests[i].description;
                        let div = document.createElement("div");
                        div.innerHTML = html;
                        let text = div.textContent || div.innerText || "";
                        requests[i].description = text;

                        // push each records to records array
                        this.records.push(requests[i]);
                    }
                }
            });
        });
    }

    getArticles() {
        this._userService.getUserByUserName(this.userToken).subscribe((user) => {
            //get onwknowledgeId of user
            this._articleService.getArticlesByUserTags(user.ownKnowledgeIds, this.countA1).subscribe((articles) => {
                //if there is no articles which has tagid same as onwknowledgeId
                if (articles.length === 0 || user.ownKnowledgeIds.length === 0) {
                    this._articleService.getArticleExceptUserTags(user.ownKnowledgeIds, this.countA2).subscribe((articles) => {
                        if (articles.length <= 0) {

                        } else {
                            for (var i = 0; i < articles.length; i++) {
                                //get summary
                                let html = articles[i].content;
                                let div = document.createElement("div");
                                div.innerHTML = html;
                                let text = div.textContent || div.innerText || "";
                                articles[i].content = text;

                                // push each records to records array
                                this.records.push(articles[i]);
                            }
                            this.countA2 = this.countA2 + 5;
                        }
                    });
                } else {
                    for (var i = 0; i < articles.length; i++) {
                        //get summary
                        let html = articles[i].content;
                        let div = document.createElement("div");
                        div.innerHTML = html;
                        let text = div.textContent || div.innerText || "";
                        articles[i].content = text;
                        // push each records to records array
                        this.records.push(articles[i]);
                    }
                }
            });
        });

    }

}
