import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbtHeaderComponent } from './dbt-header.component';

describe('DbtHeaderComponent', () => {
  let component: DbtHeaderComponent;
  let fixture: ComponentFixture<DbtHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbtHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
