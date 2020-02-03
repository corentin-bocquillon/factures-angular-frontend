import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    profileForm = this.formBuilder.group({
            companyName: [''],
            companyAddress: [''],
            companyNumber: [''],
            phoneNumber: ['']
        });

    constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProfile();
    }

    onSubmit() {
        this.http.post<User>('/api/profile', this.getUser()).toPromise()
            .then(() => {
                this.getProfile();
            });
    }

    private getProfile() {
        // Get profile using api.
        // Set form initial value
        this.http.get<User>('/api/profile').toPromise()
            .then(user => {
                if (user) {
                    this.profileForm.setValue({
                        companyName: user.companyName,
                        companyAddress: user.companyAddress,
                        companyNumber: user.companyNumber,
                        phoneNumber: user.phoneNumber
                    });
                }
            });
    }

    private getUser(): User {
        return new User(this.profileForm.companyName.value,
                        this.profileForm.companyAddress.value,
                        this.profileForm.companyNumber.value,
                        this.profileForm.companyNumber.value);
    }
}
