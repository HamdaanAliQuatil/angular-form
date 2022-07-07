import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  orignalUserSettings: UserSettings = {
    name: 'Hamdaan',
    emailOffer: true,
    interfaceStyle: 'dark',
    subscriptionType: 'pro',
    notes: 'Demo'
  };

  userSettings: UserSettings = { ...this.orignalUserSettings };

  constructor() { }

  ngOnInit(): void {
  }

}
