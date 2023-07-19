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
export class UserService {
  userUrl :any
  isUserLoggedIn$ = new BehaviorSubject<boolean>(false)
  userId : any
  role : any
  httpOptions : {headers : HttpHeaders} = {headers:new HttpHeaders({'Content-Type': 'application/json'})}
  
  constructor(
    private http : HttpClient,
    private errorHandlerService : ErrorHandlerService,
    private router : Router,
    private variables : VariablesService) {
      this.userUrl = variables.url+"user"
     }
    
  signup(user : Omit <User,"id">): Observable<User>{
      
      return this.http
                .post<User>(`${this.userUrl}/saveUser`,user,this.httpOptions)
                .pipe(
                  first(),
                  catchError(this.errorHandlerService.handleError<User>("signup"))
                );
    }

  signin(matricule : Pick <User,"matricule">, cni : Pick <User,"cni">): Observable<any> {
      
      return this.http
      .post<any>(`${this.userUrl}/signIn`,{matricule,cni},this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject : {token : string; 
                            id : Pick <User,"id">, 
                            role : Pick <User,"role">,
                            matricule : Pick <User,"matricule">,
                            username : Pick <User,"username">
                            // cni : Pick<User,"cni">
                          })=>{ 
          this.userId = tokenObject.id;
          localStorage.setItem("token",tokenObject.token)
          localStorage.setItem("username",String(tokenObject.username))
          localStorage.setItem("matricule",String(tokenObject.matricule))
          localStorage.setItem("id",String(tokenObject.id))
          // localStorage.setItem("cni",String(tokenObject.cni))
          
          this.isUserLoggedIn$.next(true);
          
          this.role = tokenObject.role;
          if (this.role == "ADMIN"){
            this.router.navigate(["adminHome"])
          }
          else if(this.role == "CAMRAIL"){
            this.router.navigate(["camrailHome"])
          }
          else {
            this.router.navigate(['staffHome'])
          }
        }),
        catchError(this.errorHandlerService.handleError<{
          token : string
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

  editUser(id : string) : Observable<User>{
    
    return this.http
    .get<User>(`${this.userUrl}/editUser/${id}`,this.httpOptions)
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

  logout(){
    let bool = window.confirm('are you sure that you wat to logout?')
    if (bool) {
      
      localStorage.removeItem('token')
      this.isUserLoggedIn$.next(false);
      this.router.navigate(["signIn"])
    } 

  }

}
