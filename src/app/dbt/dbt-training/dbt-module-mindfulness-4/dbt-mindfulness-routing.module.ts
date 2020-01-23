// определение дочерних маршрутов
import {Routes} from "@angular/router";
import {DbtSkillMindfullnessObserveComponent} from "./dbt-skill-mindfullness-observe/dbt-skill-mindfullness-observe.component";
import {DbtSkillMindfullnessDescribeComponent} from "./dbt-skill-mindfullness-describe/dbt-skill-mindfullness-describe.component";
import {DbtSkillMindfullnessParticipateComponent} from "./dbt-skill-mindfullness-participate/dbt-skill-mindfullness-participate.component";
import {DbtSkillMindfullnessNonjudgmentalyComponent} from "./dbt-skill-mindfullness-nonjudgmentaly/dbt-skill-mindfullness-nonjudgmentaly.component";
import {DbtSkillMindfullnessOnemindlyComponent} from "./dbt-skill-mindfulness-onemindly/dbt-skill-mindfullness-onemindly.component";
import {DbtSkillMindfullnessEffectivlyComponent} from "./dbt-skill-mindfulness-effectivly/dbt-skill-mindfullness-effectivly.component";
import {DbtSkillMindfullnessIntroComponent} from "./dbt-skill-mindfulness-intro/dbt-skill-mindfullness-intro.component";

export const dbtMindfulnessTrainingRoutes: Routes = [
    {path: "intro", component: DbtSkillMindfullnessIntroComponent},
    {path: "observe", component: DbtSkillMindfullnessObserveComponent},
    {path: "describe", component: DbtSkillMindfullnessDescribeComponent},
    {path: "participate", component: DbtSkillMindfullnessParticipateComponent},
    {path: "noncritical", component: DbtSkillMindfullnessNonjudgmentalyComponent},
    {path: "onemindly", component: DbtSkillMindfullnessOnemindlyComponent},
    {path: "effectively", component: DbtSkillMindfullnessEffectivlyComponent},
    {
        path: "**",
        redirectTo: "intro"
    }
];
