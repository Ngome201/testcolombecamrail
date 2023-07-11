import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  countClickedEB: boolean = true //indicates if the list of EB is already fetched
  countClickedB: boolean = true  //indicates if the list of B is already fetched
  countClickedA: boolean = true  //indicates if the list of A is already fetched
  exerciseBooks : any
  books : any
  accessories : any
  isActive : string
  constructor(
    private itemService : ItemService,
    private stockService : StockService
  ){
    this.isActive = ""
  }
  setExerciseBook(){
     
    if (this.countClickedEB ==true){
      this.exerciseBooks =this.itemService.listItems("EXERCISE_BOOK")
      this.isActive = "EXERCISE_BOOK"
      this.countClickedEB = false
    }         
    else 
      this.isActive = "EXERCISE_BOOK"
    

  }
  setBook(){
     
    if (this.countClickedB ==true){
      this.books =this.itemService.listItems("BOOK")
      this.isActive = "BOOK"
      this.countClickedB = false
    }         
    else 
      this.isActive = "BOOK"
          
  }
  setAccessory(){
    if (this.countClickedA ==true){
      this.accessories =this.itemService.listItems("ACCESSORY")
      this.isActive = "ACCESSORY"
      this.countClickedA =false
    }          
    else 
      this.isActive = "ACCESSORY"
          
  }
}
