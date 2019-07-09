import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AlbumComponent } from './album/album.component';
import { PaintingComponent } from './painting/painting.component';



@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [AlbumComponent, PaintingComponent]
})
export class AitongModule { }
