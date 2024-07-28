import { UserService } from './_services/user.service';
import { Injectable } from '@angular/core';
import { UserInt} from './interfaces/interfacesMgn'


@Injectable({
  providedIn: 'root'
})
export class EnviromentAppService {

  constructor() { };

user : UserInt= {  id:0,username:"",email:"",password:"", active:false, managementId:-1};







}
