import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import {SaveUserComponent} from './save-user/save-user.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaveSupplierComponent } from '../staff/save-supplier/save-supplier.component';
import { SaveItemComponent } from '../staff/save-item/save-item.component';
import { ItemsListComponent } from '../staff/items-list/items-list.component';
import { StockComponent } from '../staff/stock/stock.component';
import { GlobalStockComponent } from '../staff/global-stock/global-stock.component';
import { EditStockComponent } from '../staff/edit-stock/edit-stock.component';
import { CommandListComponent } from '../staff/command-list/command-list.component';
import { CommandDetailComponent } from '../staff/command-detail/command-detail.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes : Routes = [
  {path : "saveUser",component : SaveUserComponent},
  {path : "usersList",component : UsersListComponent},
  {path : "statistics",component : StatisticsComponent},
  {path:"saveItem",component : SaveItemComponent},
  {path:"itemsList",component : ItemsListComponent},
  {path:"commandsList",component : CommandListComponent},
  {path:"commandDetails",component : CommandDetailComponent},
  {path:"saveSupplier",component : SaveSupplierComponent},
  {path:"stock",component : StockComponent},
  {path:"globalStock",component : GlobalStockComponent},
  {path:"stock/editStock/:itemId/:category",component : EditStockComponent},
]

@NgModule({
  declarations: [
    AdminHomeComponent,
    SaveUserComponent,
    UsersListComponent,
    StatisticsComponent

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
