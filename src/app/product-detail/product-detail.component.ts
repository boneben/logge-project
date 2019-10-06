import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  currentProduct: Object;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {

    //Params ID
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
    })

    //Hämtar produktdata med nID
    this.http.get('http://localhost:3000/products/' + this.productId).subscribe(data => {
      this.currentProduct = data['product']
    })

  };

}
