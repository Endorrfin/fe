import { Injectable } from '@angular/core';
// import filter from 'lodash/filter';
// import includes from 'lodash/includes';
import {filter, includes} from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  // getFilterObject(fullObj, key) {
  getFilterObject(fullObj: any, key: string | number) {
    const uniqChk: any[] = [];
    filter(fullObj, (obj: { [x: string]: any; }) => {
      if (!includes(uniqChk, obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }
}


// import { Injectable } from '@angular/core';
// import * as _ from 'lodash';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class GlobalService {
//
//   constructor() { }
//
//   getFilterObject(fullObj, key) {
//     const uniqChk = [];
//     _.filter(fullObj, (obj) => {
//       if (!_.includes(uniqChk, obj[key])) {
//         uniqChk.push(obj[key]);
//       }
//       return obj;
//     });
//     return uniqChk;
//   }
// }
