import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';

import { httpInterceptorProviders } from './_helpers/http.interceptor';
import { ManagementComponent } from './root/management/management.component';
import { ListManagementComponent } from './root/list-management/list-management.component';

import { SelectApartComponent } from './apart/select-apart/select-apart.component';

import { FilterApartPipe } from './_pipes/filter-apart.pipe';
import { SelectSummaryComponent } from './summary/select-summary/select-summary.component';
import { SelectFlatComponent } from './apart/select-flat/select-flat.component';
import { FilterFlatPipe } from './_pipes/filter-flat.pipe';
import { EditFlatComponent } from './apart/edit-flat/edit-flat.component';
import { EditSummaryComponent } from './summary/edit-summary/edit-summary.component';
import { EditApartComponent } from './apart/edit-apart/edit-apart.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ManagementComponent,
    ListManagementComponent,
    SelectApartComponent,
    FilterApartPipe,
    SelectSummaryComponent,
    SelectFlatComponent,
    FilterFlatPipe,
    EditFlatComponent,
    EditSummaryComponent,
    EditApartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
