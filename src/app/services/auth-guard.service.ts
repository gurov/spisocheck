import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthGuardService implements CanActivate {

    isLoggedIn = true;

    constructor(private router: Router, private angularFireAuth: AngularFireAuth) {
    }

    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (!this.angularFireAuth.auth.currentUser) {
            this.router.navigate(['/login']);
        }

        return !!this.angularFireAuth.auth.currentUser;
    }
}
