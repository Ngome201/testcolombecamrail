import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SaveUserComponent } from './admin/save-user/save-user.component';
import { UsersListComponent } from './admin/users-list/users-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CamrailsListComponent } from './staff/camrails-list/camrails-list.component';
import { StaffHomeComponent } from './staff/staff-home/staff-home.component';
import { SaveItemComponent } from './staff/save-item/save-item.component';
import { ItemsListComponent } from './staff/items-list/items-list.component';
import { CamrailHomeComponent } from './camrail/camrail-home/camrail-home.component';
import { CamrailItemsListComponent } from './camrail/camrail-items-list/camrail-items-list.component';
import { ItemBillListComponent } from './staff/item-bill-list/item-bill-list.component';
import { CamrailNewBillComponent } from './camrail/camrail-new-bill/camrail-new-bill.component';
import { CamrailDetailsBillComponent } from './camrail/camrail-details-bill/camrail-details-bill.component';
import { CommandListComponent } from './staff/command-list/command-list.component';
import { CommandDetailComponent } from './staff/command-detail/command-detail.component';
const routes: Routes = [
  {path : "adminHome",component : AdminHomeComponent,children:[
    {path :"saveUser",component : SaveUserComponent},
    {path :"usersList",component : UsersListComponent},
    ]
  },
  
  {path : "staffHome", component : StaffHomeComponent,children : [
    {path :"camrailsList",component : CamrailsListComponent},
    {path :"saveItem",component : SaveItemComponent},
    {path :"itemsList",component : ItemsListComponent},
    {path :"commandsList",component : CommandListComponent},
    {path :"commandDetails",component : CommandDetailComponent},
  ]},

  {path : "camrailHome", component : CamrailHomeComponent,children:[
    {path:"camrailItemsList",component : CamrailItemsListComponent},
    {path :"camrailNewBill",component : CamrailNewBillComponent},
    {path:"camrailDetailsBill",component : CamrailDetailsBillComponent}

  ]

  },

  {path : "signIn", component : SignInComponent},
  {path : "",redirectTo:"signIn",pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
