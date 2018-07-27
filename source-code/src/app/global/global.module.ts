import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

import { AppRoutingModule } from '../app-routing.module';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [NavComponent, BlogComponent]
})
export class GlobalModule { }
