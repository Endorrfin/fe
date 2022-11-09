import { Component, OnInit } from '@angular/core';
import {IProducts} from "../../models/product";
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productsDetail: IProducts;
  productSubscription: Subscription;


  constructor(
      private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    this.productSubscription = this.route.data.subscribe((data) => {
      console.log('PRODUCT-DETAIL', data);
      this.productsDetail = data['data'];
    })
  }

}
