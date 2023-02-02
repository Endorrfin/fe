import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataResolver implements Resolve<any> {
  resolve(): Observable<any> {
    // return of([{ 'all-machines': 35, treadmils: 12, ellipticals: 22 }]);
    return of([{ 'reactive-forms': 35, 'template-driven-forms': 12 }]);
  }
}
