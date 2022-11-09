import {Component, OnInit, OnDestroy} from '@angular/core';
import {IProducts} from "../../models/product";
import {Subscription} from "rxjs";
import {ProductsService} from "../../services/products.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {DialogBoxComponent} from "../dialog-box/dialog-box.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent implements OnInit, OnDestroy {
  products: IProducts[];
  productsSubscription: Subscription;

  basket: IProducts[];
  basketSubscription: Subscription;

  canEdit: boolean = false;
  canView: boolean = false

  constructor(
      private productsService: ProductsService,
      public dialog: MatDialog
      ) {}

  ngOnInit(): void {
    // some logic
    this.canEdit = true;

    this.productsSubscription = this.productsService.getProducts().subscribe((data) => {
      // console.log('PRODUCT', data);
      this.products = data;
    });

    this.basketSubscription = this.productsService.getProductFromBasket().subscribe((data) => {
      this.basket = data;
    });

  }

  deleteItem(id: number) {
    // console.log('ID', id);
    this.productsService.deleteProduct(id).subscribe(() => this.products.find((item) => {
      if (id === item.id) {
        let idx = this.products.findIndex((data) => data.id === id);
        this.products.splice(idx, 1);
      }
    }));
  }

  openDialog(product?: IProducts): void {
    // // I Variant
    // const dialogRef = this.dialog.open(DialogBoxComponent, {
    //   width: '700px',
    //   height: '250px',
    //   data: 123,
    // });

    // II Variant
    let dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '580px';
    dialogConfig.disableClose = true;
    dialogConfig.data = product;
    dialogConfig.data = {
      id: 11
    };

    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((data) => {
      if (data) {
        if (data && data.id)
          this.updateData(data);
        else
          this.postData(data);
      }
    });
  }

  postData(data: IProducts) {
    console.log('PRODUCTS => postDATA DATA', data);
    this.productsService.postProduct(data).subscribe((data) => this.products.push(data));
  }

  updateData(product: IProducts) {
    this.productsService.updateProduct(product).subscribe((data) => {
      this.products = this.products.map((product) => {
        if (product.id === data.id) return data;
        else return product;
      })
    });
  }

  addToBasket(product: IProducts) {
    product.quantity = 1;
    let findItem;

    if(this.basket.length > 0) {
      findItem = this.basket.find((item) => item.id === product.id);
      if(findItem) this.updateToBasket(findItem);
      else this.postToBasket(product);
    } else this.postToBasket(product);
  }

  postToBasket(product: IProducts) {
    this.productsService.postProductToBasket(product).subscribe((data) => this.basket.push(data));
  }

  updateToBasket(product: IProducts) {
    product.quantity += 1;
    this.productsService.updateProductToBasket(product).subscribe((data) => {});
  }

    ngOnDestroy() {
    if(this.productsSubscription) this.productsSubscription.unsubscribe();
    if(this.basketSubscription) this.basketSubscription.unsubscribe();
  }

}
