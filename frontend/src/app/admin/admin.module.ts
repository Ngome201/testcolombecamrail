import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {SaveUserComponent} from './save-user/save-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes : Routes = [
  {path : "saveUser",component : SaveUserComponent},
  {path : "usersList",component : UsersListComponent}
]

@NgModule({
  declarations: [
    AdminHomeComponent,
    SaveUserComponent,
    UsersListComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports : [AdminHomeComponent,SaveUserComponent,RouterModule,UsersListComponent]
})
export class AdminModule { }
