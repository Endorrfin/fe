import { Component, OnInit } from '@angular/core';
import {IProducts} from "../../models/product";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basket: IProducts[];
  basketSubscription: Subscription;

  constructor(
      private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.basketSubscription = this.productService.getProductFromBasket().subscribe((data) => {
      this.basket = data;
    });
  }

  plusItemFromBasket(item: IProducts) {
    item.quantity += 1;
    this.productService.updateProductToBasket(item).subscribe((data) => {})
  }

  minusItemFromBasket(item: IProducts) {
    if (item.quantity === 1) {
      this.productService.removeProductFromBasket(item.id).subscribe(() => {
        let idx = this.basket.findIndex((data) => data.id === item.id)
        this.basket.splice(idx, 1)
      });
    } else {
      item.quantity -= 1;
      this.productService.updateProductToBasket(item).subscribe((data) => {})
    }

  }

  ngOnDestroy() {
    if (this.basketSubscription) this.basketSubscription.unsubscribe();
  }

}
