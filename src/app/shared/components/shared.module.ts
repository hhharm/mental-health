import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BlockComponent} from "./article/block/block.component";
import {ArticleComponent} from "./article/article.component";

@NgModule({
    declarations: [
        BlockComponent,
        ArticleComponent],
    imports: [
        CommonModule,
    ],
    exports: [
        ArticleComponent
    ]
})
export class SharedModule {
}

