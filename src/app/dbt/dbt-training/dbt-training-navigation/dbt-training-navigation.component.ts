import {ChangeDetectionStrategy, Component, HostBinding, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-dbt-training-navigation',
  templateUrl: './dbt-training-navigation.component.html',
  styleUrls: ['./dbt-training-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger(
      'expandCollapseAnimation',
      [
        transition(
          ':enter',
          [
            style({height: 0, opacity: 0}),
            animate('0.5s ease-out',
              style({height: '100%', opacity: 1}))
          ]
        ),
        transition(
          ':leave',
          [
            style({height: '100%', opacity: 1}),
            animate('0.5s ease-in',
              style({height: 0, opacity: 0}))
          ]
        )
      ]
    )
  ]
})
export class DbtTrainingNavigationComponent implements OnInit {

  @HostBinding('class.dbt-training-navigation') class = true;
  public chapter = 1;

  constructor() {
  }

  ngOnInit() {
  }

  selectChapter(num: number) {
    // todo: do this through router query params
    this.chapter = num;
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}
