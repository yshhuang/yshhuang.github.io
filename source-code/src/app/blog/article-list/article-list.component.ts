import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit, OnChanges {
  @Input()
  topic: string;
  articles = [];

  constructor() { }

  ngOnInit() {
    this.switchTopic();
  }

  ngOnChanges() {
    this.switchTopic();
  }

  switchTopic() {
    switch (this.topic) {
      case 'about this site':
        this.articles = ['起源', '技术', '模块', '规划'];
        break;
      case 'Linux':
        this.articles = ['commend'];
        break;
      default:
        break;
    }
  }
}
