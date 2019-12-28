import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {MenuStateService} from '../../shared/menu-state.service';
import {Observable} from 'rxjs';
// import {select} from '@angular-redux/store';
// import {Observable} from 'rxjs';

@Component({
  selector: 'app-dbt-training',
  templateUrl: './dbt-training.component.html',
  styleUrls: ['./dbt-training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DbtTrainingComponent implements OnInit {

  @HostBinding('class.dbt-training') class = true;

  @ViewChild('target', {static: false}) target: ElementRef;
  @ViewChild('navigation', {static: false}) navigationEl: ElementRef;

  public navVisible: Observable<boolean>;

  public chapter = 1;

  constructor(private menuService: MenuStateService) {
  }

  ngOnInit() {
    this.navVisible = this.menuService.getMenuState();
  }

  selectChapter(num: number) {
    // todo: do this through router query params
    this.chapter = num;
    this.target && this.target.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

}
