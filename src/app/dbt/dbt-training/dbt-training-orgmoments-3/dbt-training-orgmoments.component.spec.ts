import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtTrainingOrgmomentsComponent} from './dbt-training-orgmoments.component';

describe('DbtTrainingOrgmomentsComponent', () => {
  let component: DbtTrainingOrgmomentsComponent;
  let fixture: ComponentFixture<DbtTrainingOrgmomentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtTrainingOrgmomentsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtTrainingOrgmomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
