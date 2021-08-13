import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserTableComponent } from './user-table/user-table.component';
import { HttpClientModule } from '@angular/common/http'
import { HttpClientInMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api'
import { FormsModule } from '@angular/forms'

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // please, remove this when real api will be ready
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDbService, {dataEncapsulation: false} // default all data wrapper object data, I change default parameters I will receive without data wrapper
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
