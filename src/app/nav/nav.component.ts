import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Event, $ } from 'jquery';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  loginForm: any;
  isSubmittedLogin: boolean;
  incorrectCreds: boolean = false;

  signupForm: any;
  isSubmitted: boolean = false;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private _auth: AuthService) { }

  scrollToFooter() {
    window.scrollTo({
      top: window.outerWidth,
      behavior: "smooth"
    })
  }



  ngOnInit() {
    
    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
    
    this.signupForm = this.formBuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'birthDate': ['', Validators.required],
      'billingAddress': ['', Validators.required],
      'billingPostalNumber': ['', Validators.required],
      'billingCity': ['', Validators.required],
      'billingCountry': ['', Validators.required],
      'shippingAddress': ['', Validators.required],
      'shippingPostalNumber': ['', Validators.required],
      'shippingCity': ['', Validators.required],
      'shippingCountry': ['', Validators.required]
    })

  }

  closeModal() {
    let modal = document.getElementById('closeModal')

    modal.click();
  }

  login() {
    this.isSubmittedLogin = true;

    if(this.loginForm.invalid) {
      return;
    }

    this._auth.login(this.loginForm.value)
      .subscribe((res) => {
        localStorage.setItem("ACCESS_TOKEN", res["token"]);
        localStorage.setItem("USER_ID", res["userId"]);
        localStorage.setItem("USER_EMAIL", res["email"]);

        if(res["success"]) {
          this.closeModal();
          this.router.navigateByUrl('profile');
        }
      },(error) => {
        this.incorrectCreds = true;
      })
  }
  
  signup() {
    this.isSubmitted = true;

    if(this.signupForm.invalid) {
      return;
    }

    this._auth.signup(this.signupForm.value).subscribe((registerres) => {
      if(registerres["success"]) {
        this._auth.login(this.loginForm.value)
        .subscribe((res) => {
          localStorage.setItem("ACCESS_TOKEN", res["token"]);
          localStorage.setItem("USER_ID", res["userId"]);
          localStorage.setItem("USER_EMAIL", res["email"]);
  
          if(res["success"]) {
            this.router.navigateByUrl('profile'); 
          }
        },(error) => {
          this.incorrectCreds = true;
        })  
      } else {
        return;
      }
    })
  }

  logout() {
    this._auth.logout();
    this.router.navigateByUrl('/');
  }

}
