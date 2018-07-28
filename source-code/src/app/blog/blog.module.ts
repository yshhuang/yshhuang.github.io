import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from '../app-routing.module';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [SidebarComponent, DashboardComponent, BlogComponent, ArticleComponent]
})
export class BlogModule { }
