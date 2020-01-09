import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';
import {BASE_URL, moduleUrls} from '../../dbt-routing.module';
import {MenuStateService} from '../../../shared/menu-state.service';

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
  // todo: find out how to get mobile/not mobile
  private mobile = false;
  @HostBinding('class.dbt-training-navigation') class = true;
  public chapter = 1;
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
            this.chapter = 4;
            this.cdr.markForCheck();
          } else {
            this.chapter = undefined;
          }
          if (this.mobile) {
            // todo: store chapter number in menu service
            this.menuService.toggleMenu();
          }
        });
  }

  ngOnDestroy(): void {
    this.routeSubscription && this.routeSubscription.unsubscribe();
  }

  selectChapter($event) {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

}