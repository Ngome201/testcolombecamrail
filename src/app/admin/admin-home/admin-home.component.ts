import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {
  username : any
  matricule : any
  isAuthenticated = false
  constructor(private userService : UserService){
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
