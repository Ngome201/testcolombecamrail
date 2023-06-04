import { DatePipe } from '@angular/common';
import { Component, asNativeElements } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-camrail-details-bill',
  templateUrl: './camrail-details-bill.component.html',
  styleUrls: ['./camrail-details-bill.component.css']
})
export class CamrailDetailsBillComponent {
  billItems : any
  totalAmount : any;
  totalItems : any;
  date : any;
  name : any;
  matricule : any;

  constructor(
    private billService : BillService,
    private router :Router,
    private datePipe : DatePipe
  ){
    billService.detailsBill(String(localStorage.getItem("billId"))).subscribe((data)=>{
      this.billItems = data.billItems
      this.totalAmount = data.totalAmount
      this.totalItems = data.totalItems
      this.date = this.datePipe.transform((new Date),'dd/MM/yyyy h:mm:ss')
      this.matricule = localStorage.getItem('matricule')
      this.name = localStorage.getItem('username')
    })
  }
  cancelBill(){
    this.billService.cancelBill(String(localStorage.getItem("billId"))).subscribe((data)=>{
      console.log(data);
      this.router.navigate(["camrailHome"])
    })
  }
  backToBill(){
    
    this.router.navigate(["camrailHome/camrailNewBill"])
  }
  printBill(){
    let printContents = document.getElementsByClassName("printBill");
     let originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents[0].innerHTML;

     window.print();

     document.body.innerHTML = originalContents;
     this.router.navigate(['camrailHome/camrailItemsList'])
  

  }
  
    
}
