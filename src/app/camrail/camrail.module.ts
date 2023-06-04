import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamrailHomeComponent } from './camrail-home/camrail-home.component';
import { RouterModule, Routes } from '@angular/router';
import { CamrailItemsListComponent } from './camrail-items-list/camrail-items-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CamrailNewBillComponent } from './camrail-new-bill/camrail-new-bill.component';
import { ItemBillListComponent } from '../staff/item-bill-list/item-bill-list.component';
import { CamrailDetailsBillComponent } from './camrail-details-bill/camrail-details-bill.component';

const routes : Routes = [
  {path:"camrailItemsList",component : CamrailItemsListComponent},
  {path:"camrailNewBill",component : CamrailNewBillComponent},
  {path:"camrailDetailsBill",component:CamrailDetailsBillComponent}
  
]

@NgModule({
  declarations: [
    CamrailHomeComponent,
    CamrailItemsListComponent,
    CamrailNewBillComponent,
    CamrailDetailsBillComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports : [CamrailHomeComponent,CamrailItemsListComponent,CamrailNewBillComponent,CamrailDetailsBillComponent]
})
export class CamrailModule { }
