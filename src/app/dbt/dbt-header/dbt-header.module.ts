import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbtHeaderComponent } from './dbt-header.component';



@NgModule({
  declarations: [DbtHeaderComponent],
  exports: [
    DbtHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbtHeaderModule { }
