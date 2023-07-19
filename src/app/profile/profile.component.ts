import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user : any
  constructor(
    private userService : UserService

  ){
    this.setProfile()
  }
  setProfile(){
    this.userService.editUser(String(localStorage.getItem('id'))).subscribe(
      (data) =>{
        this.user = data
      }
    )
  }
}
