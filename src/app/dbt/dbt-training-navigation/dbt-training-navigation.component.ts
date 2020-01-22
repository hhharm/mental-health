import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {BASE_URL, moduleUrls} from '../dbt-routing.module';
import {MenuStateService} from '../../shared/menu-state.service';
import {MenuItem} from '../../shared/models/menu-item.model';

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

  public chapter$: Observable<number> = this.menuService.getSelectedChapter();
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
    {
      id: '4',
      type: 'ITEM',
      title: 'Навыки психической вовлеченности',
      link: '/dbt/mindfulness/',
      //todo: add expand\collapse logic
      childrenVisible: true,
      children: [
        {
          id: 'mindInto',
          type: 'ITEM',
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
          type: 'ITEM',
          link: '/dbt/mindfulness/observe',
          title: 'Наблюдение',
        },
        {
          id: 'mind3',
          type: 'ITEM',
          link: '/dbt/mindfulness/describe',
          title: 'Описание',
          disabled: true
        },
        {
          id: 'mind4',
          type: 'ITEM',
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
          type: 'ITEM',
          link: '/dbt/mindfulness/noncritical',
          title: 'Без оценки',
          disabled: true
        },
        {
          id: 'mind7',
          type: 'ITEM',
          link: '/dbt/mindfulness/onemindly',
          title: 'Делая что-то одно',
          disabled: true
        },
        {
          id: 'mind8',
          type: 'ITEM',
          link: '/dbt/mindfulness/effectively',
          title: 'Эффективно',
          disabled: true
        },
      ]
    },
    {
      id: '5',
      type: 'ITEM',
      link: '/dbt/relationships',
      title: 'Навыки межличной эффективности',
    },
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
    // TODO: fix for first page open
    this.routeSubscription =
      this.router.events
        .pipe(filter(params => params instanceof NavigationEnd))
        .subscribe((params: NavigationEnd) => {
          // todo: think how to do this normal way. Perhaps somehow use inner router outlet to get only "chopped" urls
          if (params.url.includes(BASE_URL + moduleUrls.mindfulness)) {
            this.menuService.setChapter(4);
            this.cdr.markForCheck();
          } else {
            this.menuService.setChapter(undefined);
          }
        });
  }

  ngOnDestroy(): void {
    this.routeSubscription && this.routeSubscription.unsubscribe();
  }

  selectChapter($event: MouseEvent, menuItem: MenuItem, index: number) {
    if (!menuItem.children && menuItem.link) {
      window.scrollTo({top: 0, behavior: 'smooth'});
      this.menuService.closeOnClickIfMobile();
    } else {
      $event.preventDefault();
      const updatedModel = [...this.model];
      updatedModel[index] = {...updatedModel[index], childrenVisible: !updatedModel[index].childrenVisible};
      this.model = updatedModel;
    }
  }

  public trackByFn(index: number, item: MenuItem): string {
    return item.id;
  }

}
