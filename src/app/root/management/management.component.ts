import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { RootService } from '../../_services/root.service';

import { FormGroup, FormControl,FormArray,Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Management } from '../../interfaces/interfacesMgn';

import { Router} from '@angular/router';
import { EnviromentAppService } from '../../enviroment-app.service';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.css'
})
export class ManagementComponent implements OnInit {

constructor(private RootService: RootService,
            private storageService: StorageService,
            private enviromentAppService: EnviromentAppService

           ) { }


  managementForm = new FormGroup ({
    id :new FormControl({value :0,disabled :true}),
    name: new FormControl({value :'',disabled :true}),
    email: new FormControl({value :'',disabled :true}),
    phone: new FormControl({value :'',disabled :true}),
  });



  userForm =new FormGroup ({
    username: new FormControl({value :'',disabled :true}),
    emailUser: new FormControl({value :'',disabled :true}),
    password: new FormControl({value :'',disabled :true}),
  });


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  mgnList :any;
  mgnUser :any;

  edtMgn : Management = {id:0,name:"",email:"",phone:""};;

  edtUsr = {
    nameUsr:"",


  }

  isFormModified = false;      // se utiliza para marcar si el formulario fue modicado
  isFormNew = false;
  viewOption = "management";   // se utiliza para seleccionar las vistas  ["management","users"]


  formBuilder: any;



  ngOnInit(): void {
    this.viewOption = "management";
    this.isFormModified = false;
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }

    this.RootService.viewAllManagment().subscribe({
      next: data => {
       this.mgnList= data;
       console.log(this.mgnList);
      },
      error: err => {
        this.errorMessage = err.error.message;

      }
    });

  }

 selectManagementUsers(){

  this.isFormModified = false;

  console.log("Clck Users");

  const idx= this.edtMgn.id;
  this.viewOption="users";
  this.RootService.viewMgnUsers(idx).subscribe({
    next: data => {
      this.mgnUser=data;
     console.log(this.mgnUser);
     console.log("HOLA");

    },
    error: err => {
      this.errorMessage = err.error.message;

    }

  });
  console.log("FIN");

 }


 onClickManagement(){
  console.log("Clck mgm");
  this.viewOption="management";
  this.RootService.viewAllManagment().subscribe({
    next: data => {
     console.log(data);
    },
    error: err => {
      this.errorMessage = err.error.message;

    }
  });

 }

  onClickUsers (){
    this.viewOption="users";


    var idX= this.edtMgn.id;
    console.log("Id usuario"+idX);

    console.log("Clck Users");
    this.RootService.viewMgnUsers(idX).subscribe({
      next: data => {

       this.mgnUser=data;

       console.log(this.mgnUser);



      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }



onNewRecord(){
  this.isFormModified = true;
  this.isFormNew = true;
  this.managementForm.enable();
  this.managementForm.reset();


};

onModifyRecord(){
  this.isFormModified = true;
  this.isFormNew = false;
  this.managementForm.enable();
};

onSaveRecord(){
  this.isFormModified = false;
  this.isFormNew = false;
  this.managementForm.disable();

    // modelo de respuesta  const { name, email, phone, username, emailUser, password }
    this.RootService.addManagement(this.managementForm.value).subscribe({
      next: data => {
       console.log(data);

      },
      error: err => {
        this.errorMessage = err.error.message;

      }
    });




};

onSelectMgn(selMgn:Management) {
  console.log(" Dentro del Padre"+selMgn.id);
  this.edtMgn=selMgn;
  this.managementForm.setValue(selMgn);
}



}
