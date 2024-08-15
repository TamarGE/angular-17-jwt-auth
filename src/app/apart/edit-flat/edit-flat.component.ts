import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AdminService } from '../../_services/admin.service';


import { StorageService } from '../../_services/storage.service';


import { Apart, Flat, Management } from '../../interfaces/interfacesMgn';



@Component({
  selector: 'app-edit-flat',
  templateUrl: './edit-flat.component.html',
  styleUrl: './edit-flat.component.css'
})
export class EditFlatComponent implements OnInit {

  constructor( private storageService: StorageService, private adminService:AdminService) {}

 @Input() selectedFlat: Flat= {id:0,name:"",contact:'',phone:'',email:'',quota:0,apartId:0,owner:''}

 @Output()  result =  new EventEmitter<boolean>();

 management : Management ={ id:0,name:"",email:"",phone:""} ;

 messageError: string = "";

  ngOnInit(): void {
    this.management=this.storageService.getManagement();

    console.log("edit flat on init",this.selectedFlat.apartId);

    this.flatForm.value.apartId=this.selectedFlat.apartId;

  }


  flatForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    contact: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    owner: new FormControl(''),
    quota: new FormControl(0),
    apartId: new FormControl(this.selectedFlat.apartId),

  });


  async onSaveClick(){

    var flatX : Flat = {id:0,name:"",contact:"",phone:"",email:"",owner:"",apartId:0,quota:0};


    flatX = this.flatForm.value as Flat;
    flatX.apartId= this.selectedFlat.apartId;

    console.log("Save CLick",flatX);

   this.adminService.flatAdd(flatX).subscribe({
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


   this.result.emit(true);

 };

 onCancelClick(){
    this.result.emit(false);
 }



}
