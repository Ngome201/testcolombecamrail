import { Component } from '@angular/core';
import { CommandService } from 'src/app/services/command.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  amountEncountered : any
  totalAdmins : any
  totalCamrails : any
  totalStaffs : any
  todayCommands : any 
  constructor(private commandService:CommandService){
    this.commandService.statistics().subscribe(
      (data) =>{
        this.amountEncountered = data.amountEncountered
        this.totalAdmins = data.totalAdmins
        this.totalCamrails = data.totalCamrails
        this.totalStaffs = data.totalStaffs
        this.todayCommands = data.todayCommands

      }
    )
  }
}
