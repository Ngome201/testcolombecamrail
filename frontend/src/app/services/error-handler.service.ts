import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
//service in order to catch errors during signing up
handleError<T> (operation = "operation", result?:T){
  return (error : any) : Observable <T> =>{

    console.log(`${operation} failed : ${error.message}`)
    return of(result as T)
  }
}
}
