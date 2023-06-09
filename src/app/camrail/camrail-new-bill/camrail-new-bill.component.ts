import { Component } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-camrail-new-bill',
  templateUrl: './camrail-new-bill.component.html',
  styleUrls: ['./camrail-new-bill.component.css']
})
export class CamrailNewBillComponent {
  shapes : string[] =['A6','A5','A4']
  types : string[] = ['HC','TP','GC','DL','SQ','PL','Dessin']
  pages : string[] = ['32p','50p','100p','120p','144p','200p','288p','300p','400p']
  levels : string[]=[]
  sections : string[] = ["Anglophone","Francophone"]
  
  countClickedEB: boolean = true //indicates if the list of EB is already fetched
  countClickedB: boolean = true  //indicates if the list of B is already fetched
  countClickedA: boolean = true  //indicates if the list of A is already fetched

  exerciseBooks : any
  books : any
  accessories : any
 
  keys : any
  isActive : number // determine the active Item which is been displayed
                    // 1:ExerciseBook   2:Book    3:Accessory
  activeBlock : string

  exerciseBook : any
  book : any
  accessory : any
  itemTag : any

  constructor(
    private itemService : ItemService,
    private billService : BillService
  ){
    this.isActive=0
    this.activeBlock ='table'
  }
   setEB(){
     
    if (this.countClickedEB ==true){
      this.exerciseBooks =this.itemService.listItems("EXERCISE_BOOK")
      this.isActive = 1
      this.countClickedEB = false
    }         
    else 
    {this.isActive = 1
    this.activeBlock ='table'}

  }
  setB(){
     
    if (this.countClickedB ==true){
      this.books =this.itemService.listItems("BOOK")
      this.isActive = 2
      this.countClickedB = false
    }         
    else {this.isActive = 2
      this.activeBlock ='table'}       
  }
  setA(){
    if (this.countClickedA ==true){
      this.accessories =this.itemService.listItems("ACCESSORY")
      this.isActive = 3
      this.countClickedA =false
    }         
    else {this.isActive = 3
      this.activeBlock ='table'}       
  }
  
  addQuantity(itemId : any, itemType : String){
    const billId = localStorage.getItem("billId");
    let quantity = (<HTMLInputElement>document.getElementById(String(itemId))).value
    alert(quantity)

    this.billService.addQuantity(String(billId),itemId,itemType,quantity)
    .subscribe((data)=>{
      console.log(data)

    })
  }

}
