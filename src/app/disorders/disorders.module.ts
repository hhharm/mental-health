import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DisordersComponent} from "./disorders.component";
import {DisordersChainModule} from "./disorders-chain/disorders-chain.module";

@NgModule({
    declarations: [
        DisordersComponent
    ],
    exports: [
        DisordersComponent
    ],
    imports: [
        CommonModule,
        DisordersChainModule
    ]
})
export class DisordersModule {
}
