import { ServesEmploeeService } from 'src/app/serves/serves-emploee.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class GuardOneGuard implements CanActivate {
  constructor(
    private userService:ServesEmploeeService,
    private Router:Router,
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    let paesUser=this.userService.islogind();

    if(paesUser)
    {
return true;
    }
    else
    {
      this.Router.navigate(['/Login']);
      return false;
    }
  }
  
}
