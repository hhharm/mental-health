import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AppDbtBottomComponent} from './app-footer.component';

describe('AppDbtBottomComponent', () => {
  let component: AppDbtBottomComponent;
  let fixture: ComponentFixture<AppDbtBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppDbtBottomComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDbtBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
