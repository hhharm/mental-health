import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DbtSkillMindfulnessComponent} from './dbt-skill-mindfulness.component';
import {DbtSkillMindfullnessObserveComponent} from './dbt-skill-mindfullness-observe/dbt-skill-mindfullness-observe.component';
import {DbtSkillMindfullnessDescribeComponent} from './dbt-skill-mindfullness-describe/dbt-skill-mindfullness-describe.component';
import {DbtSkillMindfullnessParticipateComponent} from './dbt-skill-mindfullness-participate/dbt-skill-mindfullness-participate.component';
import {DbtSkillMindfullnessNonjudgmentalyComponent} from './dbt-skill-mindfullness-nonjudgmentaly/dbt-skill-mindfullness-nonjudgmentaly.component';
import {DbtSkillMindfullnessOnemindlyComponent} from './dbt-skill-mindfulness-onemindly/dbt-skill-mindfullness-onemindly.component';
import {DbtSkillMindfullnessEffectivlyComponent} from './dbt-skill-mindfulness-effectivly/dbt-skill-mindfullness-effectivly.component';
import {RouterModule} from '@angular/router';
import {DbtSkillMindfullnessIntroComponent} from './dbt-skill-mindfulness-intro/dbt-skill-mindfullness-intro.component';


@NgModule({
  declarations: [DbtSkillMindfulnessComponent, DbtSkillMindfullnessObserveComponent,
    DbtSkillMindfullnessDescribeComponent, DbtSkillMindfullnessParticipateComponent,
    DbtSkillMindfullnessNonjudgmentalyComponent, DbtSkillMindfullnessOnemindlyComponent,
    DbtSkillMindfullnessEffectivlyComponent, DbtSkillMindfullnessIntroComponent],
  exports: [DbtSkillMindfulnessComponent, DbtSkillMindfullnessObserveComponent,
    DbtSkillMindfullnessDescribeComponent, DbtSkillMindfullnessParticipateComponent,
    DbtSkillMindfullnessNonjudgmentalyComponent, DbtSkillMindfullnessOnemindlyComponent,
    DbtSkillMindfullnessEffectivlyComponent, DbtSkillMindfullnessIntroComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DbtSkillMindfulnessModule {
}
