import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { StorageService } from '../_services/storage.service';
import { Management, Apart, Flat } from '../interfaces/interfacesMgn';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;



 management : Management ={ id:0,name:"",email:"",phone:""} ;

 selectedApart : Apart = {id:0,name:"",direction:"",owner:"",part:0,managementId:0,total:0,fiscal:'',acount:''};

 selectedFlat: Flat= {id:0,name:"",contact:'',phone:'',email:'',quota:0,apartId:0,owner:''}

 selectedAction : string = "APART" //  Opciones:  SUMMARY editar Resumenen, APARTS  editar Datos de los apartamentos ... y mas de ser necesario

userAccess: string = "";

refresh = false;

  constructor(private userService: UserService, private storageService:StorageService) { }

  ngOnInit(): void {
    this.management=this.storageService.getManagement();

    console.log(this.management);

    this.userService.getAdminBoard().subscribe({
      next: data => {
        console.log(data);
        this.userAccess=data;

        this.content = data;
      },
      error: err => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });
  }

 onSelectAction(opX:string){
   this.selectedAction =opX;
  }

  async onSelectApart(selApart:Apart) {
    console.log(" Dentro del Padre ---------------");
    console.log(selApart);
    this.selectedApart= selApart;

    this.selectedAction = "APART" ;
  }

  onBack() {
    this.selectedApart= {id:0,name:"",direction:"",owner:"",part:0,managementId:0,total:0,fiscal:'',acount:''};;
  }

  async onNewClick(){
    this.selectedApart  = {id:0,name:"",direction:"",owner:"",part:0,managementId:0,total:0,fiscal:'',acount:''};
    this.selectedAction = "NEWAPART" ;
   }

   async onNewFlatClick(){

    this.selectedAction = "NEWFLAT" ;
    this.selectedFlat = {id:0,name:"",contact:'',phone:'',email:'',quota:0,apartId:0,owner:''}
    this.selectedFlat.apartId=this.selectedApart.id; // por las dudas me aseguro de enviar la informacion del apartamento
   }




   async onRefreshApart(refresh:boolean){
    this.refresh= refresh;
    this.selectedAction = "APART" ;
    console.log("ON REFRESH APART");

   }


   async onRefreshFlat(refresh:boolean){
    this.refresh= refresh;
    this.selectedAction = "APART" ;
    console.log("ON REFRESH FLAT");

   }



}
