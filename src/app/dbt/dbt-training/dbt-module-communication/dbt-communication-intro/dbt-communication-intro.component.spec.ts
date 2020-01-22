import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtCommunicationIntroComponent} from './dbt-communication-intro.component';

describe('DbtCommunicationIntroComponent', () => {
  let component: DbtCommunicationIntroComponent;
  let fixture: ComponentFixture<DbtCommunicationIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtCommunicationIntroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtCommunicationIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
