import {Directive,ElementRef,HostListener,HostBinding,Renderer} from '@angular/core';

@Directive({
  selector: '[testDirective]'
})

export class TestDirectiveComponent {

  constructor(private elementRef:ElementRef,private renderer:Renderer){}
@HostBinding('class.text-uppercase') private noShow:boolean=false;
  @HostListener('mouseover') mouseover(){
    //The ElementRef gives the directive direct access to the DOM element upon which it’s attached.
  //  this.elementRef.nativeElement.style.color='green';
  //Angular team has provided a platform independent way of setting properties on our elements via something called a Renderer.
   this.renderer.setElementStyle(this.elementRef.nativeElement,'color','green')
   this.noShow=true;
  }

  @HostListener('mouseleave') leave(){
  //  this.elementRef.nativeElement.style.color='red';
  this.renderer.setElementStyle(this.elementRef.nativeElement,'color','red')
    this.noShow=false;

  }
}

