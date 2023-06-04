import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  signinform : any; 

  constructor(
    private userService : UserService,
  ){}

  ngOnInit(): void {

  this.signinform = this.createForm() 

  }
  createForm():FormGroup{
    return new FormGroup({
      matricule: new FormControl("",[Validators.required]),
      cni: new FormControl("",[Validators.required]),
      
    })
  }
  signin() : void{
    this.userService.signin(this.signinform.value.matricule, this.signinform.value.cni)
    .subscribe((msg)=>{
      console.log(msg)
    })
    console.log (this.signinform.value)

  }

}
