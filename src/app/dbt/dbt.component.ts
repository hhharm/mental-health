import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MenuStateService} from '../shared/menu-state.service';

@Component({
    selector: 'app-dbt',
    templateUrl: './dbt.component.html',
    styleUrls: ['./dbt.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DbtComponent {
    constructor(public menuService: MenuStateService) {}
}
