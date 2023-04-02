import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
/*

@Component({
  selector: 'app-angular-fire-auth-guard',
  templateUrl: './angular-fire-auth-guard.component.html',
  styleUrls: ['./angular-fire-auth-guard.component.css']
})
export class AngularFireAuthGuardComponent {

}*/
@Injectable()
export class AuthGuard {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
