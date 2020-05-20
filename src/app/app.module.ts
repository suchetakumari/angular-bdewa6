import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';

import { HttpModule } from '@angular/http';
import { HelloComponent } from './hello.component';
import { EmployeeListComponent } from './employeelist.component';
import { EmployeeTitlePipe } from './employeetitle.pipe';
import { EmployeeCountComponent} from './employeecount.component';
import { SimpleComponent} from './Others/simple.component';
import { EmployeeService} from './employee.service';
import { HomeComponent} from './home/home.component';
import { PageNotfoundComponent} from './Others/pagenotfound.component';
import {EmployeeComponent} from './employee.component';
import { UserPreferenceService} from './userpreference.service';
import { FilterPipe} from './filter.pipe';
import {TestDirectiveComponent} from './test.directive'
const appRoutes:Routes =[
{path:'home', component: HomeComponent},
{path:'employees', component:EmployeeListComponent},
{path:'employees/:id', component:EmployeeComponent},
{path:'', redirectTo:'/home',pathMatch: 'full'},
{path:'***', component:PageNotfoundComponent},

]
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes, {useHash:true}) ],
  declarations: [ AppComponent, HelloComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent, HomeComponent, PageNotfoundComponent, EmployeeComponent,FilterPipe,TestDirectiveComponent ],
  bootstrap:    [ AppComponent ],
  providers: [EmployeeService, UserPreferenceService]
})
export class AppModule { }
