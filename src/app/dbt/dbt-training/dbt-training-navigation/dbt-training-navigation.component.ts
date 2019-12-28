import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-dbt-training-navigation',
  templateUrl: './dbt-training-navigation.component.html',
  styleUrls: ['./dbt-training-navigation.component.scss']
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
