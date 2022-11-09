import {IProducts} from "../models/product";
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {catchError, EMPTY, Observable, of} from "rxjs";
import {ProductsService} from "./products.service";


@Injectable({
    providedIn: 'root'
})

export class ProductResolver implements Resolve<IProducts> {

    constructor(
        private productsService: ProductsService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProducts> {
        return this.productsService.getProduct(route.params?.['id']).pipe(
            catchError(() => {
                this.router.navigate(['products']);
                return EMPTY;
            })
        )
    }
}
