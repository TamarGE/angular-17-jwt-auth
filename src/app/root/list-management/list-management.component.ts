import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { StorageService } from '../../_services/storage.service';
import { RootService } from '../../_services/root.service';
import { Management } from '../../interfaces/interfacesMgn';



@Component({
  selector: 'app-list-management',
  templateUrl: './list-management.component.html',
  styleUrl: './list-management.component.css'
})




export class ListManagementComponent implements OnInit {

  @Output() selectedMgm = new EventEmitter<Management>();

  mgnList : Management[] =[];
  errorMessage: any;

  constructor (private rootService:RootService){}

  ngOnInit():void{
    this.rootService.viewAllManagment().subscribe({
      next: data => {
       this.mgnList= data;
       console.log(data);
       console.log(this.mgnList);
      },
      error: err => {
        this.errorMessage = err.error.message;

      }
    });
  }

  onItemClick(i:any)
  {
    console.log("Emit--"+i.id)    ;
    this.selectedMgm.emit(i);
  }


}
