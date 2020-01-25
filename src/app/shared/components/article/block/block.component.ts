import {Component, Input, OnInit} from "@angular/core";
import {ArticleBlock} from "../../../models/article.model";

@Component({
    selector: "app-block",
    templateUrl: "./block.component.html",
    styleUrls: ["./block.component.scss"]
})
export class BlockComponent implements OnInit {

    @Input()
    block: ArticleBlock;

    constructor() {
    }

    ngOnInit() {
    }

    public trackByFn(index: number, item: ArticleBlock): string {
        return item.id;
    }
}
