import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BillService } from '../services/bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent {
  billItems : any
  totalAmount : any;
  totalItems : any;
  date : any;
  name : any;
  matricule : any;
  printTag : any;
  cancelTag : any;
  validateTag : any;
  backTag : any;
  billId = localStorage.getItem("billId")
  
  constructor(
    private billService : BillService,
    private router : Router,
    private datePipe : DatePipe
  ){
    billService.detailsBill(String(localStorage.getItem("billId"))).subscribe((data)=>{
      this.billItems = data.billItems
      this.totalAmount = data.totalAmount
      this.totalItems = data.totalItems
      this.date = this.datePipe.transform((new Date),'dd/MM/yyyy h:mm:ss')
      this.matricule = localStorage.getItem('matricule')
      this.name = localStorage.getItem('username')
      localStorage.removeItem("billId")

    })
  }

  printBill(){
     window.print();
     this.router.navigate(['camrailHome'])

  }
}
