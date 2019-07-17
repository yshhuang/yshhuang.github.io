import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ebook } from '../ebook';


@Component({
  selector: 'app-ebook-list',
  templateUrl: './ebook-list.component.html',
  styleUrls: ['./ebook-list.component.scss']
})
export class EbookListComponent implements OnInit {
  searchText = '';
  clientID = 'c672f12df24bae512eae';

  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];

  ebooks: Ebook[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ebookservice: EbookService,
  ) { }

  ngOnInit() {
    this.getEbooks();
    // window.open('https://github.com/login/oauth/authorize?client_id=' + this.clientID + '&redirect_uri=https://www.yshhuang.top/home',
    //   '_self');
    // console.log(123);
    // window.open('https://www.baidu.com');
    // this.router.navigateByUrl('https://github.com/login/oauth/authorize?client_id=' + this.clientID);
    // this.getCode();
  }

  getCode() {
    this.ebookservice.getCode().then(code => {
      console.log(code);
    });
  }

  getEbooks() {
    this.ebookservice.getEbooks().then(ebooks => {
      this.ebooks = ebooks;
      console.log(this.ebooks);
    });
    console.log(this.ebooks);
  }
}
