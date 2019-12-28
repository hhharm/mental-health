import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-disorder-detail',
  templateUrl: './disorder-detail.component.html',
  styleUrls: ['./disorder-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisorderDetailComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
