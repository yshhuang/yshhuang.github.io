import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchPipe } from '../global/filter/search';
import { EbookListComponent } from './ebook-list/ebook-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [EbookListComponent, SearchPipe]
})
export class EbookModule { }
