import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchPipe } from '../global/filter/search';
import { EbookListComponent } from './ebook-list/ebook-list.component';
import { EbookService } from './ebook.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [EbookService],
  declarations: [EbookListComponent, SearchPipe]
})
export class EbookModule { }
