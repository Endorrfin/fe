import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { handleHttpError } from 'src/app/utils/handle-http-error';
import { ProductsService } from '../../services/products.service';
import {
  IInventoryTypeItem,
  IProduct,
  ProductWithCategoryName
} from '../../models/products.models';

// interface ViewModel {
//   products: Product[];
//   subtitle: string | null;
//   selectedProduct: ProductWithCategory | null;
// }


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent {
  title = 'Список товарів';

  private readonly selectedProductId$ = new BehaviorSubject<number | null>(null);
  readonly products$: Observable<IProduct[]> = this.productsService.getProducts();
  readonly categories$: Observable<IInventoryTypeItem[]> = this.productsService.getCategories();
  readonly selectedProduct$: Observable<ProductWithCategoryName | null> = this.getSelectedProduct();
  readonly subtitle$: Observable<string> = this.getSubtitle();


  constructor(private productsService: ProductsService) {}

  productSelectionChanged(event: MatButtonToggleChange) {
    const productId = event.value;
    // console.log('productId', productId);
    this.selectedProductId$.next(productId);
  }

  private getSelectedProduct(): Observable<ProductWithCategoryName | null> {
    return combineLatest([
      this.selectedProductId$,
      this.products$,
      this.categories$
    ]).pipe(
      map(([selectedProductId, products, categories]) => {
        if (!selectedProductId) {
          return null;
        }

        // Remove the undefined as a possible value with <!>
        const selectedProduct = products.find(p => p.id === selectedProductId)!;
        const category = categories.find(c => c.id === selectedProduct.categoryId)!;
        return { ...selectedProduct, categoryName: category.displayedName };
      })
    );
  }

  private getSubtitle() {
    return this.selectedProduct$.pipe(
      filter((value): value is ProductWithCategoryName => !!value),
        map(selectedProduct => `${selectedProduct.name} (${selectedProduct.categoryName})`)
    )
  }

  // private getViewModel(): Observable<ViewModel> {
  //   return combineLatest([
  //     this.productsService.getProducts().pipe( handleHttpError<Product[]>([]) ),
  //     this.productsService.getCategories().pipe( handleHttpError<InventoryTypeItem[]>([]) ),
  //     this.selectedProductId$,
  //   ]).pipe(
  //     map(([products, categories, selectedProductId]) => {
  //       let selectedProduct: ProductWithCategory | null = null;
  //       let subtitle: string | null = null;
  //       if (selectedProductId) {
  //         const foundSelectedProduct = products.find((p) => p.id === selectedProductId)!;
  //         const foundCategory = categories.find((c) => c.id === foundSelectedProduct.category_id)!;
  //         selectedProduct = {
  //           ...foundSelectedProduct,
  //           category: foundCategory.displayed_name,
  //         } as ProductWithCategory;
  //         subtitle = `${selectedProduct.name} (${selectedProduct.category})`;
  //       }
  //       return {
  //         products,
  //         selectedProduct: selectedProduct,
  //         subtitle,
  //       };
  //     })
  //   );
  // };

}

