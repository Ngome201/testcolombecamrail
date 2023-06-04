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

const routes : Routes = [
  {path:"camrailsList",component : CamrailsListComponent},
  {path:"saveItem",component : SaveItemComponent},
  {path:"itemsList",component : ItemsListComponent},
  {path:"commandsList",component : CommandListComponent},
  {path:"commandDetails",component : CommandDetailComponent},
  
]


@NgModule({
  declarations: [
    StaffHomeComponent,
    CamrailsListComponent,
    SaveItemComponent,
    ItemsListComponent,
    ItemBillListComponent,
    CommandListComponent,
    CommandDetailComponent
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
    RouterModule,
    CamrailsListComponent,
    SaveItemComponent,
    ItemsListComponent,
    ItemBillListComponent,
    CommandListComponent,
    CommandDetailComponent
  ]
})
export class StaffModule { }
