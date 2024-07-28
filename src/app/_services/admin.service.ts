import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// interfaces
import { Management, NewManagement } from '../interfaces/interfacesMgn';

const API_URL = 'http://localhost:3000/api/';


@Injectable({
  providedIn: 'root'
})


export class AdminService {



  constructor() { }
}
