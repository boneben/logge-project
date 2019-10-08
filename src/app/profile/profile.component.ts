import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { __await } from 'tslib';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  editForm: any;
  editingInfo: boolean = false;
  user: any;

  constructor(private formBuilder: FormBuilder, private _auth: AuthService) { }

  ngOnInit() {

    this.isLoggedIn();
    this._auth.getUser().subscribe(data => {
     this.user = data;
     console.log(this.user)
    })

    this.editForm = this.formBuilder.group({
      'firstName': [''],
      'lastName': [''],
      'email': [''],
      'password': [''],
      'billingAddress': [''],
      'billingPostalNumber': [''],
      'billingCity': [''],
      'billingCountry': [''],
      'shippingAddress': [''],
      'shippingPostalNumber': [''],
      'shippingCity': [''],
      'shippingCountry': ['']
    })
  }

  isLoggedIn = () => {
    this._auth.isLoggedIn();
  }


    cancel() {
      this.editingInfo = false;
    }

    updateInfo() {
      this._auth.updateUser(this.editForm.value).subscribe(data => {
        const values = Object.keys(data).map(key => data[key]);
        const success = values.join(",");

        if(success) {
          this.editingInfo = false;
        }
      })
    }

}
