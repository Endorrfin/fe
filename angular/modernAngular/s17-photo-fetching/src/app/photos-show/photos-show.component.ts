import { Component, OnInit } from '@angular/core'
import { PhotosService } from '../photos.service'

@Component({
  selector: 'app-photos-show',
  templateUrl: './photos-show.component.html',
  styleUrls: ['./photos-show.component.css']
})
export class PhotosShowComponent implements OnInit {
  photoUrl: string | undefined

  constructor(
    private servicePhotos: PhotosService
  ) {
    this.fetchPhoto()
  }


  onClick() {
    this.fetchPhoto()
  }

  fetchPhoto() {
    this.servicePhotos.getPhoto().subscribe(response => {
      this.photoUrl = response.urls.regular
    })
  }

  ngOnInit(): void {
  }

}
