import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { catchError, filter, map, retry, retryWhen, shareReplay } from 'rxjs/operators';
import { handleHttpError } from 'src/app/utils/handle-http-error';
import { ProductsService } from '../../services/products.service';
import {
  IInventoryTypeItem,
  IProduct,
  ProductWithCategoryName
} from '../../models/products.models';
import { genericRetryStrategy } from '../../../utils/generic-retry-strategy';

interface ViewModel {
  products: IProduct[];
  selectedProductWithCategory: ProductWithCategoryName | null;
  subtitle: string | null;
}


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  title = 'Список товарів';

  /*
  shareReplay - это промежуточное звено между подпиской и получателем.
  Под копотом используется ReplaySubject - отдает последнее свое выбранное значение всем слушателям.
  */
  // readonly products$: Observable<IProduct[]> = this.productsService.getProducts().pipe(
  //   shareReplay({refCount: true, bufferSize: 1})
  // );
  // readonly categories$: Observable<IInventoryTypeItem[]> = this.productsService.getCategories().pipe(
  //   shareReplay({refCount: true, bufferSize: 1})
  // );

  private readonly selectedProductId$ = new BehaviorSubject<number | null>(null);
  readonly viewModels$ = this.getViewModel();

  constructor(private productsService: ProductsService) {}

  productSelectionChanged(event: MatButtonToggleChange) {
    const productId = event.value;
    // console.log('productId', productId);
    this.selectedProductId$.next(productId);
  }

  private getViewModel(): Observable<ViewModel> {
    return combineLatest([
      this.selectedProductId$,
      this.productsService.getProducts().pipe(
        handleHttpError([] as IProduct[])
      ),
      this.productsService.getCategories().pipe(
        handleHttpError([] as IInventoryTypeItem[])
      )
    ]).pipe(
      map(([selectedProductId, products, categories]) => {
        let selectedProductWithCategory: ProductWithCategoryName | null = null;
        let subtitle: string | null = null;
        if  (selectedProductId) {
          const selectedProduct = products.find(p => p.id === selectedProductId)!;
          const category = categories.find(c => c.id === selectedProduct.categoryId)!;
          selectedProductWithCategory = {...selectedProduct, categoryName: category.displayedName };
          subtitle = `${selectedProductWithCategory.name} (${selectedProductWithCategory.categoryName})`;
        }

        return {
          products,
          selectedProductWithCategory,
          subtitle
        }
      })
    )
  };

}

