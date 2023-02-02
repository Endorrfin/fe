import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../modules/material.module';
import {NpmModule} from './modules/npm.module';
import {SharedDirectivesModule} from './directives/directives.module';
import {SharedComponentsModule} from './components/components.module';
import {SharedPipesModule} from './pipes/pipes.module';
import {ValidationMessageModule} from './modules/validation-message/validation-message.module';

const COMMON_MODULES = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [
    ...COMMON_MODULES,
    MaterialModule,
    NpmModule,

    SharedComponentsModule,
    SharedDirectivesModule,
    SharedPipesModule,

    ValidationMessageModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    ...COMMON_MODULES,
    MaterialModule,
    NpmModule,

    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,

    ValidationMessageModule,
  ],
})
export class SharedModule {}
