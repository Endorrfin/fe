import {NgModule, PipeTransform, Type} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ReverseStrPipe} from './reverse.pipe';

export const SHARED_PIPES: Array<Type<PipeTransform>> = [ReverseStrPipe];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...SHARED_PIPES],
  exports: [...SHARED_PIPES],
})
export class SharedPipesModule {}
