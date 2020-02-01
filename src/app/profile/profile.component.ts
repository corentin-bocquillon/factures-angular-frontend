import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
    companyName = "company name";


    constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProfile();
    }

    onSubmit() {
        console.log("Profile submited!");
    }

    private getProfile() {
        // Get profile using api.
        // Set form initial value
        let profile = this.http.get('/api/profile').toPromise()
            .then(res => {
                if (res) {
                    console.warn(res);
                } else {
                    // Redirect to error page.
                }
            });
    }
}
