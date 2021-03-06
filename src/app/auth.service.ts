import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient,
                private router: Router) { }

    public isAuthenticated() : boolean {
        let userData = localStorage.getItem('userInfo')
        if(userData && JSON.parse(userData)){
            return true;
        }
        return false;
    }

    public setUserInfo(user){
        localStorage.setItem('userInfo', JSON.stringify(user));
    }

    public validate(email, password) {
        console.warn('Validation in progress…');
        return this.http.post('/api/authenticate', {'username' : email, 'password' : password}).toPromise()
    }

    public logout() {
        if (!this.isAuthenticated()) {
            return;
        }

        this.http.get('/api/logout');
        localStorage.setItem('userInfo', null);
        this.router.navigate(['login']);
    }
}
