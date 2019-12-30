import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DbtSkillMindfullnessObserveComponent} from './dbt-skill-mindfullness-observe.component';

describe('DbtSkillMidfulnessObserveComponent', () => {
  let component: DbtSkillMindfullnessObserveComponent;
  let fixture: ComponentFixture<DbtSkillMindfullnessObserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DbtSkillMindfullnessObserveComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtSkillMindfullnessObserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
