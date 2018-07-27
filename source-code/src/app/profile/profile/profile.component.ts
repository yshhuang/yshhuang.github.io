import { Component, OnInit, Input } from '@angular/core';
import marked from 'marked';

import { AppService } from '../../app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: string;
  convertedData: any;
  blog: string;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.getBlog();
  }

  getBlog(): void {
    const that = this;
    this.appService.getFileContext('assets/blog/dashboard.md').then(data => {
      this.blog = data._body;
      this.data = '### your markdown code';
      console.log(this.blog);
      const md = marked.setOptions({});
      this.convertedData = md.parse(this.blog);
    });
  }
}
