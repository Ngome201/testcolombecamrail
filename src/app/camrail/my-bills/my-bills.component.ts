import { Component } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';
import { CommandListComponent } from 'src/app/staff/command-list/command-list.component';

@Component({
  selector: 'app-my-bills',
  templateUrl: './my-bills.component.html',
  styleUrls: ['./my-bills.component.css']
})
export class MyBillsComponent {
  isActive : any;
  commands : any;
  billItems : any;
  user : any;
  date:any;
  totalAmount : any;
  totalItems : any;
  commandId : any;
  matricule : any

  constructor(
    private commandService : CommandService
  ){
    this.matricule = localStorage.getItem('matricule')
    this.commandService.myCommandList(this.matricule).subscribe((commandList)=>{
      this.commands = commandList;
      this.isActive = 'commandList'

    })
  }
  commandDetails(commandId : String,totalItems:number,totalAmount:number,createdAt :any){
    this.isActive  = "detailsCommand"
    this.totalItems = totalItems;
    this.totalAmount = totalAmount
    this.commandId = commandId
    this.date = createdAt

    this.billItems = this.commandService.detailsCommand(commandId).subscribe((data)=>{
      this.billItems = data.billItems;
      this.user = data.user
    })

  }
  print(){
    this.commandService.print()
  }
  back(){
    this.isActive = 'commandList'
  }
}
