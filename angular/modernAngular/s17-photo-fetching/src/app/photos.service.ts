import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(
    public http: HttpClient
  ) {
  }

  getPhoto() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          Authorization:
            'Client-ID 4WWQmC12JwJWo972Yjdglxl1zWaxxBQ-dxXzQf4crRs'
        }
      })
  }
}
