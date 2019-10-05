import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-productpage',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://localhost:3000/products').subscribe(data => {
      this.products = data['products']
    })
  }

  // Funktion som sorterar produkterna i en array //
  sortProducts(event) {
    let value = event.target.value
    if(value == 1) {
      this.products.sort((a,b) => a.name.localeCompare(b.name));
    } else if(value == 2) {
      this.products.sort((a, b) => a.price - b.price);
    } else if(value == 3) {
      this.products.sort((a, b) => b.price - a.price);
    } else {
      return
    }
  }



}
