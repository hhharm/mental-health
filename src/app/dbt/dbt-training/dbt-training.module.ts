import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DbtTrainingComponent} from './dbt-training.component';
import {DbtSkillMindfulnessComponent} from './dbt-module-mindfulness-4/dbt-skill-mindfulness.component';
import {DbtTrainingTheoryComponent} from './dbt-training-theory-1/dbt-training-theory.component';
import {DbtTrainingFormatComponent} from './dbt-training-format-2/dbt-training-format.component';
import {DbtTrainingOrgmomentsComponent} from './dbt-training-orgmoments-3/dbt-training-orgmoments.component';
import {RouterModule} from '@angular/router';
import {DbtTrainingNavigationComponent} from './dbt-training-navigation/dbt-training-navigation.component';


@NgModule({
  declarations: [DbtTrainingComponent,
    DbtSkillMindfulnessComponent,
    DbtTrainingTheoryComponent,
    DbtTrainingFormatComponent,
    DbtTrainingOrgmomentsComponent,
    DbtTrainingNavigationComponent],
  exports: [
    DbtTrainingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DbtTrainingModule {
}
