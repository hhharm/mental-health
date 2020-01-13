import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';

const MIN_WIDE_SCREEN_WIDTH = 700;

@Injectable({
  providedIn: 'root',
})
export class MenuStateService {
  private readonly menuSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private readonly selectedSubject$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  private selectedChapter: number;
  private menuOpened = true;
  private windowSize;

  public setWindowSize(width) {
    if (!this.windowSize && width < MIN_WIDE_SCREEN_WIDTH) {
      this.menuOpened = false;
      this.menuSubject$.next(this.menuOpened);
    }
    this.windowSize = width;
  }

  public toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
    this.menuSubject$.next(this.menuOpened);
  }

  public getMenuState(): Observable<boolean> {
    return this.menuSubject$.asObservable();
  }

  public getSelectedChapter(): Observable<number> {
    return this.selectedSubject$.asObservable();
  }

  public setChapter(chapter: number): void {
    this.selectedChapter = chapter;
    this.selectedSubject$.next(this.selectedChapter);
  }

  public closeOnClickIfMobile(): void {
    // todo: fix bug with subchapters - they should expand
    if (this.windowSize < MIN_WIDE_SCREEN_WIDTH) {
      this.menuOpened = false;
      this.menuSubject$.next(this.menuOpened);
    }
  }
}
