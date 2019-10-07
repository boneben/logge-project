import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Item } from '../item';
import { CartComponent } from '../cart/cart.component'
import { Source } from 'webpack-sources';
import { observable, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  cart: any[] = [];
  subscription: Subscription
  testCart: Array<any> = [];
  
  

  constructor(private productService: ProductService) { 
    this.subscription = this.productService.getCart().subscribe(subscriber => {
      if(subscriber) {
        this.cart = JSON.parse(localStorage.getItem('cart'));
        this.cart.push(subscriber)
        this.testCart = this.cart.slice(-1)[0] 
        console.log(this.testCart)
        this.testCart = subscriber
        console.log(this.cart)
        // for (let i = 0; i < subscriber.length; i++) {
        //   console.log(subscriber[i].product)
        //   console.log(subscriber[i].quantity)
        // }
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
    
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
