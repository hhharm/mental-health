import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtSkillMindfullnessEffectivlyComponent} from './dbt-skill-mindfullness-effectivly.component';

describe('DbtSkillMidfulnessDescribeComponent', () => {
  let component: DbtSkillMindfullnessEffectivlyComponent;
  let fixture: ComponentFixture<DbtSkillMindfullnessEffectivlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtSkillMindfullnessEffectivlyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSkillMindfullnessEffectivlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
