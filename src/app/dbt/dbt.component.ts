import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dbt',
  templateUrl: './dbt.component.html',
  styleUrls: ['./dbt.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DbtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
