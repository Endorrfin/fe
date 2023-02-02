import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../@shared/services/storage/storage.service';
import {PATHS} from '../paths.constants';
import {STORAGE_KEYS} from '../@shared/services/storage/storage.constants';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  public isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }

  public logout(): void {
    this.storageService.remove(STORAGE_KEYS.accessToken);
    this.router.navigateByUrl(`/${PATHS.login}`);
  }

  private getAccessToken(): string | undefined {
    return <string>this.storageService.get(STORAGE_KEYS.accessToken) || undefined;
  }
}
