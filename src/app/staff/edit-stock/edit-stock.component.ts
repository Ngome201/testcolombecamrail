import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StockService } from 'src/app/services/stock.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent {
  suppliers : any
  stocks : any
  activeBlock : any 
  category : any
  itemId : any

  constructor(private router : ActivatedRoute,
              private location : Location,
              private stockService : StockService,
              private supplierService : SupplierService){

    this.activeBlock =""
    this.itemId =this.router.snapshot.params['itemId']
    this.category = this.router.snapshot.params['category']
    this.supplierService.supplierList().subscribe(
      (data)=>{
        this.suppliers = data
      }
    )
  }
  
  setSaveOption(){
    this.activeBlock = "SAVE"

  }
  setListOption(){
    if (this.itemId!=null) {
      switch(this.category){
        case 'EXERCISE_BOOK':
          this.stockService.listStockExerciseBook(this.itemId)
          .subscribe((data)=>{
            this.stocks = data
          })
          break;
        case 'BOOK':
          this.stockService.listStockBook(this.itemId)
          .subscribe((data)=>{
            this.stocks = data

          })
          break;
        case 'ACCESSORY':
          this.stockService.listStockAccessory(this.itemId)
          .subscribe((data)=>{
            this.stocks = data

          })
          break;
        default :
        this.previousUrl()

      }
      
    }
    this.activeBlock = "LIST"
  }
  saveStock(data :any){
    if (this.itemId!=null) {
      switch(this.category){
        case 'EXERCISE_BOOK':
          this.stockService.saveStockExerciseBook(this.itemId,data)
          .subscribe((msg)=>{
            alert(msg.msg)
            this.previousUrl()
          })
          break;
        case 'BOOK':
          this.stockService.saveStockBook(this.itemId,data)
          .subscribe((msg)=>{
            alert(msg.msg)
            this.previousUrl()

          })
          break;
        case 'ACCESSORY':
          console.log(this.itemId,data)
          this.stockService.saveStockAccessory(this.itemId,data)
          .subscribe((msg)=>{
            alert(msg.msg)
            this.previousUrl()
          })
          break;

      }
      
    }
    
  }

 previousUrl(){
  this.location.back()
 }
}
