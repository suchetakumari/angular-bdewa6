import {Component, OnInit} from '@angular/core';
import {IEmployee} from './employee';
import { EmployeeService} from './employee.service';
import { UserPreferenceService} from './userpreference.service';

@Component({
   selector: 'employee-list',
   templateUrl: 'employeelist.component.html',
})
export class EmployeeListComponent implements OnInit{
employees: IEmployee[] ;
  selectedEmployeeCountRadiobutton: string = 'All';

constructor(private employeeService : EmployeeService,
private _userPreferenceService: UserPreferenceService) {
}
get colour(){
return this._userPreferenceService.colourPreference;
}
set colour(value: string){
  this._userPreferenceService.colourPreference=value;
}
// getEmployees(): void{
//   this.employees = [
//     {id: 'emp01', name: 'Mark', salary: 3000, gender: 'Male'},
//     {id: 'emp02', name: 'John', salary: 3000, gender: 'Male'},
//     {id: 'emp03', name: 'Mary', salary: 3000, gender: 'Female'},
//     {id: 'emp04', name: 'Paul', salary: 4000, gender: 'Male'},
//     {id: 'emp05', name: 'Namcy', salary: 7000, gender: 'Female'},
//     {id: 'emp06', name: 'Neil', salary: 4500, gender: 'Male'},
//     {id: 'emp07', name: 'Rupa', salary: 6000, gender: 'Female'},

//   ]
// }
ngOnInit(){
  // this.employees = this.employeeService.getEmployees();

}
  getAllEmployees() {
    // return this.employees.length;
  }
  getMaleEmployees() {
    // return this.employees.filter(e => e.gender === 'Male').length;
  }
  getFemaleEmployees() {
    // return this.employees.filter(e => e.gender === 'Female').length;
  }
onEmployeecountradiobuttonchanged(selectedRadiobuttonvalue){
  this.selectedEmployeeCountRadiobutton = selectedRadiobuttonvalue
}
}