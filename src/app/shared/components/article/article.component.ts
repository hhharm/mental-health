import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {Article} from "../../models/article.model";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute, Params} from "@angular/router";
import {DataService} from "../../../data.service";

@Component({
    selector: "app-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit, OnDestroy {

    @Input()
    public article: Article;

    @Input()
    public article$: Observable<Article>;
    private routeSubscription: Subscription;

    constructor(private route: ActivatedRoute,
                private dataService: DataService) {
    }

    public trackByFn(index: number, item: Article): string {
        return item.id;
    }

    public ngOnInit(): void {
        this.routeSubscription = this.route.params.subscribe((params: Params) => {
            this.article$ = this.dataService.getArticle(params.module);
        });
    }

    public ngOnDestroy(): void {
        this.routeSubscription?.unsubscribe();
    }
}
