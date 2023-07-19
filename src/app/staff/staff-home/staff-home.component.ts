import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-staff-home',
  templateUrl: './staff-home.component.html',
  styleUrls: ['./staff-home.component.css']
})
export class StaffHomeComponent implements OnInit{
  username : any
  matricule : any
  isAuthenticated = false
  
  constructor(private userService : UserService ,private router :Router){
    this.username = localStorage.getItem('username')
    this.matricule = localStorage.getItem('matricule')
  }
  ngOnInit(): void {
      this.userService.isUserLoggedIn$.subscribe((isLoggedIn)=>{
        this.isAuthenticated = isLoggedIn
      })
      
  }
  logout(){
    this.userService.logout()
  }
}
