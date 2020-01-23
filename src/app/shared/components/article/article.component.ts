import {Component, Input, OnInit} from "@angular/core";
import {Article} from "../../models/article.model";
import {DisorderInfo} from "../../../disorders/models/disorder-info.model";

@Component({
    selector: "app-article",
    templateUrl: "./article.component.html",
    styleUrls: ["./article.component.scss"]
})
export class ArticleComponent implements OnInit {

    @Input()
    public article: Article;

    constructor() {
    }

    ngOnInit() {
    }

    public trackByFn(index: number, item: Article): string {
        return item.id;
    }
}
