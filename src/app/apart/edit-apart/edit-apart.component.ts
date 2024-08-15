import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminService } from '../../_services/admin.service';


import { StorageService } from '../../_services/storage.service';


import { Apart, Management } from '../../interfaces/interfacesMgn';

@Component({
  selector: 'app-edit-apart',
  templateUrl: './edit-apart.component.html',
  styleUrl: './edit-apart.component.css'
})
export class EditApartComponent implements OnInit{
  constructor( private storageService: StorageService, private adminService:AdminService) {}

  @Output()  result =  new EventEmitter<boolean>();
  @Input()   selectApart :  Apart = {id:0,name:'',direction:'',owner:'',part:0,managementId:0,total:0,fiscal:'',acount:''};

  management : Management ={ id:0,name:"",email:"",phone:""} ;


  ngOnInit(): void {
    this.management=this.storageService.getManagement();

    if (this.selectApart.id != 0) {
      console.log("asignando en edicion",this.selectApart);
      this.apartForm.setValue(this.selectApart);

    }
  }

  apartForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    direction: new FormControl(''),
    owner: new FormControl(''),
    total: new FormControl(0),
    part: new FormControl(0),
    fiscal: new FormControl(''),
    acount: new FormControl(''),
    managementId: new FormControl(0),
  });

  messageError: string ="";


  onSaveClick(){
     console.log("Save CLick");
     var apX : Apart = {id:0,name:"",direction:"",owner:"",part:0,managementId:0,total:0,fiscal:'',acount:''};

     apX = this.apartForm.value as Apart;
     console.log("APX:",JSON.stringify(apX));
     if (apX.id==0) // es nuevo registro
               {
                this.adminService.apartAdd(apX).subscribe({
                  next: data => {
                    console.log(data);

                    },
                  error: err => {
                    if (err.error) {
                      try {
                        const res = JSON.parse(err.error);
                        this.messageError = res.message;
                      } catch {
                        this.messageError = `Error with status: ${err.status} - ${err.statusText}`;
                      }
                    } else {
                      this.messageError = `Error with status: ${err.status}`;
                    }
                    this.result.emit(false);
                    console.log(this.messageError);
                    }

                });
              }
              else {
                this.adminService.apartEdit(apX).subscribe({
                  next: data => {
                    console.log(data);
                    },
                  error: err => {
                    if (err.error) {
                      try {
                        const res = JSON.parse(err.error);
                        this.messageError = res.message;
                      } catch {
                        this.messageError = `Error with status: ${err.status} - ${err.statusText}`;
                      }
                    } else {
                      this.messageError = `Error with status: ${err.status}`;
                    }
                    this.result.emit(false);
                    console.log(this.messageError);
                    }

                });
              }


    this.result.emit(true);

  };

  onCancelClick(){
     this.result.emit(false);
  }



}
