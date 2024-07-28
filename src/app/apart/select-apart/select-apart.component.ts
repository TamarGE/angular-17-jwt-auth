import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { RootService } from '../../_services/root.service';
import { Apart,Management,Flat } from '../../interfaces/interfacesMgn';


@Component({
  selector: 'app-select-apart',
  templateUrl: './select-apart.component.html',
  styleUrl: './select-apart.component.css'
})
export class SelectApartComponent  implements OnInit {

  @Output() selectedFlt = new EventEmitter<Apart>(); // exporta el apartamento seleccionado

constructor(private storageService:StorageService) {}


management:Management= {id:"",name:"",phone:"",email:""};

isLoggedIn= false;

roles= [];




ngOnInit(): void {
 /*

 */
 if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      //this.management = this.storageService.getMamagement();
    }
}

}
