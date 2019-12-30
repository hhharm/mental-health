import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtSkillMindfullnessNonjudgmentalyComponent} from './dbt-skill-mindfullness-nonjudgmentaly.component';

describe('DbtSkillMidfulnessDescribeComponent', () => {
  let component: DbtSkillMindfullnessNonjudgmentalyComponent;
  let fixture: ComponentFixture<DbtSkillMindfullnessNonjudgmentalyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtSkillMindfullnessNonjudgmentalyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSkillMindfullnessNonjudgmentalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
