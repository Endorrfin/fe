import { Component, OnInit } from '@angular/core';
import {SharedModule} from '../../@shared/shared.module';
import {Router, RouterModule} from '@angular/router';
import {StorageService} from '../../@shared/services/storage/storage.service';
import {STORAGE_KEYS} from '../../@shared/services/storage/storage.constants';
import {PATHS} from '../../paths.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [SharedModule, RouterModule],
})

export class LoginComponent implements OnInit {
  public loginForm = { email: '', password: '' };

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.storageService.set(STORAGE_KEYS.accessToken, 'exist');
    this.router.navigateByUrl(`/${PATHS.dashboard}`);
  }

}
