// определение дочерних маршрутов
import {Routes} from '@angular/router';
import {DbtTrainingTheoryComponent} from './dbt-training/dbt-training-theory-1/dbt-training-theory.component';
import {DbtTrainingFormatComponent} from './dbt-training/dbt-training-format-2/dbt-training-format.component';
import {DbtTrainingOrgmomentsComponent} from './dbt-training/dbt-training-orgmoments-3/dbt-training-orgmoments.component';
import {DbtSkillMindfulnessComponent} from './dbt-training/dbt-module-mindfulness-4/dbt-skill-mindfulness.component';
import {dbtMindfulnessTrainingRoutes} from './dbt-training/dbt-module-mindfulness-4/dbt-mindfulness-routing.module';
import {DbtCommunicationIntroComponent} from './dbt-training/dbt-module-communication/dbt-communication-intro/dbt-communication-intro.component';

export interface Urls {
  mindfulness: string;
  talk: string;
}

export const moduleUrls: Urls = {
  mindfulness: 'mindfulness',
  talk: 'relationships'
};
export const BASE_URL = '/dbt/';
export const dbtTrainingRoutes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'bpd-theory'
  },
  {path: 'bpd-theory', component: DbtTrainingTheoryComponent},
  {path: 'training-format', component: DbtTrainingFormatComponent},
  {path: 'training-process', component: DbtTrainingOrgmomentsComponent},
  {path: moduleUrls.mindfulness, component: DbtSkillMindfulnessComponent, children: dbtMindfulnessTrainingRoutes},
  {path: moduleUrls.talk, component: DbtCommunicationIntroComponent},
  {
    path: '**',
    redirectTo: 'bpd-theory'
  }
];
