import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-save-user',
  templateUrl: './save-user.component.html',
  styleUrls: ['./save-user.component.css']
})
export class SaveUserComponent implements OnInit {
  signupform : any; 

  constructor(
    private userService : UserService,
  ){}

  ngOnInit(): void {

  this.signupform = this.createForm() 

  }
  createForm():FormGroup{
    return new FormGroup({
      username: new FormControl("",[Validators.required]),
      lastname: new FormControl("",[Validators.required]),
      matricule: new FormControl("",[Validators.required]),
      cni: new FormControl("",[Validators.required]),
      tel: new FormControl("",[Validators.required]),
      role: new FormControl("",[Validators.required]),
      address: new FormControl("",[Validators.required]),
      
    })
  }
  signup() : void{
    this.userService.signup(this.signupform.value)
    .subscribe((msg)=>{console.log(msg)})
    window.alert('user registerd successfully')
    console.log (this.signupform.value)

  }
}
