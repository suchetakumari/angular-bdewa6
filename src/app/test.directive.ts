import {Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[testDirective]'
})

export class TestDirectiveComponent {

  constructor(private elementRef:ElementRef){}

  @HostListener('mouseover') mouseover(){
   this.elementRef.nativeElement.style.color='green';
  }

  @HostListener('mouseleave') leave(){
   this.elementRef.nativeElement.style.color='red';
  }
}

