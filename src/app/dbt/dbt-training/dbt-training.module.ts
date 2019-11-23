import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbtTrainingComponent } from './dbt-training.component';



@NgModule({
  declarations: [DbtTrainingComponent],
  exports: [
    DbtTrainingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbtTrainingModule { }
