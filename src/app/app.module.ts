import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DisordersModule} from './disorders/disorders.module';
import {DbtTrainingModule} from './dbt/dbt-training/dbt-training.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisordersModule,
    DbtTrainingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
