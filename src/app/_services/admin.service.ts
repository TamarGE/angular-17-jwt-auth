import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// interfaces
import { Management, NewManagement, Apart, Flat } from '../interfaces/interfacesMgn';

const API_URL = 'http://localhost:3000/api/admin/';


@Injectable({
  providedIn: 'root'
})


export class AdminService  {

  constructor(private http: HttpClient) { }


  viewMgnUsers(idX:string): Observable<any> {
    return this.http.post(API_URL + 'users/all/'+idX, { responseType: 'text' });
  }

  viewMgnAparts(idX:string): Observable<any> {
    return this.http.post(API_URL + 'apart/all/'+idX, { responseType: 'text' });
  }

  viewAllAparts(): Observable<any> {
    return this.http.get(API_URL + 'apart/all', { responseType: 'json' });
  }


  viewApartSummary(idX:number): Observable<any> {
    return this.http.get(API_URL + 'summary/all/'+idX, { responseType: 'json' });
  }

  viewApartFlat(idX:number): Observable<any> {
    return this.http.get(API_URL + 'flat/all/'+idX, { responseType: 'json' });
  }

  apartAdd(apart:Apart): Observable<any> {
    return this.http.put(API_URL + 'apart/add/',apart,{ responseType: 'json' });
  }

  apartEdit(apart:Apart): Observable<any> {
    return this.http.post(API_URL + 'apart/edit/',apart,{ responseType: 'json' });
  }


  flatAdd(flat:Flat): Observable<any> {
    return this.http.put(API_URL + 'flat/add/',flat,{ responseType: 'json' });
  }



}
