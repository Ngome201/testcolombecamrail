import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandService } from '../services/command.service';

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
  commandId: any;
  searchTag :any
  tel : any
  shippingAddress : any
  constructor(
    private commandService : CommandService,
    private router : Router,
    private activatedRoute : ActivatedRoute,
    private datePipe : DatePipe
  ){
      this.commandId =this.activatedRoute.snapshot.params['commandId'];

      commandService.detailsCommand(this.commandId).subscribe((data)=>{
      this.billItems = data.billItems
      this.totalAmount = data.totalAmount
      this.totalItems = data.totalItems
      this.date = data.command.createdAt
      this.matricule = data.user.matricule
      this.name = data.user.username + " " +data.user.lastname
      this.shippingAddress = data.user.shippingAddress
      this.tel = data.user.tel


      localStorage.removeItem("billId")
      this.searchTag = document.getElementById('myInput')
      this.searchTag.style.display = "none"
    })
  }

  printBill(){
     window.print();
     setTimeout(() => {
     window.history.back()
      
     },20000);

  }
}
