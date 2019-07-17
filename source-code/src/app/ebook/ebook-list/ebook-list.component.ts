import { Component, OnInit } from '@angular/core';
import { EbookService } from '../ebook.service';

@Component({
  selector: 'app-ebook-list',
  templateUrl: './ebook-list.component.html',
  styleUrls: ['./ebook-list.component.scss']
})
export class EbookListComponent implements OnInit {
  searchText = '';

  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ];

  constructor(
    private ebookservice: EbookService
  ) { }

  ngOnInit() {
    this.getCode();
  }

  getCode() {
    this.ebookservice.getCode().then(code => {
      console.log(code);
    });
  }
}
