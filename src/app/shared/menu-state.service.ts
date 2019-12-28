import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  private readonly menuSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private menuOpened = true;

  public toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.menuSubject$.next(this.menuOpened);
  }

  public getMenuState(): Observable<boolean> {
    return this.menuSubject$.asObservable();
  }
}
