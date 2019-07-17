import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook.service';
import { Ebook } from '../ebook';


@Component({
  selector: 'app-ebook-list',
  templateUrl: './ebook-list.component.html',
  styleUrls: ['./ebook-list.component.scss']
})
export class EbookListComponent implements OnInit {
  searchText = '';
  clientID = 'c672f12df24bae512eae';

  ebooks: Ebook[];

  constructor(
    private ebookservice: EbookService,
  ) { }

  ngOnInit() {
    this.getEbooks();
    // window.open('https://github.com/login/oauth/authorize?client_id=' + this.clientID + '&redirect_uri=https://www.yshhuang.top/home',
    //   '_self');
    // console.log(123);
    // window.open('https://www.baidu.com');

  }

  getEbooks() {
    this.ebookservice.getEbooks().then(ebooks => {
      this.ebooks = ebooks;
    });
  }
}
