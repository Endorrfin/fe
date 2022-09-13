import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { CatComponent } from './components/cat/cat.component';
import { DogComponent } from './components/dog/dog.component';
import { FoxComponent } from './components/fox/fox.component';
import { RockComponent } from './components/rock/rock.component';
import { LinkDirective } from './directives/link.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    CatComponent,
    DogComponent,
    FoxComponent,
    RockComponent,
    LinkDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
