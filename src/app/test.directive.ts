import {Directive,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[testDirective]'
})

export class TestDirectiveComponent {

  constructor(private elementRef:ElementRef){}
@HostBinding('class.text-uppercase') private noShow:boolean=true;
  @HostListener('mouseover') mouseover(){
   this.elementRef.nativeElement.style.color='green';
   this.noShow=true;
  }

  @HostListener('mouseleave') leave(){
   this.elementRef.nativeElement.style.color='red';
    this.noShow=false;

  }
}

