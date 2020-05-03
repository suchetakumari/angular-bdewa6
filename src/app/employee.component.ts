import {Component, OnInit} from '@angular/core';
import {IEmployee} from './employee';
import { EmployeeService} from './employee.service';
import {ActivatedRoute} from '@angular/router'
@Component({
   selector: 'employee',
   templateUrl: 'employee.component.html',
})

export class EmployeeComponent implements OnInit{
  employee:IEmployee;
  statusMessage: string ='Please wait ..loading'
constructor (private _employeeService: EmployeeService,
private _activatedRoute:ActivatedRoute){}

ngOnInit(){
let empCode=this._activatedRoute.snapshot.params['id'];
this._employeeService.getEmployeeByCode(empCode).subscribe((employeeData)=>this.employee),(error)=>{
  this.statusMessage='Problem with the server'
  console.log(error)}
}

}