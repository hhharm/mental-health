import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtTrainingComponent} from './dbt-training.component';

describe('DbtTrainingComponent', () => {
  let component: DbtTrainingComponent;
  let fixture: ComponentFixture<DbtTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtTrainingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
