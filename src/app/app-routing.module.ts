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
import { AuthGuardService } from './services/auth-guard.service';
import { MyBillsComponent } from './camrail/my-bills/my-bills.component';
import { PrintComponent } from './print/print.component';
import { SaveSupplierComponent } from './staff/save-supplier/save-supplier.component';
import { StockComponent } from './staff/stock/stock.component';
import { EditStockComponent } from './staff/edit-stock/edit-stock.component';
import { GlobalStockComponent } from './staff/global-stock/global-stock.component';
import { StatisticsComponent } from './admin/statistics/statistics.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  {path : "adminHome",component : AdminHomeComponent,children:[
    {path :"saveUser",component : SaveUserComponent},
    {path :"usersList",component : UsersListComponent},
    {path :"saveItem",component : SaveItemComponent},
    {path :"saveSupplier",component : SaveSupplierComponent},
    {path :"stock",component : StockComponent},
    {path :"statistics",component : StatisticsComponent},
    {path :"globalStock ",component : GlobalStockComponent},
    {path :"stock/editStock/:itemId/:category",component : EditStockComponent},
    {path :"itemsList",component : ItemsListComponent},
    {path :"commandsList",component : CommandListComponent},
    {path :"commandDetails",component : CommandDetailComponent},
    {path :"profile",component : ProfileComponent},
   ], canActivate : [AuthGuardService]
  },
  
  {path : "staffHome", component : StaffHomeComponent,children : [
    {path :"camrailsList",component : CamrailsListComponent},
    {path :"saveItem",component : SaveItemComponent},
    {path :"saveSupplier",component : SaveSupplierComponent},
    {path :"stock",component : StockComponent},
    {path :"globalStock ",component : GlobalStockComponent},
    {path :"stock/editStock/:itemId/:category",component : EditStockComponent},
    {path :"itemsList",component : ItemsListComponent},
    {path :"commandsList",component : CommandListComponent},
    {path :"commandDetails",component : CommandDetailComponent},
    {path :"profile",component : ProfileComponent},
    ], canActivate : [AuthGuardService]
  },

  {path : "camrailHome", component : CamrailHomeComponent,children:[
    {path :"camrailItemsList",component : CamrailItemsListComponent},
    {path :"camrailNewBill",component : CamrailNewBillComponent},
    {path :"camrailDetailsBill",component : CamrailDetailsBillComponent},
    {path :"profile",component : ProfileComponent},
    {path :"myBills", component : MyBillsComponent, canActivate : [AuthGuardService] }

  ]

  },

  {path : "signIn", component : SignInComponent},
  {path : "print", component : PrintComponent},

  {path : "",redirectTo:"signIn",pathMatch : "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
