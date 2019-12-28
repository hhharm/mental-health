import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtTrainingFormatComponent} from './dbt-training-format.component';

describe('DbtTrainingFormatComponent', () => {
  let component: DbtTrainingFormatComponent;
  let fixture: ComponentFixture<DbtTrainingFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtTrainingFormatComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtTrainingFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
