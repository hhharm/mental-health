import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DisorderInfo} from '../../models/disorder-info.model';

@Component({
  selector: 'app-chain-node',
  templateUrl: './chain-node.component.html',
  styleUrls: ['./chain-node.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChainNodeComponent implements OnInit {

  @Input()
  info: DisorderInfo;

  constructor() {
  }

  ngOnInit() {
  }

}
