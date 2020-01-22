import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtCommunicationImpairComponent } from './dbt-communication-impair.component';

describe('DbtCommunicationImpairComponent', () => {
  let component: DbtCommunicationImpairComponent;
  let fixture: ComponentFixture<DbtCommunicationImpairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtCommunicationImpairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtCommunicationImpairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
