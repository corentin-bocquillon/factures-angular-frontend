import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Factures';

    constructor(private authService: AuthService,
                private router: Router) { }

    isLoggedIn() {
        return this.authService.isAuthenticated();
    }

    logout() {
        this.authService.logout();
        localStorage.setItem('userInfo', null);
        this.router.navigate(['login']);
    }
}
