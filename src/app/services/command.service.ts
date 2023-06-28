import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import {catchError, Observable,first, tap} from 'rxjs'
import { VariablesService } from './variables.service';
@Injectable({
  providedIn: 'root'
})
export class CommandService {
  commandUrl :any
  // commandUrl = "http://localhost:3000/colombe/api/v0/command";
  httpOptions : {headers :HttpHeaders} = {headers:new HttpHeaders({'content-Type':'application/json'})}
  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router,
    private variables : VariablesService) {
      this.commandUrl = variables.url+"command" 
    }
  
  commandList():Observable<any>{
    return this.http
                .get<any>(`${this.commandUrl}/commandList`,this.httpOptions)
                .pipe(
                  catchError (this.errorHandlerService.handleError<any>('cannot create fetch command'))
                )
  }
  myCommandList(matricule : any):Observable<any>{
    return this.http
                .get<any>(`${this.commandUrl}/myCommands/${matricule}`,this.httpOptions)
                .pipe(
                  catchError(this.errorHandlerService.handleError<any>('cannot create fetch command'))
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
  print (){
    let printContents = document.getElementsByClassName("printCommand");
     let originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents[0].innerHTML;

     window.print();

     document.body.innerHTML = originalContents;
  
  }
}
