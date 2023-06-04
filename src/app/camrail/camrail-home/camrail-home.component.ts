import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-camrail-home',
  templateUrl: './camrail-home.component.html',
  styleUrls: ['./camrail-home.component.css']
})
export class CamrailHomeComponent {
  username : any
  matricule : any
  cni : any
  constructor(
    private itemService : ItemService,
    private billService : BillService,
    private router : Router

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
  validateBill(){
    window.confirm("are you sure you want to validate your bill ?")
    this.billService.validateBill(String(localStorage.getItem("billId")),
                                  String(localStorage.getItem("cni"))).subscribe((data)=>{
                                    console.log(data);
                                  })
   
    }
}