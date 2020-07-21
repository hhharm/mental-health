import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArticleFooterComponent } from './article-footer.component';

describe('ArticleFooterComponent', () => {
  let component: ArticleFooterComponent;
  let fixture: ComponentFixture<ArticleFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
