import { Injectable } from '@angular/core'
import { IRegisterRequest } from '../types/registerRequest.interface'
import { ICurrentUser } from '../../shared/types/currentUser.interface'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { IAuthResponse } from '../types/authResponse.interface';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    // const url = 'https://conduit.productionready.io/api/users'
    const url = environment.apiUrl + '/users'

    return this.http.post<IAuthResponse>(url, data)
      .pipe(
        map((response: IAuthResponse) => response.user)
      )
  }

}
