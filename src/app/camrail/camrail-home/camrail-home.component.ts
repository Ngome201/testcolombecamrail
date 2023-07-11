import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-camrail-home',
  templateUrl: './camrail-home.component.html',
  styleUrls: ['./camrail-home.component.css']
})
export class CamrailHomeComponent {
  username : any
  matricule : any
  cni : any
  printTag : any
  billId : any
  constructor(
    private itemService : ItemService,
    private billService : BillService,
    private router : Router,
    private userService : UserService

  ){
    this.username = localStorage.getItem('username')
    this.matricule = localStorage.getItem('matricule')
    this.cni = localStorage.getItem('cni')

  }
  addBill(){
    this.billService.addBill()
                    .subscribe((bill)=>{
                      localStorage.setItem("billId",String(bill.id))
                      console.log(bill)
                    })
  }
 
  logout(){
      this.userService.logout()
  }

}