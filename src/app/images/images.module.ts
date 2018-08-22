import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/modules/shared.module';

import { ImagesRoutingModule } from './images-routing.module';
import { ImagesComponent } from './images.component';
import { ImagesListComponent } from './images-list/images-list.component';
import { ImageItemComponent } from './image-item/image-item.component';
import { ImageBaseItemComponent } from './image-base-item/image-base-item.component';

@NgModule({
  imports: [
    ImagesRoutingModule,
    SharedModule.forRoot()
  ],
  declarations: [
    ImagesComponent,
    ImagesListComponent,
    ImageItemComponent,
    ImageBaseItemComponent
  ],
  providers: []
})
export class ImagesModule { }
