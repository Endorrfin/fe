import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {throwIfAlreadyLoaded} from './guards/module-import-guard';


// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { environment } from '@env/environment';

// export function httpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, `${environment.i18nPrefix}/assets/i18n/`, '.json');
// }


@NgModule({
  // imports: [
  //   CommonModule,
  //   HttpClientModule,
  //   // 3rd party
  //   TranslateModule.forRoot({
  //     defaultLanguage: 'en',
  //     loader: {
  //       provide: TranslateLoader,
  //       useFactory: httpLoaderFactory,
  //       deps: [HttpClient],
  //     },
  //   }),
  // ],
  // exports: [HttpClientModule, TranslateModule],
})

export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        // {
        //   provide: APP_LANG,
        //   useValue: 'en',
        // },
        // {
        //   provide: APP_NAME,
        //   useValue: 'Halo',
        // },
        // {
        //   provide: ErrorHandler,
        //   useClass: GlobalErrorHandler,
        // },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: ApiPrefixInterceptor,
        //   multi: true,
        // },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: TokenInterceptor,
        //   multi: true,
        // },
        // {
        //   provide: HTTP_INTERCEPTORS,
        //   useClass: HttpErrorInterceptor,
        //   multi: true,
        // },
      ],
    };
  }
}
