import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: string;
  currentProduct: Object;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {

    //Params ID
    this.route.paramMap.subscribe(params => {
      this.productId = params.get('id')
    })

    //Hämtar produktdata med productId
    this.productService.findOneProduct(this.productId).subscribe(data => {
      this.currentProduct = data['product']
    })

  };

}
