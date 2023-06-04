import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title ='frontend';
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
      password: new FormControl("",[Validators.required]),
      
    })
  }
  signin() : void{
    this.userService.signin(this.signinform.value.matricule, this.signinform.value.password)
    .subscribe((msg)=>{
      console.log(msg)
    })
    console.log (this.signinform.value)

  }
}
