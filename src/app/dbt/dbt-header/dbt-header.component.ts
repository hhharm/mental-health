import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dbt-header',
  templateUrl: './dbt-header.component.html',
  styleUrls: ['./dbt-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DbtHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
