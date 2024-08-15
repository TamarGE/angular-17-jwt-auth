import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { RootService } from '../../_services/root.service';
import { AdminService } from '../../_services/admin.service';

import { Apart, Management, Flat, Summary } from '../../interfaces/interfacesMgn';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-summary',
  templateUrl: './select-summary.component.html',
  styleUrl: './select-summary.component.css'
})
export class SelectSummaryComponent implements OnInit {

  @Input() apartId : number = 0 ;
  @Output() selectedSummary = new EventEmitter<Summary>(); // exporta el Summario Seleccionado

  summaryApart : Summary[] =[];
  errorMessage :string ="";

  constructor (private storageService:StorageService, private adminService:AdminService){};

  ngOnInit(): void {


    this.adminService.viewApartSummary(this.apartId).subscribe({
      next: data => {
       this.summaryApart= data;

       console.log(this.summaryApart);
      },
      error: err => {
        this.errorMessage = err.error.message;

      }
    });

  }






}
