import { Component ,ViewChild,AfterViewInit} from '@angular/core';
import { EmployeeListComponent } from './employeelist.component';

@Component({
  selector: 'my-app',
  // template: ` <employee-list></employee-list><br>

  // Your text <input type="text" [(ngModel)]="userText">
  // <simple [simpleInput]="userText"></simple>`,
  template: `
  <div testDirective>Hi There!!</div>
         <div style="padding:5px"> </div>
            <ul class="nav nav-tabs">
                <li><a routerLink="home">Home</a></li>
                <li><a routerLink="employees">Employees</a></li>
            </ul> 
            <input [(ngModel)]="searchText" placeholder="search text goes here">
<ul>
  <li *ngFor="let c of characters | filter : searchText">
    {{c}}
  </li>
</ul>

<employee-list >
// content child code
<h1 #header1>Welcome</h1>
</employee-list>
<h2 *myCustomIf="condition">Hello {{name}}</h2>
             <button (click)="condition = !condition">Click</button>

             <h2>Counter:{{counter}}</h2>
<button (click)="clickCounter()">Click. Me</button>

            <router-outlet></router-outlet>   
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements  AfterViewInit{
  // view child code
  @ViewChild(EmployeeListComponent,{static:false}) employeeListComponent:EmployeeListComponent;
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
  
    // view child code
  ngAfterViewInit(){
    console.log(this.employeeListComponent.viewChildComponent1());
  }
clickCounter(){
return this.counter+=1;
}

}
