import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Item } from '../item';
import { CartComponent } from '../cart/cart.component'
import { Source } from 'webpack-sources';
import { observable, Observable, Subscription } from 'rxjs';
import { element } from 'protractor';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  cart: any[] = [];
  subscription: Subscription
  testCart: Array<any> = [];

  loginForm: any;
  isSubmittedLogin: boolean;
  incorrectCreds: boolean = false;

  signupForm: any;
  isSubmitted: boolean = false;
  error: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private _auth: AuthService, private productService: ProductService) {
    this.subscription = this.productService.getCart().subscribe(subscriber => {
      if(subscriber) {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.cart.push(subscriber)
      } else {
        this.cart = JSON.parse(localStorage.getItem('cart'));
      }
    })
   }

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
          this.router.navigateByUrl('profile');
          this.closeModal();
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
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
