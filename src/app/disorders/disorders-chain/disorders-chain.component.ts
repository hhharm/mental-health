import {ChangeDetectionStrategy, Component, HostBinding} from '@angular/core';
import {KeyValue} from '@angular/common';
import {DisorderInfo} from '../models/disorder-info.model';
import {KeyMap} from '../../models/map.model';

@Component({
    selector: 'app-disorders-chain',
    templateUrl: './disorders-chain.component.html',
    styleUrls: ['./disorders-chain.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class DisordersChainComponent {
    @HostBinding('class.disorders-chain') hostClass = true;

    private readonly personalityDisorders: KeyMap<DisorderInfo> = {
        BPD: {
            id: 'PD1',
            label: 'Люди с расстройством личности',
            info: 'Их штырит =)',
            group: 'PD',
        },
    };
    /** @semi-public */
    public readonly disordersModel: KeyMap<DisorderInfo> = {
        psycho: {
            id: 'PS1',
            label: 'Психотики',
            info: 'Тяжелое расстройство',
            group: 'PSYCHO',
        },
        ...this.personalityDisorders,
        nevr: {
            id: 'NVR1',
            label: 'Невротики',
            info: 'Целостные, но зажатые',
            group: 'NEUROTIC',
        },
        healthy: {
            id: 'healthy',
            label: 'Психически здоровые люди',
            info: 'Полностью психически здоровые люди',
            group: 'HEALTHY',
        },
    };

    public unsorted(a: KeyValue<string, DisorderInfo>, b: KeyValue<string, DisorderInfo>): number {
        return 0;
    }

    public trackByFn(index: number, entry: KeyValue<string, DisorderInfo>): string {
        return entry.value.id;
    }
}
