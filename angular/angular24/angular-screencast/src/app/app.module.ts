import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AnimalsComponent} from './components/animals/animals.component';
import {CatComponent} from './components/cat/cat.component';
import {DogComponent} from './components/dog/dog.component';
import {FoxComponent} from './components/fox/fox.component';
import {RockComponent} from './components/rock/rock.component';
import {LinkDirective} from './directives/link.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ColoryDirective} from './directives/colory.directive';
import {ColoryComponent} from './components/colory/colory.component';
import {Greetings} from "./components/greetings/greetings.component";
import {ParentGreetings} from "./components/parent-greetings/parent-greetings.component";
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgMaterialModule} from "./ng-material/ng-material.module";
import {DelayDirective} from './directives/delay.directive';
import {DelayComponent} from './components/delay/delay.component';
import {ParentBannerComponent} from './components/parent-banner/parent-banner.component';
import {HostDirective} from './directives/host.directive';
import {HelloComponent} from "./components/elements/hello/hello.component";
import { FirstDialogComponent } from './components/dialog/first-dialog/first-dialog.component';
import { SecondDialogComponent } from './components/dialog/second-dialog/second-dialog.component';
import {FormsModule} from "@angular/forms";

// import { ElementsComponent } from './components/elements/elements.component';

@NgModule({
    declarations: [
        AppComponent,
        AnimalsComponent,
        CatComponent,
        DogComponent,
        FoxComponent,
        RockComponent,
        LinkDirective,
        ColoryDirective,
        ColoryComponent,
        ParentGreetings,
        Greetings,
        DelayDirective,
        DelayComponent,
        ParentBannerComponent,
        HostDirective,
        // ElementsComponent,
        HelloComponent,
        FirstDialogComponent,
        SecondDialogComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        MaterialModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgMaterialModule,
        FormsModule,
    ],
    providers: [],
    entryComponents: [
        SecondDialogComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
