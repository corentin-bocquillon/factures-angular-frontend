import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    userEmail: string;
    userPassword: string;
    connectionForm;

    constructor(private authService: AuthService,
                private router: Router,
                private formBuilder: FormBuilder) {
        this.connectionForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }

    ngOnInit() {
    }

    login(){
    }

    onSubmit(customerData) {
        // Process checkout data here
        if(customerData.email && customerData.password) {
            console.warn('testq');
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
                      console.warn('Authentication failed.');
                  })

        console.log('Login has been submitted', customerData);

        this.connectionForm.reset();
    }
}
