import {Pipe, PipeTransform} from '@angular/core'
@Pipe ({
  name: 'employeeTitle'
})
export class EmployeeTitlePipe implements PipeTransform{
  transform(name,gender){
if(gender === 'Male'){
   return 'Mr.' +  name
} else {
     return 'Miss.' +  name

}
  }

}