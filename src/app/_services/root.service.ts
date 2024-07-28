import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// interfaces
import { Management, NewManagement } from '../interfaces/interfacesMgn';





const API_URL = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }

  viewAllUsers(): Observable<any> {
    return this.http.get(API_URL + 'users/all', { responseType: 'text' });
  }

  viewMgnUsers(idX:string): Observable<any> {
    return this.http.post(API_URL + 'users/all/'+idX, { responseType: 'text' });
  }



  viewAllManagment(): Observable<any> {
    return this.http.post(API_URL + 'management/all', { responseType: 'text' });
  }


  addManagement(newManagement:any): Observable<any> {
    console.log("en el servicio");

    return this.http.post<any>( API_URL + 'management/add', newManagement);
  }


}
