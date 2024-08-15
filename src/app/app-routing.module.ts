import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';

import { ManagementComponent } from './root/management/management.component';
import { HomeManagementComponent } from './management/home-management/home-management.component';
import { SelectSummaryComponent } from './summary/select-summary/select-summary.component';
import { SelectApartComponent } from './apart/select-apart/select-apart.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeManagementComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },

  { path: 'adminOLD',
    children: [   {
                    path: 'home',  // child route path
                    component:  SelectApartComponent,  // child route component that the router renders
                  },
                  {
                    path: 'apart',  // child route path
                    component:  SelectApartComponent,  // child route component that the router renders
                  },
                  {
                    path: 'summary',  // child route path
                    component:  SelectSummaryComponent,  // child route component that the router renders
                  },


                ],
  },

  { path: 'admin', component: BoardAdminComponent },


  { path: 'root', component: ManagementComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
