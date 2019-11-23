import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-disorders',
  templateUrl: './disorders.component.html',
  styleUrls: ['./disorders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisordersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
