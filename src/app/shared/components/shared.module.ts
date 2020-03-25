import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BlockComponent} from "./article/block/block.component";
import {ArticleComponent} from "./article/article.component";
import { ArticleFooterComponent } from './article/footer/article-footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        BlockComponent,
        ArticleComponent,
        ArticleFooterComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
  ],
    exports: [
        ArticleComponent
    ]
})
export class SharedModule {
}

