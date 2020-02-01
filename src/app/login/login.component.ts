import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

    userEmail: string;
    userPassword: string;
    connectionForm;
    initialHeights;

    constructor(private authService: AuthService,
                private router: Router,
                private formBuilder: FormBuilder) {
        this.connectionForm = this.formBuilder.group({
            email: '',
            password: ''
        });

        this.initialHeights = {
            html: document.getElementsByTagName('html')[0].style.height,
            body: document.getElementsByTagName('body')[0].style.height,
        };
    }

    ngOnInit() {
        document.getElementsByTagName('html')[0].style.height = "100%";
        document.getElementsByTagName('body')[0].style.height = "100%";
    }

    ngOnDestroy() {
        document.getElementsByTagName('html')[0].style.height = this.initialHeights.html;
        document.getElementsByTagName('body')[0].style.height = this.initialHeights.body;
    }

    onSubmit(customerData) {
        // Process checkout data here
        if(customerData.email && customerData.password) {
            this.userEmail = customerData.email;
            this.userPassword = customerData.password;
        }

        this.authService.validate(this.userEmail, this.userPassword)
            .then((response) => {
                console.warn('Authentication success');
                this.authService.setUserInfo({'user' : response['user']});
                this.router.navigate(['']);

            },
                  (response) => {
                      console.warn('Authentication failed : ' + response.message);
                  })

        this.connectionForm.reset();
    }
}
