import { Injectable } from '@angular/core';
import { Management } from '../interfaces/interfacesMgn';

const USER_KEY = 'auth-user';
const MANAGEMENT_KEY = '';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));



    console.log(user);
  }


  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }


  public getManagement(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      let aux = JSON.parse(user);

      let auxMgn: Management = {id:aux.managementId,name:aux.managementName,phone:aux.mamagementPhone,email:aux.managementEmail};

      return  auxMgn;
    }
    return null;
  }
  }




