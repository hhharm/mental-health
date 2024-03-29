import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooterComponent {
    year = new Date().getFullYear();
}
