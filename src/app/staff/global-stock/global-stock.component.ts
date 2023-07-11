import { Component } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-global-stock',
  templateUrl: './global-stock.component.html',
  styleUrls: ['./global-stock.component.css']
})
export class GlobalStockComponent {
  countClickedEB: boolean = true //indicates if the list of EB is already fetched
  countClickedB: boolean = true  //indicates if the list of B is already fetched
  countClickedA: boolean = true  //indicates if the list of A is already fetched
  stocks : any
  exerciseBookStocks : any
  bookStocks : any
  accessoryStocks : any

  constructor(
    private stockService : StockService
  ){
  }
  setExerciseBook(){
     
    if (this.countClickedEB ==true){
      this.stockService.globalListStockExerciseBook().subscribe(
        (data)=>{
          this.exerciseBookStocks = data
        }
      )
      this.countClickedEB = false
    }         
    this.stocks = this.exerciseBookStocks
    
  }
  setBook(){
     
    if (this.countClickedB ==true){
      this.stocks =this.stockService.globalListStockBook().subscribe(
        (data)=>{
          this.bookStocks = data
        }
      )
      this.countClickedEB = false
    }
    this.stocks = this.bookStocks
          
  }
  setAccessory(){
    if (this.countClickedA ==true){
      this.stocks =this.stockService.globalListStockAccessory().subscribe(
        (data)=>{
          this.accessoryStocks = data
        }
      )
      this.countClickedEB = false
    }
    this.stocks = this.accessoryStocks
              
  }
}
