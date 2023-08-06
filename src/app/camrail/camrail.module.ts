import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamrailHomeComponent } from './camrail-home/camrail-home.component';
import { RouterModule, Routes } from '@angular/router';
import { CamrailItemsListComponent } from './camrail-items-list/camrail-items-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CamrailNewBillComponent } from './camrail-new-bill/camrail-new-bill.component';
import { CamrailDetailsBillComponent } from './camrail-details-bill/camrail-details-bill.component';
import { MyBillsComponent } from './my-bills/my-bills.component';
import { ProfileComponent } from '../profile/profile.component';
import { HelpComponent } from './help/help.component';

const routes : Routes = [
  {path:"camrailItemsList",component : CamrailItemsListComponent},
  {path:"camrailNewBill",component : CamrailNewBillComponent},
  {path:"camrailDetailsBill",component : CamrailDetailsBillComponent},
  {path : "profile",component : ProfileComponent},
  {path : "help",component : HelpComponent},
  {path:"myBills",component : MyBillsComponent}
  
]

@NgModule({
  declarations: [
    CamrailHomeComponent,
    CamrailItemsListComponent,
    CamrailNewBillComponent,
    CamrailDetailsBillComponent,
    MyBillsComponent,
    HelpComponent
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
