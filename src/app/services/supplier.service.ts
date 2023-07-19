import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,tap, first, Observable, BehaviorSubject } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import {User} from '../interfaces/User'
import { VariablesService } from './variables.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  
  supplierUrl : any
  httpOptions : {headers : HttpHeaders} = {headers:new HttpHeaders({'Content-Type': 'application/json'})}
  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router,
    private variables : VariablesService) {
      this.supplierUrl = variables.url+"supplier"
     }

  saveSupplier(data : any):Observable<any>{
    console.log(data)
    return this.http
                .post<any>(`${this.supplierUrl}/saveSupplier`,data,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<any>("cannot be saved"))
                );
  }
  supplierList():Observable<any>{
    return this.http
                .get<any>(`${this.supplierUrl}/suppliersList`,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<any>("list cannot be retrieved"))
                );
  }
  deleteSupplier(supplierId : any):Observable<any> {
    return this.http
                .delete<any>(`${this.supplierUrl}/deleteSupplier/${supplierId}`,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<any>("instance cannot be deleted"))

                )
  }
  editSupplier(supplierId : any):Observable<any> {
    return this.http
                .get<any>(`${this.supplierUrl}/editSupplier/${supplierId}`,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<any>("instance cannot be retrieved"))
                )
  }

  updateSupplier(data : any):Observable<any> {
    return this.http
                .put<any>(`${this.supplierUrl}/editSupplier`,data,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<any>("instance cannot be deleted"))

                )
  }
}
