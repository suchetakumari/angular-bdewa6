import { Component } from '@angular/core';
import { UserPreferenceService} from '../userpreference.service';
@Component({
selector: 'home',
template: `<h1>This is home component</h1>
    <div>
    Colour Preference:
    <input type="text" [(ngModel)]="colour" [style.background]="colour">
    </div>`
})
export class HomeComponent {
    constructor(private _userPreferenceService: UserPreferenceService){}

get colour(){
return this._userPreferenceService.colourPreference;
}
set colour(value: string){
  this._userPreferenceService.colourPreference=value;
}

}