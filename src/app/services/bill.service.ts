import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import {catchError, Observable,first, tap} from 'rxjs'
import { Bill } from '../interfaces/Bill';
import { VariablesService } from './variables.service';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  billUrl : any
  // billUrl = 'http://localhost:3000/colombe/api/v0/bill'
  httpOptions : {headers :HttpHeaders} = {headers:new HttpHeaders({'content-Type':'application/json'})}

  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router,
    private variables : VariablesService) {
      this.billUrl = variables.url+"bill" 
    }
  addBill():Observable<Bill>{
    return this.http
                .get<Bill>(`${this.billUrl}/addBill`,this.httpOptions)
                .pipe(
                  catchError (this.errorHandlerService.handleError<Bill>('cannot create new bill'))
                )
  }

  addBillItem(billId:String,
              itemId:String,
              itemType:String):Observable<any>{
    return this.http
    .get<any>(`${this.billUrl}/addBillItem/${billId}/${itemId}/${itemType}`,
                          this.httpOptions)
    .pipe(
      catchError (this.errorHandlerService.handleError<any>('item seems to be not found'))
    )
  }

  decBillItem(billId:String,
              itemId:String,
              itemType:String):Observable<any>{
    return this.http
    .get<any>(`${this.billUrl}/decBillItem/${billId}/${itemId}/${itemType}`,
                          this.httpOptions)
    .pipe(
      catchError (this.errorHandlerService.handleError<any>('item seems to be not found'))
    )
  }

  validateBill(billId:String,
              matricule:String
              ):Observable<any>{
    return this.http
    .get<any>(`${this.billUrl}/validateBill/${billId}/${matricule}`,
                          this.httpOptions)
    .pipe(
      catchError (this.errorHandlerService.handleError<any>('item seems to be not found'))
    )
  }
  
  detailsBill(billId:String):Observable<any>{
    return this.http
    .get<any>(`${this.billUrl}/detailsBill/${billId}`,
                          this.httpOptions)
    .pipe(
      catchError (this.errorHandlerService.handleError<any>('item seems to be not found'))
    )
  }

  cancelBill(billId:String):Observable<any>{
    return this.http
    .get<any>(`${this.billUrl}/cancelBill/${billId}`,
                          this.httpOptions)
    .pipe(
      catchError (this.errorHandlerService.handleError<any>('item seems to be not found'))
    )
  }
}
