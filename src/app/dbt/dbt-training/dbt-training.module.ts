import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbtTrainingComponent } from './dbt-training.component';
import { DbtSkillMindfulnessComponent } from './dbt-module-mindfulness/dbt-skill-mindfulness.component';
import { DbtTrainingModuleComponent } from './dbt-training-module/dbt-training-module.component';
import { DbtTrainingSkillComponent } from './dbt-training-skill/dbt-training-skill.component';



@NgModule({
  declarations: [DbtTrainingComponent, DbtSkillMindfulnessComponent, DbtTrainingModuleComponent, DbtTrainingSkillComponent],
  exports: [
    DbtTrainingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbtTrainingModule { }
