import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'angular2-markdown';

import { SidebarComponent } from './sidebar/sidebar.component';

import { AppRoutingModule } from '../app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  declarations: [SidebarComponent, BlogComponent, ArticleComponent, ArticleListComponent]
})
export class BlogModule { }
