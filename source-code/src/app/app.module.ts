import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'prismjs/themes/prism-dark.css';

import { AppRoutingModule } from './app-routing.module';
import { GlobalModule } from './global/global.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { BlogModule } from './blog/blog.module';
import { UtilModule } from './util/util.module';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlobalModule,
    HomeModule,
    ProfileModule,
    BlogModule,
    UtilModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
