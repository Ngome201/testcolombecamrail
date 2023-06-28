import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private userServie : UserService, private router:Router) { }
  canActivate(): Observable<boolean> {
    if(!this.userServie.isUserLoggedIn$.value){
      this.router.navigate(["signIn"])
    }
    return this.userServie.isUserLoggedIn$
      
  }
}
