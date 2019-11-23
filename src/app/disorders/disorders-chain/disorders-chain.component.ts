import {Component, OnInit} from '@angular/core';
import {DisorderInfo} from '../models/disorder-info.model';
import {KeyMap} from '../../shared/models/map.model';

@Component({
  selector: 'app-disorders-chain',
  templateUrl: './disorders-chain.component.html',
  styleUrls: ['./disorders-chain.component.scss']
})
export class DisordersChainComponent implements OnInit {
  /** @semi-public */
  public disorderKeys: string[];  //  TODO: create object keys pipe
  private readonly personalityDisorders: KeyMap<DisorderInfo> = {
    BPD: {
      id: 'PD1',
      label: 'Пограниченое РЛ',
      info: 'Их штырит =)',
      group: 'PD'
    }
  };
  /** @semi-public */
  public readonly disordersModel: KeyMap<DisorderInfo> = {
    psycho: {
      id: 'PS1',
      label: 'Психотики',
      info: 'Тяжелое расстройство',
      group: 'PSYCHO'
    },
    ...this.personalityDisorders,
    nevr: {
      id: 'NVR1',
      label: 'Невротики',
      info: 'Целостные, но зажатые',
      group: 'NEUROTIC'
    },
    healthy: {
      id: 'healthy',
      label: 'Здоровые люди',
      info: 'Полностью психически здоровые люди',
      group: 'HEALTHY'
    }

  };

  ngOnInit() {
    this.disorderKeys = Object.keys(this.disordersModel);
}

  public trackByFn(index: number, item: DisorderInfo): string {
    return item.id;
  }
}
