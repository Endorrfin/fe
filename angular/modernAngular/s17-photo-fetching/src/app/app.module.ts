import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { PhotosShowComponent } from './photos-show/photos-show.component'
import { PhotosService } from './photos.service'

@NgModule({
  declarations: [
    AppComponent,
    PhotosShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
