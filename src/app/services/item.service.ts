import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
export class ItemService {
  itemUrl : any
  // itemUrl = 'http://localhost:3000/colombe/api/v0/item'
  httpOptions : {headers :HttpHeaders} = {headers:new HttpHeaders({'content-Type':'application/json'})}

  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router,
    private variables : VariablesService) {
      this.itemUrl = variables.url+"item"
    }
  saveExerciseBook(exerciseBook : Omit<ExerciseBook,'id'>) : Observable <any>{
    console.log(exerciseBook)
    return this.http
                .post<any>(`${this.itemUrl}/saveExerciseBook`,exerciseBook,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<ExerciseBook>('save Item'))
                )
  }
  saveBook(book : Omit<Book,'id'>) : Observable <any>{
    return this.http
                .post<any>(`${this.itemUrl}/saveBook`,book,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<Book>('save Item'))
                )
  }
  saveAccessory(accessory : Omit<Accessory,'id'>) : Observable <any>{
    return this.http
                .post<any>(`${this.itemUrl}/saveAccessory`,accessory,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<Accessory>('save Item'))
                )
  }
  listItems(category : String): Observable<any>{
    console.log('fetched')
    return this.http
    .get<any>(`${this.itemUrl}/listItems/${category}`,{responseType:"json"})
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>('list cannot be retrieved'))
    );
  }
  editExerciseBook(id : Pick <ExerciseBook,'id'>) : Observable<ExerciseBook>{
   let itemid = String(id)
    return this.http
          .get<ExerciseBook>(`${this.itemUrl}/editExerciseBook/${itemid}`,this.httpOptions)
          .pipe(
            catchError (this.errorHandlerService.handleError<ExerciseBook>('item seems to be not found'))
          )
  }
  editBook(id : Pick <Book,'id'>) : Observable<Book>{
    let itemid = String(id)

     return this.http
           .get<Book>(`${this.itemUrl}/editBook/${itemid}`,this.httpOptions)
           .pipe(
             catchError (this.errorHandlerService.handleError<Book>('item seems to be not found'))
           )
   }
  editAccessory(id : Pick <Accessory,'id'>) : Observable<Accessory>{
   let itemid = String(id)
    return this.http
          .get<Accessory>(`${this.itemUrl}/editAccessory/${itemid}`,this.httpOptions)
          .pipe(
            catchError (this.errorHandlerService.handleError<Accessory>('item seems to be not found'))
          )
  }
  updateExerciseBook(exerciseBook : any):Observable<any>{
    return this.http
            .put<any>(`${this.itemUrl}/updateExerciseBook`,exerciseBook,this.httpOptions)
            .pipe(
              first(),
              catchError(this.errorHandlerService.handleError<any>('error occured'))
            )
  }
  updateBook(book : any):Observable<any>{
    return this.http
            .put<any>(`${this.itemUrl}/updateBook`,book,this.httpOptions)
            .pipe(
              first(),
              catchError(this.errorHandlerService.handleError<any>('error occured'))
            )
  }
  updateAccessory(accessory : any):Observable<any>{
    return this.http
            .put<any>(`${this.itemUrl}/updateAccessory`,accessory,this.httpOptions)
            .pipe(
              first(),
              catchError(this.errorHandlerService.handleError<any>('error occured'))
            )
  }
  deleteAccessory(id : any):Observable<any>{
    return this.http
            .delete<any>(`${this.itemUrl}/deleteAccessory/${id}`,this.httpOptions)
            .pipe(
              first(),
              catchError(this.errorHandlerService.handleError<any>('error occured'))
            )
  }
  deleteExerciseBook(id : any):Observable<any>{
    return this.http
            .delete<any>(`${this.itemUrl}/deleteExerciseBook/${id}`,this.httpOptions)
            .pipe(
              first(),
              catchError(this.errorHandlerService.handleError<any>('error occured'))
            )
  }
  deleteBook(id : any):Observable<any>{
    return this.http
            .delete<any>(`${this.itemUrl}/deleteBook/${id}`,this.httpOptions)
            .pipe(
              first(),
              catchError(this.errorHandlerService.handleError<any>('error occured'))
            )
  }
}
