import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbtComponent } from './dbt.component';
import {DbtTrainingModule} from './dbt-training/dbt-training.module';
import {DbtHeaderModule} from './dbt-header/dbt-header.module';



@NgModule({
  declarations: [DbtComponent],
  imports: [
    CommonModule,
    DbtTrainingModule,
    DbtHeaderModule
  ]
})
export class DbtModule { }
