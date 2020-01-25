// определение дочерних маршрутов
import {Routes} from "@angular/router";
import {DbtTrainingTheoryComponent} from "./dbt-training/dbt-training-theory-1/dbt-training-theory.component";
import {DbtTrainingFormatComponent} from "./dbt-training/dbt-training-format-2/dbt-training-format.component";
import {DbtTrainingOrgmomentsComponent} from "./dbt-training/dbt-training-orgmoments-3/dbt-training-orgmoments.component";
import {DbtSkillMindfulnessComponent} from "./dbt-training/dbt-module-mindfulness-4/dbt-skill-mindfulness.component";
import {dbtMindfulnessTrainingRoutes} from "./dbt-training/dbt-module-mindfulness-4/dbt-mindfulness-routing.module";
import {ArticleComponent} from "../shared/components/article/article.component";
import {moduleUrls} from "../data.service";

export const BASE_URL = "/dbt/";
export const dbtTrainingRoutes: Routes = [

    {
        path: "",
        pathMatch: "full",
        redirectTo: moduleUrls.about
    },
    {path: moduleUrls.about, component: DbtTrainingTheoryComponent},
    {path: moduleUrls.format, component: DbtTrainingFormatComponent},
    {path: moduleUrls.process, component: DbtTrainingOrgmomentsComponent},
    {path: moduleUrls.mindfulness, component: DbtSkillMindfulnessComponent, children: dbtMindfulnessTrainingRoutes},
    {path: "relationships/:module", component: ArticleComponent},
    {
        path: "**",
        redirectTo: moduleUrls.about
    }
];
