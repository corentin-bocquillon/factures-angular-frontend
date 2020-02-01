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
                let body = res.json()

                if (res) {
                    this.profileForm.setValue({
                        companyName: body.companyName,
                        companyAddress: body.companyAddress,
                        companyNumber: body.companyNumber,
                        phoneNumber: body.phoneNumber
                    });
                }
            });
    }
}
