import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError,tap, first, Observable, BehaviorSubject } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
import {User} from '../interfaces/User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl ="https://colombe-api.onrender.com/colombe/api/v0/user"
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false)
  userId : any
  role : any
  httpOptions : {headers : HttpHeaders} = {headers:new HttpHeaders({'Content-Type': 'application/json'})}
  
  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router) { }
    
  signup(user : Omit <User,"id">): Observable<User>{
      
      return this.http
                .post<User>(`${this.userUrl}/saveUser`,user,this.httpOptions)
                .pipe(
                  first(),
                  tap(()=>{
                    this.router.navigate(["adminHome"]) 
                  }),
                  catchError(this.errorHandlerService.handleError<User>("signup"))
                );
    }

  signin(matricule : Pick <User,"matricule">, password : Pick <User,"cni">): Observable<{
    token : string; userId : Pick <User,"id">
  }> {
      
      return this.http
      .post<any>(`${this.userUrl}/signIn`,{matricule,password},this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject : {token : string; 
                            userId : Pick <User,"id">, 
                            role : Pick <User,"role">,
                            matricule : Pick <User,"matricule">,
                            username : Pick <User,"username">,
                            cni : Pick<User,"cni">
                          })=>{
          this.userId = tokenObject.userId;
          localStorage.setItem("token",tokenObject.token)
          localStorage.setItem("username",String(tokenObject.username))
          localStorage.setItem("matricule",String(tokenObject.matricule))
          localStorage.setItem("cni",String(tokenObject.cni))
          
          this.isUserLoggedIn$.next(true);
          
          this.role = tokenObject.role;
          if (this.role == "admin"){
            this.router.navigate(["adminHome"])
          }
          else if(this.role == "camrail"){
            this.router.navigate(["camrailHome"])
          }
          else {
            this.router.navigate(['staffHome'])
          }
        }),
        catchError(this.errorHandlerService.handleError<{
          token : string; userId : Pick <User,"id">
        }>("signup"))
      );
    }
  
  getUsers (): Observable<any>{
    return this.http
      .get<User[]>(`${this.userUrl}/getUsers`,{responseType:"json"})
      .pipe(
        catchError(this.errorHandlerService.handleError<User[]>('empty list'))
      )
  }
  getCamrails (): Observable<any>{
    return this.http
      .get<User[]>(`${this.userUrl}/getCamrails`,{responseType:"json"})
      .pipe(
        catchError(this.errorHandlerService.handleError<User[]>('empty list'))
      )
  }
  deleteUser(id : Pick <User,'id'>) : Observable<{}>{
    let userid = String(id)
    return this.http
    .delete<User>(`${this.userUrl}/deleteUser/${userid}`,this.httpOptions)
    .pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>('user not found'))
    )
  }
  editUser(id : Pick<User,"id">) : Observable<User>{
    let userid = String(id)
    
    return this.http
    .get<User>(`${this.userUrl}/editUser/${userid}`,this.httpOptions)
    .pipe(
      catchError(this.errorHandlerService.handleError<User>('user seems to be not found'))

    )
  }
  updateUser(user : any):Observable<any>{
    return this.http
               .put<any>(`${this.userUrl}/updateUser`,user,this.httpOptions)
               .pipe(
                first(),
                catchError(this.errorHandlerService.handleError<User>('update'))
               )
  }


}
