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
import {FirstDialogComponent} from './components/dialog/first-dialog/first-dialog.component';
import {SecondDialogComponent} from './components/dialog/second-dialog/second-dialog.component';
import {FormsModule} from "@angular/forms";
import {InteractionComponent} from "./components/interaction/interaction.component";
import {InputComponent} from './components/interaction/input/input.component';
import {StudentComponent} from './components/interaction/student/student.component';
import {StudentService} from "./services/student.service";
import {ParentDialogComponent} from './components/parent-dialog/parent-dialog.component';
import {MyDialogComponent} from './components/dialog/my-dialog/my-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { BindingComponent } from './components/binding/binding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentComponent } from './components/interaction-of-components/parent/parent.component';
import { ChildComponent } from './components/interaction-of-components/child/child.component';
import { ParentUnitComponent } from './components/advanced-communication/parent-unit/parent-unit.component';
import { ChildUnitComponent } from './components/advanced-communication/child-unit/child-unit.component';
import { MenuComponent } from './components/host/menu/menu.component';
import { HostComponent } from './components/host/host/host.component';

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
        InteractionComponent,
        InputComponent,
        StudentComponent,
        ParentDialogComponent,
        MyDialogComponent,
        BindingComponent,
        DirectivesComponent,
        ParentComponent,
        ChildComponent,
        ParentUnitComponent,
        ChildUnitComponent,
        MenuComponent,
        HostComponent,
    ],
    imports: [
        BrowserModule,
        NgbModule,
        MaterialModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgMaterialModule,
        FormsModule,
        MatDialogModule,
    ],
    providers: [
        StudentService,
    ],
    entryComponents: [
        SecondDialogComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
