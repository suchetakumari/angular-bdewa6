import {Injectable} from '@angular/core';
import {IEmployee} from './employee';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw'


@Injectable()
export class EmployeeService {
  constructor(private _http:Http){}
// getEmployees(): IEmployee[]{
//   return [{id: 'emp01', name: 'Mark', salary: 3000, gender: 'Male'},
//     {id: 'emp02', name: 'John', salary: 3000, gender: 'Male'},
//     {id: 'emp03', name: 'Mary', salary: 3000, gender: 'Female'},
//     {id: 'emp04', name: 'Paul', salary: 4000, gender: 'Male'},
//     {id: 'emp05', name: 'Namcy', salary: 7000, gender: 'Female'},
//     {id: 'emp06', name: 'Neil', salary: 4500, gender: 'Male'},
//     {id: 'emp07', name: 'Rupa', salary: 6000, gender: 'Female'},
//     {id: 'emp08', name: 'Rupa', salary: 6000, gender: 'Female'},]
// }
// getEmployees(): Observable <IEmployee[]>{
// this._http.get('http://localhost:31324/api/employees').map((response:Response) => response.json()).catch(this.handleerror())
// }
// getEmployeeByCode(empcode): Observable <IEmployee[]>{
// this._http.get('http://localhost:31324/api/employees' + empcode).map((response:Response) => response.json()).catch(this.handleerror())
// }
// handleerror(){
//   return Observable.throw();
// }
}