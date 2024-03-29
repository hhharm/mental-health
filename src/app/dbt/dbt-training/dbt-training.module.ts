import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DbtTrainingComponent} from "./dbt-training.component";
import {DbtTrainingTheoryComponent} from "./dbt-training-theory-1/dbt-training-theory.component";
import {DbtTrainingFormatComponent} from "./dbt-training-format-2/dbt-training-format.component";
import {DbtTrainingOrgmomentsComponent} from "./dbt-training-orgmoments-3/dbt-training-orgmoments.component";
import {RouterModule} from "@angular/router";
import {DbtTrainingNavigationComponent} from "../dbt-training-navigation/dbt-training-navigation.component";
import {DbtSkillMindfulnessModule} from "./dbt-module-mindfulness-4/dbt-skill-mindfullness.module";
import {SharedModule} from "../../shared/components/shared.module";
import { MaterialModule } from "src/app/shared/material/material.module";

@NgModule({
    declarations: [DbtTrainingComponent,
        DbtTrainingTheoryComponent,
        DbtTrainingFormatComponent,
        DbtTrainingOrgmomentsComponent,
        DbtTrainingNavigationComponent,
    ],
    exports: [
        DbtTrainingComponent
    ],
    imports: [
        DbtSkillMindfulnessModule,
        CommonModule,
        RouterModule,
        MaterialModule,
        SharedModule
    ]
})
export class DbtTrainingModule {
}
