import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import {catchError, Observable,first, tap} from 'rxjs'
import {ExerciseBook} from '../interfaces/ExerciseBook'
import {Book} from '../interfaces/Book'
import { Accessory } from '../interfaces/Accessory';
import { VariablesService } from './variables.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  
  stockUrl : any
  httpOptions : {headers :HttpHeaders} = {headers:new HttpHeaders({'content-Type':'application/json'})}

  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router,
    private variables : VariablesService) { 
      this.stockUrl = variables.url+'stock'
    }

  saveStockAccessory(accessoryId: any, stock : any):Observable<any>{
    
    return this.http
               .post<any>(`${this.stockUrl}/saveStockAccessory/${accessoryId}`,stock,this.httpOptions)
               .pipe(
                 first(),
                 catchError(this.errorHandlerService.handleError<any>('error occured'))
               )
  }
  saveStockBook(bookId: any, stock : any):Observable<any> {
    
    return this.http
    .post<any>(`${this.stockUrl}/saveStockBook/${bookId}`,stock,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }
  saveStockExerciseBook(exerciseBookId: any, stock : any):Observable<any> {
  
    return this.http
    .post<any>(`${this.stockUrl}/saveStockExerciseBook/${exerciseBookId}`,stock,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }
  listStockBook(stockId : any){
    return this.http
    .get<any>(`${this.stockUrl}/listStockBook/${stockId}`,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }
  globalListStockBook(){
    return this.http
    .get<any>(`${this.stockUrl}/globalListStockBook`,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }
  listStockExerciseBook(stockId : any){
    return this.http
    .get<any>(`${this.stockUrl}/listStockExerciseBook/${stockId}`,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }
  globalListStockExerciseBook(){
    return this.http
    .get<any>(`${this.stockUrl}/globalListStockExerciseBook`,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }
  listStockAccessory(stockId : any){
    return this.http
    .get<any>(`${this.stockUrl}/listStockAccessory/${stockId}`,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }
  globalListStockAccessory(){
    return this.http
    .get<any>(`${this.stockUrl}/globalListStockAccessory`,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('error occured'))
    )
  }


}
