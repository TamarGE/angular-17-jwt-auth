import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { RootService } from '../../_services/root.service';
import { AdminService } from '../../_services/admin.service';
import { Apart, Management, Flat } from '../../interfaces/interfacesMgn';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-select-apart',
  templateUrl: './select-apart.component.html',
  styleUrl: './select-apart.component.css'
})
export class SelectApartComponent  implements OnInit, OnChanges {


@Input() refresh: boolean = false;
@Output() selectedApart = new EventEmitter<Apart>(); // exporta el Propiedad seleccionada

constructor(private storageService:StorageService, private adminService:AdminService) {}


management:Management= {id:0,name:"",phone:"",email:""};
isLoggedIn= false;
roles= [];
aparts: Apart[]=[];  // vector para guardar la consulta de los apartamentos

messageError: string ="";
searchText : string = "";

ngOnInit(): void {
 /*

 */
 if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.management = this.storageService.getManagement();
    }

console.log("Management en Local Store",this.management);

// para iniciar pruebo con todas las propiedades  sin filtro
this.loadAparts();

}

ngOnChanges(changes: SimpleChanges): void {
    if (changes['refresh']){
      this.loadAparts();
    }
    this.refresh=false;
}


async onItemClick(i:Apart)
  {
    console.log("Emit-- : "+JSON.stringify(i))    ;
    this.selectedApart.emit(i);
  }


  async loadAparts() {

    this.adminService.viewAllAparts().subscribe({
      next: data => {
        console.log(data);
        this.aparts=data; },
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
        } }
    });
  }


}
