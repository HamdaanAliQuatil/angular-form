import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  orignalUserSettings: UserSettings = {
    name: null,
    emailOffer: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null
  };

  userSettings: UserSettings = { ...this.orignalUserSettings };
  postError: boolean | undefined;
  postErrorMessage: any;
  subscriptionTypes!: Observable<string[]>;

  constructor(private dataService: DataService) {
  }
  
  ngOnInit(): void {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
  }

  onBlur(field: NgModel){
    console.log('in onBlur', field.valid);
  }

  onHttpError(errorResponse: any){
    console.log('error:', errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage;
  }

  onSubmit(form: NgForm){
    console.log('in onSubmit', form.valid);

    if(form.valid){

    
    this.dataService.postUserSettingsForm(this.userSettings).subscribe({
      next: (result) => {
        console.log('success:', result);
      },
      error: (err) => {
        this.onHttpError(err);
      }
    });
  }
  else{
    this.postError = true;
    this.postErrorMessage = 'Please fix the above errors';
  }
}

}

