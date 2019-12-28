import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtTrainingModuleComponent } from './dbt-training-module.component';

describe('DbtTrainingModuleComponent', () => {
  let component: DbtTrainingModuleComponent;
  let fixture: ComponentFixture<DbtTrainingModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtTrainingModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtTrainingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
