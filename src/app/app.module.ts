import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {DisordersModule} from "./disorders/disorders.module";
import {RouterModule, Routes} from "@angular/router";
import {DisordersComponent} from "./disorders/disorders.component";
import {DbtComponent} from "./dbt/dbt.component";
import {DbtModule} from "./dbt/dbt.module";
import {AppHeaderModule} from "./app-header/app-header.module";
import {dbtTrainingRoutes} from "./dbt/dbt-routing.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppFooterComponent} from "./app-footer/app-footer.component";

const appRoutes: Routes = [
    {path: "disorders", component: DisordersComponent},
    {
        path: "dbt", component: DbtComponent,
        children: dbtTrainingRoutes
    },
    {
        path: "",
        redirectTo: "/dbt/bpd-theory",
        pathMatch: "full"
    },
    {
        path: "**",
        redirectTo: "/dbt/bpd-theory"
    }
];

@NgModule({
    declarations: [
        AppComponent,
        AppFooterComponent,
    ],
    imports: [
        BrowserModule,
        DisordersModule,
        DbtModule,
        RouterModule.forRoot(appRoutes),
        AppHeaderModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
