import { Component } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent {
  activeBlock : string
  isActive : any
  commands : any
  billItems : any
  user : any
  totalAmount : any;
  totalItems : any;
  date : any
  commandId : any
  constructor(
    private commandService : CommandService,
  ){this.activeBlock ='UNDELIVERED'
    this.commandService.commandList().subscribe((commandList)=>{
      this.commands = commandList;
      this.isActive = 'commandList'

    })
  }


  setUndelivered(){
    this.isActive = "commandList"
    this.activeBlock = "UNDELIVERED"
  }
  setDelivered(){
    this.isActive = "commandList"
    this.activeBlock = "DELIVERED"
  }
  commandDetails(commandId : String,totalItems:number,totalAmount:number,createdAt :any){
    this.isActive  = "detailsCommand"
    this.totalItems = totalItems;
    this.totalAmount = totalAmount
    this.date = createdAt
    this.commandId = commandId
    this.billItems = this.commandService.detailsCommand(commandId).subscribe((data)=>{
      this.billItems = data.billItems;
      this.user = data.user
    })

  }
  sendCommand(commandId:String){
    window.confirm('are you sure that you want to send this command?')
    this.commandService.sendCommand(commandId).subscribe((data)=>{
      window.alert(data);
    })
    this.isActive="commandList"
    this.activeBlock='DELIVERED'
  }
  print(){
    let printContents = document.getElementsByClassName("printCommand");
     let originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents[0].innerHTML;

     window.print();

     document.body.innerHTML = originalContents;
  }
}
