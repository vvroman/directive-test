import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor() { }

  @HostListener('mouseover')
  onHover() {
    console.log('mouseover');
  }
}
