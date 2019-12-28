import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtTrainingSkillComponent } from './dbt-training-skill.component';

describe('DbtTrainingSkillComponent', () => {
  let component: DbtTrainingSkillComponent;
  let fixture: ComponentFixture<DbtTrainingSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtTrainingSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtTrainingSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
