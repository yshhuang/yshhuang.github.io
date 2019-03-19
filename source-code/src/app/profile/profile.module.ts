import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'angular2-markdown';

import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
