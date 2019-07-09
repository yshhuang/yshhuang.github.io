import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
