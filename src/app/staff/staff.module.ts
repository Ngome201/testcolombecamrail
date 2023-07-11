import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffHomeComponent } from './staff-home/staff-home.component';
import { Routes, RouterModule } from '@angular/router';
import { CamrailsListComponent } from './camrails-list/camrails-list.component';
import { SaveItemComponent } from './save-item/save-item.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemBillListComponent } from './item-bill-list/item-bill-list.component';
import { CommandListComponent } from './command-list/command-list.component';
import { CommandDetailComponent } from './command-detail/command-detail.component';
import { SaveSupplierComponent } from './save-supplier/save-supplier.component';
import { StockComponent } from './stock/stock.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { GlobalStockComponent } from './global-stock/global-stock.component';

const routes : Routes = [
  {path:"camrailsList",component : CamrailsListComponent},
  {path:"saveItem",component : SaveItemComponent},
  {path:"itemsList",component : ItemsListComponent},
  {path:"commandsList",component : CommandListComponent},
  {path:"commandDetails",component : CommandDetailComponent},
  {path:"saveSupplier",component : SaveSupplierComponent},
  {path:"stock",component : StockComponent},
  {path:"allStock",component : GlobalStockComponent},
  {path:"stock/editStock/:itemId/:category",component : EditStockComponent},
  
]


@NgModule({
  declarations: [
    StaffHomeComponent,
    CamrailsListComponent,
    SaveItemComponent,
    ItemsListComponent,
    ItemBillListComponent,
    CommandListComponent,
    CommandDetailComponent,
    SaveSupplierComponent,
    StockComponent,
    EditStockComponent,
    GlobalStockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  exports : [
    StaffHomeComponent,
    CamrailsListComponent,
    SaveItemComponent,
    ItemsListComponent,
    ItemBillListComponent,
    CommandListComponent,
    CommandDetailComponent,
    SaveSupplierComponent,
    StockComponent,
    EditStockComponent,
    GlobalStockComponent
  ]
})
export class StaffModule { }
