import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MenuStateService} from '../shared/menu-state.service';

@Component({
  selector: 'app-dbt-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {
  constructor(private menuService: MenuStateService) {
  }

  public _hamburgerClick(): void {
    this.menuService.toggleMenu();
  }

  ngOnInit() {
  }

}
