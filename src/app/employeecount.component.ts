import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
   selector: 'employee-count',
   templateUrl: 'employeecount.component.html'
})
export class EmployeeCountComponent {
  selectedRadiobuttonvalue: string = 'All';
  @Output() 
  countRadioButtonSelectionchanged =new EventEmitter();
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;
 onRadiobuttonselectionchanged(){
   this.countRadioButtonSelectionchanged.emit(this.selectedRadiobuttonvalue);
   console.log(this.selectedRadiobuttonvalue)
 }

}