import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './global/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { BlogComponent } from './blog/blog/blog.component';
import { StringComponent } from './util/string/string.component';
import { AlbumComponent } from './aitong/album/album.component';
import { PaintingComponent } from './aitong/painting/painting.component';
import { EbookListComponent } from './ebook/ebook-list/ebook-list.component';

const homeRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'string', component: StringComponent },
    { path: 'painting', component: PaintingComponent },
    { path: 'book/list', component: EbookListComponent }
];

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: NavComponent, children: homeRoutes },
    { path: '**', redirectTo: '/', pathMatch: 'full' }, // 这个要放在最后，换句话说，在他之后的路由配置都是无效的
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
