import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {MenuStateService} from '../../shared/menu-state.service';
import {Observable} from 'rxjs';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dbt-training',
  templateUrl: './dbt-training.component.html',
  styleUrls: ['./dbt-training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'widthInOutAnimation',
      [
        transition(
          ':enter',
          [
            style({width: 0, opacity: 0}),
            animate('0.3s ease-out',
              style({width: '100%', opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({width: '100%', opacity: 1}),
            animate('0.3s ease-in',
              style({width: 0, opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class DbtTrainingComponent implements OnInit {

  @HostBinding('class.dbt-training') class = true;

  @ViewChild('target', {static: false}) target: ElementRef;
  @ViewChild('navigation', {static: false}) navigationEl: ElementRef;

  public navVisible: Observable<boolean>;

  constructor(private menuService: MenuStateService) {
  }

  ngOnInit() {
    this.navVisible = this.menuService.getMenuState();
  }

}
