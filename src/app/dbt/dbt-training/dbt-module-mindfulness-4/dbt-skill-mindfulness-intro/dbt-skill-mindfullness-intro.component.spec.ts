import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtSkillMindfullnessIntroComponent} from './dbt-skill-mindfullness-intro.component';

describe('DbtSkillMidfulnessDescribeComponent', () => {
  let component: DbtSkillMindfullnessIntroComponent;
  let fixture: ComponentFixture<DbtSkillMindfullnessIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtSkillMindfullnessIntroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSkillMindfullnessIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
