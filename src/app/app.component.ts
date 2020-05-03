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
            <router-outlet></router-outlet>   
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  userText="ParagimTech";
}
