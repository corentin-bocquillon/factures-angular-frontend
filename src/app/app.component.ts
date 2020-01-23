import { Component } from '@angular/core';
import { AuthService } from 'auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Factures';

    constructor(private authService: AuthService) { }

    isLoggedIn() {
        return this.authService.isAuthenticated();
    }
}
