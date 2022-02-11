import { Injectable } from '@angular/core';
import { defer, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IInventoryTypeItem as Category, IProduct } from '../models/products.models';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private productsRequestCount = 0;
  private categoriesRequestCount = 0;

  getProducts(): Observable<IProduct[]> {
    return defer(() => {
      console.log('getProducts http');
      if (++this.productsRequestCount <= 2) {
        console.error('Products request failed');
        return throwError(new Error('Products request failed'));
      }
      return of(PRODUCTS_DATA).pipe(delay(2000));
    });
  }

  getCategories(): Observable<Category[]> {
    return defer(() => {
      console.log('getCategories http');
      // if (++this.categoriesRequestCount <= 2) {
      //   console.error('Categories request failed');
      //   return throwError(new Error('Categories request failed'));
      // }
      return of(CATEGORIES).pipe(delay(2000));
    });
  }
}

const CATEGORIES: Category[] = [
  {
    id: 1,
    displayedName: 'Ноутбуки та комп’ютери'
  },
  {
    id: 2,
    displayedName: 'Смартфони'
  },
  {
    id: 3,
    displayedName: 'Побутова техніка'
  },
  {
    id: 4,
    displayedName: 'Товари для дому'
  },
  {
    id: 5,
    displayedName: 'Електроінструменти'
  },
  {
    id: 6,
    displayedName: 'Сантехніка та ремонт'
  },
  {
    id: 7,
    displayedName: 'Спорт і захоплення'
  },
  {
    id: 8,
    displayedName: 'Одяг та взуття'
  },
  {
    id: 9,
    displayedName: 'Краса та здоров’я'
  },
  {
    id: 10,
    displayedName: 'Дитячі товари'
  },
];

const PRODUCTS_DATA: IProduct[] = new Array(10).fill(null).map((e, index) => {
  const name = 'Product ' + index + 1;
  return {
    name,
    id: index + 1,
    inventoryNumber: ((index + 1) * 30000).toString(16),
    description: 'Детальное описание товара ' + index + 1,
    price: index % 3 * 10 + index % 2 * 6 - index % 2 * 4,
    categoryId: CATEGORIES[index].id
  };
});
