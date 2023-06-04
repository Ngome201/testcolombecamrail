import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent {
  username : any
  matricule : any
  
  constructor(){
    this.username = localStorage.getItem('username')
    this.matricule = localStorage.getItem('matricule')
  }
}
