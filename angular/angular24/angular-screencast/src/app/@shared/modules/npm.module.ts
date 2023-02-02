import {NgModule} from '@angular/core';
// import {FilePickerModule} from 'ngx-awesome-uploader';
import {TranslateModule} from '@ngx-translate/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {ImageCropperModule} from 'ngx-image-cropper';
// import {FilePickerModule} from 'angular-file-picker';

@NgModule({
  imports: [
    TranslateModule.forRoot(),
    // FilePickerModule,
    NgxChartsModule,
    ImageCropperModule
  ],
  exports: [
    TranslateModule,
    // FilePickerModule,
    NgxChartsModule,
    ImageCropperModule
  ],
})
export class NpmModule {}
