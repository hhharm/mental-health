import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {MenuStateService} from '../../shared/menu-state.service';
import {MenuItem} from '../../shared/models/menu-item.model';

const URL_TO_INDEX = {
  'bpd-theory': 1,
  'training-format': 2,
  'training-process': 3,
  'mindfulness': 5,
  'relationships': 6
};

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
export class DbtTrainingNavigationComponent implements OnInit, OnDestroy {
  @HostBinding('class.dbt-training-navigation')
  public class = true;

  private readonly mindfulnessMenuItems: MenuItem = {
    id: '4',
    type: 'ITEM',
    title: 'Навыки психической вовлеченности',
    link: '/dbt/mindfulness/',
    childrenVisible: false,
    children: [
      {
        id: 'mindInto',
        type: 'SUB_ITEM',
        title: 'Введение',
        link: '/dbt/mindfulness/intro',
      },
      {
        id: 'mind1',
        type: 'GROUP_HEADER',
        title: 'Что'
      },
      {
        id: 'mind2',
        type: 'SUB_ITEM',
        link: '/dbt/mindfulness/observe',
        title: 'Наблюдение',
      },
      {
        id: 'mind3',
        type: 'SUB_ITEM',
        link: '/dbt/mindfulness/describe',
        title: 'Описание',
        disabled: true
      },
      {
        id: 'mind4',
        type: 'SUB_ITEM',
        link: '/dbt/mindfulness/participate',
        title: 'Участие',
        disabled: true
      },
      {
        id: 'mind5',
        type: 'GROUP_HEADER',
        title: 'Как',
      },
      {
        id: 'mind6',
        type: 'SUB_ITEM',
        link: '/dbt/mindfulness/noncritical',
        title: 'Без оценки',
        disabled: true
      },
      {
        id: 'mind7',
        type: 'SUB_ITEM',
        link: '/dbt/mindfulness/onemindly',
        title: 'Делая что-то одно',
        disabled: true
      },
      {
        id: 'mind8',
        type: 'SUB_ITEM',
        link: '/dbt/mindfulness/effectively',
        title: 'Эффективно',
        disabled: true
      },
    ]
  };
  private readonly relationshipsMenuItems: MenuItem = {
    id: '5',
    type: 'ITEM',
    link: '/dbt/relationships',
    title: 'Навыки межличной эффективности',
    childrenVisible: false,
    children: [
      {
        id: 'relationshipsInto',
        type: 'SUB_ITEM',
        title: 'Введение',
        link: '/dbt/relationships/intro',
      },
      {
        id: 'relationships1',
        type: 'SUB_ITEM',
        link: '/dbt/relationships/impair-factors',
        title: 'Что снижает эффективность',
        disabled: true
      }
    ]
  };
  public model: MenuItem[] = [
    {
      id: 'h0',
      type: 'GROUP_HEADER',
      title: 'Вводная информация'
    },
    {
      id: '1',
      type: 'ITEM',
      link: '/dbt/bpd-theory',
      title: 'Общая информация о тренинге',
      subtitle: 'Зачем нужен тренинг и для кого предназначен?'
    },
    {
      id: '2',
      type: 'ITEM',
      link: '/dbt/training-format',
      title: 'Возможные форматы проведения тренига',
      subtitle: 'Какие варианты организации тренинга? Как можно разбить материал ' +
        'на модули?'
    },
    {
      id: '3',
      type: 'ITEM',
      link: '/dbt/training-process',
      title: 'Организация сеанса',
      subtitle: 'Из чего состоит сеанс? Что происходит в начале тренинга? Какие есть правила участия в тренинге?'
    },
    {
      id: 'h1',
      type: 'GROUP_HEADER',
      title: 'Модули',
    },
    this.mindfulnessMenuItems,
    this.relationshipsMenuItems,
    {
      id: '6',
      type: 'ITEM',
      title: 'Навыки эмоциональной регуляции',
      disabled: true
    },
    {
      id: '7',
      type: 'ITEM',
      title: 'Навыки для перенесения дистресса',
      disabled: true
    },

  ];
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cdr: ChangeDetectorRef,
              private menuService: MenuStateService) {
  }

  ngOnInit() {
    if (this.route.firstChild.snapshot.url && this.route.firstChild.snapshot.url[0]) {
      this.selectChapter(undefined, undefined, URL_TO_INDEX[this.route.firstChild.snapshot.url[0].path]);
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription && this.routeSubscription.unsubscribe();
  }

  selectChapter($event: MouseEvent, menuItem: MenuItem, index: number): void {
    const updatedModel = [...this.model];
    if (menuItem && menuItem.type !== 'SUB_ITEM') {
      updatedModel.forEach((item, index) => {
        if (item.children) {
          updatedModel[index] = {...updatedModel[index], childrenVisible: false};
        }
      });
    }
    if (menuItem && !menuItem.children && menuItem.link) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      this.menuService.closeOnClickIfMobile();
    } else {
      $event && $event.preventDefault();
      // $event && $event.stopPropagation();
      // $event && $event.stopImmediatePropagation();
      updatedModel[index] = {...updatedModel[index], childrenVisible: !this.model[index].childrenVisible};
    }
    this.model = updatedModel;
  }

  public trackByFn(index: number, item: MenuItem): string {
    return item.id;
  }

}
