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
    // this.commandService.statistics
  }
}
