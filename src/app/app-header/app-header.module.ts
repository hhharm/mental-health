import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppHeaderComponent} from './app-header.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/components/shared.module';

@NgModule({
    declarations: [AppHeaderComponent],
    exports: [AppHeaderComponent],
    imports: [CommonModule, RouterModule, SharedModule],
})
export class AppHeaderModule {}
