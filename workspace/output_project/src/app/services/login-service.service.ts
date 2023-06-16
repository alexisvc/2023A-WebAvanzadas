import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  isUserAuthenticate(): boolean{
    return true;
  }

  getUserData(): any{
    return {
      name:  'Alexis',
      role: 'admin',
      lastLoggedTime: '2 days',
    };
  }
}
