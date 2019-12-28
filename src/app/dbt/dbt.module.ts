import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DbtComponent} from './dbt.component';
import {DbtTrainingModule} from './dbt-training/dbt-training.module';
import {AppHeaderModule} from '../app-header/app-header.module';


@NgModule({
  declarations: [DbtComponent],
  imports: [
    CommonModule,
    DbtTrainingModule,
    AppHeaderModule
  ]
})
export class DbtModule {
}
