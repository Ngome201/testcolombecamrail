import { Component } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.css']
})
export class CommandListComponent {
  isActive : any
  commands : any
  billItems : any
  user : any
  totalAmount : any;
  totalItems : any;
  date : any;
  unsufficient : any;
  commandId : any
  constructor(
    private commandService : CommandService,
  ){ 
    this.isActive = 'commandList'
    this.commandService.unDeliveredCommandList().subscribe((commandList)=>{
      this.commands = commandList;

    })
  }


  setUndelivered(){
    this.isActive = "commandList"
    this.commandService.unDeliveredCommandList().subscribe((commandList)=>{
      this.commands = commandList;

    })
  }
  setDelivered(){
    this.isActive = "commandList"
    this.commandService.deliveredCommandList().subscribe((commandList)=>{
      this.commands = commandList;

    })
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
  sendCommand(commandId:string){

    if(window.confirm('are you sure that you want to send this command?')){

      this.commandService.sendCommand(commandId).subscribe((data)=>{
        console.log(data)
            if (data.msg =='unsufficient') {
              this.unsufficient = data.unsufficient
              console.log(data)
              this.isActive = 'unsufficient'
            } else {
              window.alert(data.msg);
            }
      })
      this.isActive="commandList"
    }
  }

  print(){
    this.commandService.print()
    }
}
