import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Management } from '../interfaces/interfacesMgn';
import { Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private router:Router)

 { }

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: data => {
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
  // fin nginit

  onSelectMgn(selMgn:Management) {
    console.log(" Dentro del Padre");
    console.log(selMgn.id);
    this.router.navigate(['home/', selMgn.id]);
  }


}
