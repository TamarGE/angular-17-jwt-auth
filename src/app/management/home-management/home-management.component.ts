import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
import { StorageService } from '../../_services/storage.service';

@Component({
  selector: 'app-home-management',
  templateUrl: './home-management.component.html',
  styleUrl: './home-management.component.css'
})
export class HomeManagementComponent implements OnInit {

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];



  constructor(private userService: UserService, private router:Router,private storageService:StorageService) {};

ngOnInit(): void {
  if (this.storageService.isLoggedIn()) {
    this.isLoggedIn = true;
    this.roles = this.storageService.getUser().roles;
    console.log(this.roles);
  }
}




}
