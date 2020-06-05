import {Directive,ElementRef,HostListener,HostBinding,Renderer} from '@angular/core';

@Directive({
  selector: '[testDirective]'
})

export class TestDirectiveComponent {

  constructor(private elementRef:ElementRef,private renderer:Renderer){}
  //Using the @HostBinding decorator a directive can link an internal property to an input property on the host element. So if the internal property changed the input property on the host element would also change.
@HostBinding('class.text-uppercase') private noShow:boolean=false;
//Angular makes this easy with the @HostListener decorator.

//This is a function decorator that accepts an event name as an argument. When that event gets fired on the host element it calls the associated function.
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

