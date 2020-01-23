import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DbtCommunicationIntroComponent} from "./dbt-communication-intro/dbt-communication-intro.component";
import {DbtCommunicationComponent} from "./dbt-communication.component";
import {RouterModule} from "@angular/router";
import {DbtCommunicationImpairComponent} from "./dbt-communication-impair/dbt-communication-impair.component";

@NgModule({
    declarations: [DbtCommunicationIntroComponent, DbtCommunicationComponent, DbtCommunicationImpairComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class DbtCommunicationModule {
}
