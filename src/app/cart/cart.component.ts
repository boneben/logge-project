import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'
import { Item } from '../item';
import { ProductService } from '../product.service';


@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

	items: Item[] = [];
	private total: number = 0;
	currentProduct: any;
	product: any;
	subscription: Subscription;
	id: any[] = [];

	constructor(private route: ActivatedRoute, private productService: ProductService) {}

	ngOnInit() {
		this.route.paramMap.subscribe(params => {
			let id = params.get('id');

			if (id) {

				this.productService.findOneProduct(id).subscribe((res) => {
					let result = res['product']

					const item: Item = {
						product: result,
						quantity: 1
					};
					if (localStorage.getItem('cart') == null) {
						let cart: any = [];
						cart.push(JSON.stringify(item));
						localStorage.setItem('cart', JSON.stringify(cart));
					} else {
						let cart: any = JSON.parse(localStorage.getItem('cart'));
						let index: number = -1;
						for (var i = 0; i < cart.length; i++) {
							let item: Item = JSON.parse(cart[i]);
							if (item.product._id == id) {
								index = i;
								break;
							}
						}
						if (index == -1) {
							cart.push(JSON.stringify(item));
							localStorage.setItem('cart', JSON.stringify(cart));
						} else {
							let item: Item = JSON.parse(cart[index]);
							item.quantity += 1;
							cart[index] = JSON.stringify(item);
							localStorage.setItem("cart", JSON.stringify(cart));
						}
					}
					this.productService.sendCart(this.items)
					this.loadCart();
				})
			} else {
				this.loadCart();
			}
		});
	}

	loadCart(): void {
		this.total = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
				product: item.product,
				quantity: item.quantity
			});
			this.total += item.product.price * item.quantity;
		};
	}

	remove(id: string): void {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		let index: number = -1;
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product._id == id) {
				cart.splice(i, 1);
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
		this.productService.clearCart();
	}

	updateQuantity(quantity: any, id: string) {
		let cart: any = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item: Item = JSON.parse(cart[i]);
			if (item.product._id == id) {
				item.quantity = quantity;
				cart[i] = JSON.stringify(item);
				localStorage.setItem("cart", JSON.stringify(cart));
				break;
			}
		}
		localStorage.setItem("cart", JSON.stringify(cart));
		this.loadCart();
	}

	onChange(quantity, id) {
		this.updateQuantity(quantity.target.value, id);
	}



}