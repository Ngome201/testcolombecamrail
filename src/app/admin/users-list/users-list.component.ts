import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import {User} from '../../interfaces/User'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  users : Observable <User[]> 
  user : any
  isActive : boolean = false

  constructor(
    private userService : UserService
  ){
    this.users = this.getUsers();
  }

  getUsers()  {
    return this.userService.getUsers()
  }

  deleteUser(id : any){
    let valid = window.confirm(`are you sure you want to delete user${id}`)
    if(valid){
      this.userService.deleteUser(id).subscribe(()=>{
        this.users = this.getUsers()
      })
    }
    else return
  }

  editUser(id : any){
    this.userService.editUser(id)
    .subscribe((data)=>{
      console.log(data)
     
      this.user = data
      this.isActive = true
    })
  }

  updateUser(data : any){
    console.log(data)
    this.userService.updateUser(data)
    .subscribe((msg)=>{
      console.log(msg)

    })
    window.alert('user was successfully updated')

    this.isActive = false
  }
 setActive(){
  this.isActive  = false
 }

}
