import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: ` <employee-list></employee-list><br>

  // Your text <input type="text" [(ngModel)]="userText">
  // <simple [simpleInput]="userText"></simple>`,
  template: `
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
            <router-outlet></router-outlet>   
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  userText="ParagimTech";
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
}
