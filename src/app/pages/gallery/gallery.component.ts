import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  photos: string[] = [];

  constructor(
    private fotoService: PhotosService,
  ){
    this.photos = this.fotoService.photos;
  }

ngOnInit(): void {

}

 async takePhoto(){
  await this.fotoService.foto();
 }

}
