import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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


    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.getProfile();
    }

    private onSubmit() {
        console.log("Profile submited!");
    }

    private getProfile() {
        // Get profile using api.
        // Set form initial value
    }
}
