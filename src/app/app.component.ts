import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { EmployeeListComponent } from './employeelist.component';
import {ModalDirective} from 'angular-bootstrap-md';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'my-app',
  // template: ` <employee-list></employee-list><br>

  // Your text <input type="text" [(ngModel)]="userText">
  // <simple [simpleInput]="userText"></simple>`,
//   template: `
//   <div testDirective>Hi There!!</div>
//          <div style="padding:5px"> </div>
//             <ul class="nav nav-tabs">
//                 <li><a routerLink="home">Home</a></li>
//                 <li><a routerLink="employees">Employees</a></li>
//             </ul> 
//             <input [(ngModel)]="searchText" placeholder="search text goes here">
// <ul>
//   <li *ngFor="let c of characters | filter : searchText">
//     {{c}}
//   </li>
// </ul>

// <employee-list >
// // content child code
// <h1 #header1>Welcome</h1>
// </employee-list>
// <h2 *myCustomIf="condition">Hello {{name}}</h2>
//              <button (click)="condition = !condition">Click</button>

//              <h2>Counter:{{counter}}</h2>
// <button (click)="clickCounter()">Click. Me</button>

//             <router-outlet></router-outlet>   
//   `,
  templateUrl:  './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export interface Schedule {
  id?: string;
  time: string;
  subject: string;
  location?: string;
  description?: string;
}

export class AppComponent implements  AfterViewInit{
  // view child code
  @ViewChild(EmployeeListComponent,{static:false}) employeeListComponent:EmployeeListComponent;
    @ViewChild(ModalDirective,{static:false}) modal: ModalDirective;

  name = 'Angular';
  userText="ParagimTech";
  condition:boolean=false;
  counter:number=0;
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2',
    'Hello'
  ]
  timeInput = new FormControl();
  subjectInput = new FormControl();
  locationInput = new FormControl();
  descriptionInput = new FormControl();

  items: Array<Schedule> = [
      {time: '08:00', subject: 'Breakfast with Simon', location: 'Lounge Caffe', description: 'Discuss Q3 targets'},
      {time: '08:30', subject: 'Daily Standup Meeting (recurring)', location: 'Warsaw Spire Office'},
      {time: '09:00', subject: 'Call with HRs'},
      {time: '12:00', subject: 'Lunch with Timmoty', location: 'Canteen',
      description: 'Project evalutation ile declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a'},
    ];
    // view child code
  ngAfterViewInit(){
    console.log(this.employeeListComponent.viewChildComponent1());
  }
clickCounter(){
return this.counter+=1;
}

    addNewItem() {
      const value: Schedule = {
        time: this.timeInput.value,
        subject: this.subjectInput.value,
        location: this.locationInput.value,
        description: this.descriptionInput.value
    };

    this.items.push(value);

    this.timeInput.setValue('');
    this.subjectInput.setValue('');
    this.locationInput.setValue('');
    this.descriptionInput.setValue('');

    this.modal.hide();
    }
}
