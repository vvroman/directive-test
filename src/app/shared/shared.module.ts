import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDirDirective } from './my-dir.directive';

@NgModule({
  declarations: [MyDirDirective],
  imports: [
    CommonModule
  ],
  exports: [MyDirDirective]
})
export class SharedModule { }
