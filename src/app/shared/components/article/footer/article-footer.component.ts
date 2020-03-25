import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleFooterComponent implements OnInit {

  @Input()
  next: string;
  @Input()
  previous: string;

  constructor() { }

  ngOnInit(): void {
  }

}
