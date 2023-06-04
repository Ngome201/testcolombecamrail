import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import {catchError, Observable,first, tap} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CommandService {
  commandUrl = "https://colombe-api.onrender.com/colombe/api/v0/command";
  httpOptions : {headers :HttpHeaders} = {headers:new HttpHeaders({'content-Type':'application/json'})}

  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router
  ) { }
  
  commandList():Observable<any>{
    return this.http
                .get<any>(`${this.commandUrl}/commandList`,this.httpOptions)
                .pipe(
                  catchError (this.errorHandlerService.handleError<any>('cannot create fetch command'))
                )
  }
  sendCommand(commandId:String):Observable<any>{
    return this.http
                .get<any>(`${this.commandUrl}/sendCommand/${commandId}`,this.httpOptions)
                .pipe(
                  catchError (this.errorHandlerService.handleError<any>('cannot create fetch command'))
                )
  }
  detailsCommand(commandId:String):Observable<any>{
    return this.http
                .get<any>(`${this.commandUrl}/detailsCommand/${commandId}`,this.httpOptions)
                .pipe(
                  catchError (this.errorHandlerService.handleError<any>('cannot create fetch command'))
                )
  }
  
}
