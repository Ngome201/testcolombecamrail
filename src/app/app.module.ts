import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './services/user.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { StaffModule } from './staff/staff.module';
import { CamrailModule } from './camrail/camrail.module';
import { ItemService } from './services/item.service';
import { BillService } from './services/bill.service';
import { DatePipe } from '@angular/common';
import { CommandService } from './services/command.service';

import {AuthInterceptorService} from './services/auth-interceptor.service';
import { PrintComponent } from './print/print.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    PrintComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AdminModule,
    StaffModule,
    CamrailModule
  ],
  // providers: [UserService,ItemService,BillService,CommandService,DatePipe],
  providers:[
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptorService,
      multi : true
    },UserService,ItemService,BillService,CommandService,DatePipe
  ],
  exports : [ProfileComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
