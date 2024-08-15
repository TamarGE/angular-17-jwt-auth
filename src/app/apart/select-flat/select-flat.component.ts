import { Apart } from './../../interfaces/interfacesMgn';

import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

import { StorageService } from '../../_services/storage.service';
import { RootService } from '../../_services/root.service';
import { Flat } from '../../interfaces/interfacesMgn';
import { AdminService } from '../../_services/admin.service';


@Component({
  selector: 'app-select-flat',
  templateUrl: './select-flat.component.html',
  styleUrl: './select-flat.component.css'
})
export class SelectFlatComponent implements OnInit{

  @Input() apartId : number = 0 ;
  @Output() selectedFlt = new EventEmitter<Flat>();


  flatsApart : Flat[] =[];
  errorMessage :string ="";
  searchText : string = "";

  constructor (private storageService:StorageService, private adminService:AdminService){};

  ngOnInit(): void {


    console.log("FLAT - AOArt ID",this.apartId);
    this.adminService.viewApartFlat(this.apartId).subscribe({
      next: data => {
       this.flatsApart= data;

       console.log(this.flatsApart);
      },
      error: err => {
        this.errorMessage = err.error.message;

      }
    });
  }

   onItemClick(item:number){
   }

   onNewFlat() {

   }
}

