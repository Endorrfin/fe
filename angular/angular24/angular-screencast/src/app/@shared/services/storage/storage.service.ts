import {Injectable} from '@angular/core';
import {CookieService} from './cookie.service';


@Injectable({ providedIn: 'root' })
export class StorageService {
  private hasLS = false;

  constructor(
    private cookieService: CookieService
  ) {
    this.checkLocalStorage();
  }

  private checkLocalStorage(): boolean {
    this.hasLS = false;
    if (localStorage) {
      try {
        const x = 'storageTest';
        localStorage.setItem(x, x);
        localStorage.removeItem(x);
        this.hasLS = false; // true as valid value, but we disable localstorage according to enabling cookies for site
        return this.hasLS;
      } catch (e) {
        this.hasLS = false;
        // eslint-disable-next-line no-console
        console.warn('not found LS. Good idea to send it to track this error');
        return this.hasLS;
      }
    } else {
      return this.hasLS;
    }
  }

  public set(itemKeyName: string, value: unknown): void {
    if (value != null) {
      this.lsSet(itemKeyName, value);
    }
  }

  public get(itemKeyName: string): unknown | null | string | object {
    const item = this.lsGet(itemKeyName);
    return item != null && item !== 'undefined' ? this.getValue(item) : null;
  }

  public remove(itemKeyName: string): boolean {
    try {
      this.lsRemove(itemKeyName);
      return true;
    } catch (e) {
      return false;
    }
  }

  private lsRemove(itemKeyName: string): void {
    if (this.hasLS) {
      <void>localStorage.removeItem(itemKeyName);
    } else {
      <void>this.cookieService.delete(itemKeyName);
    }
  }

  private lsGet(itemKeyName: string): string | null {
    if (this.hasLS) {
      return localStorage.getItem(itemKeyName);
    } else {
      return <string>this.cookieService.get(itemKeyName);
    }
  }

  private stringify(value: unknown | object): string {
    if (typeof value === 'string') {
      return value;
    } else {
      return JSON.stringify(value);
    }
  }

  private lsSet(itemKeyName: string, value: unknown | object): void {
    if (this.hasLS) {
      <void>localStorage.setItem(itemKeyName, this.stringify(value));
    } else {
      <void>this.cookieService.set(itemKeyName, this.stringify(value), 365);
    }
  }

  private getValue(item: string): null | string | object {
    try {
      const obj = JSON.parse(item);
      return obj;
    } catch (e) {
      return item;
    }
  }
}
