import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DisordersModule} from './disorders/disorders.module';
import {RouterModule, Routes} from '@angular/router';
import {DisordersComponent} from './disorders/disorders.component';
import {DbtComponent} from './dbt/dbt.component';
import {DbtModule} from './dbt/dbt.module';

const appRoutes: Routes = [
  {path: 'disorders', component: DisordersComponent},
  {path: 'dbt', component: DbtComponent},
  {
    path: '',
    redirectTo: '/dbt',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dbt'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisordersModule,
    DbtModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
