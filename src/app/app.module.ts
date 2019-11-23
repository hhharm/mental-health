import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DisordersModule} from './disorders/disorders.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisordersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
