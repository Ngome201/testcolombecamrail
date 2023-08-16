import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BillService } from 'src/app/services/bill.service';
import { ItemService } from 'src/app/services/item.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-camrail-home',
  templateUrl: './camrail-home.component.html',
  styleUrls: ['./camrail-home.component.css']
})
export class CamrailHomeComponent {
  username : any
  matricule : any
  cni : any
  printTag : any
  billId : any
  isAuthenticated = false
  user : any
  constructor(
    private itemService : ItemService,
    private billService : BillService,
    private router : Router,
    private userService : UserService

  ){
    this.username = localStorage.getItem('username')
    this.matricule = localStorage.getItem('matricule')
  }
  ngOnInit(): void {
    this.userService.isUserLoggedIn$.subscribe((isLoggedIn)=>{
      this.isAuthenticated = isLoggedIn
    })
   
    
}
  addBill(){
    if (localStorage.getItem("billId")==null) {
      this.billService.addBill()
                    .subscribe((bill)=>{
                      localStorage.setItem("billId",String(bill.id))
                      console.log(bill)
                    })
    }
    else{
      alert("a current bill is running please complete it")
      this.router.navigate(["camrailHome/camrailDetailsBill"])
    }
    
  }
 
  logout(){
      this.userService.logout()
  }
 

}