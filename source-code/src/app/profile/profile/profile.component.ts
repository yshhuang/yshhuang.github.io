import { Component, OnInit, Input } from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input('data')
  data: string;
  convertedData: any;

  constructor() {
    this.data = 'https://github.com/hyschn/neo4j-guide/blob/master/shi-yong-an-li.md';
  }

  ngOnInit() {
    const md = marked.setOptions({});
    this.convertedData = md.parse(this.data);
  }

}
