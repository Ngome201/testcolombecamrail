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
  printTag : any;
  cancelTag : any;
  validateTag : any;
  backTag : any;
  searchTag : any;
  billId = localStorage.getItem("billId")


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

      this.printTag = document.getElementById("printTag")
      if(this.printTag!=null) this.printTag.style.display = "none"
      
    })
  }
  addBillItem(billItemId:number){
    const billId = localStorage.getItem("billId");
    
    this.billService.addBillItem(String(billId),String(billItemId))
                    .subscribe((data)=>{
                      console.log(data)

                    })
    
  }
  decBillItem(billItemId:number){
    const billId = localStorage.getItem("billId");
    this.billService.decBillItem(String(billId),String(billItemId))
                    .subscribe((data)=>{
                      console.log(data)

                    })
  }
  deleteBillItem(billItemId:number){
    const billId = localStorage.getItem("billId");
    this.billService.deleteBillItem(String(billId),String(billItemId))
                    .subscribe((data)=>{
                      console.log(data)

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
     this.router.navigate(['camrailHome'])

  }
  validateBill(){
    this.billId = localStorage.getItem('billId')
    if (this.billId == null) {
      window.alert(" there's no current bill available ")
      
    } else {
      if(window.confirm("are you sure you want to validate your bill ?")){
        
      this.billService.validateBill(String(localStorage.getItem("billId")),
                                    String(localStorage.getItem("matricule"))).subscribe((data)=>{
                                      console.log(data);
                                    })
      this.cancelTag = document.getElementById("cancelBill")
      this.cancelTag.style.display = "none"

      this.backTag = document.getElementById("backToBill")
      this.backTag.style.display = "none"

      this.printTag = document.getElementById("printTag")
      this.printTag.style.display = "block"

      this.validateTag = document.getElementById("validateTag")
      this.validateTag.style.display = "none"
      
      this.searchTag = document.getElementById("myInput")
      this.searchTag.style.display = "none"
      }
    }
  }
    
}
