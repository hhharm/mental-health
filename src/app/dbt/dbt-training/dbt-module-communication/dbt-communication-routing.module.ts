// определение дочерних маршрутов
import {Routes} from "@angular/router";
import {DbtCommunicationIntroComponent} from "./dbt-communication-intro/dbt-communication-intro.component";
import {DbtCommunicationImpairComponent} from "./dbt-communication-impair/dbt-communication-impair.component";

export const dbtCommunicationTrainingRoutes: Routes = [
    {path: "intro", component: DbtCommunicationIntroComponent},
    {path: "impair-factors", component: DbtCommunicationImpairComponent},
    {
        path: "**",
        redirectTo: "intro"
    }
];
