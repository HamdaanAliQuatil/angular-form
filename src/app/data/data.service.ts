import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }
  
  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monthly', 'Annual', 'Lifetime']);
  }

  postUserSettingsForm(userSettings: UserSettings): Observable<any>{
    //using postman mock server url https://79d1f529-19c7-4019-b4a1-d1aea9cdcf74.mock.pstmn.io to test post request
    return this.http.post('https://79d1f529-19c7-4019-b4a1-d1aea9cdcf74.mock.pstmn.io', userSettings);
    // return of(userSettings);
  }
}
