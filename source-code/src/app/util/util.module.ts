import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UtilComponent } from './util/util.component';
import { StringComponent } from './string/string.component';
import { SortComponent } from './sort/sort.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [UtilComponent, StringComponent, SortComponent]
})
export class UtilModule { }
