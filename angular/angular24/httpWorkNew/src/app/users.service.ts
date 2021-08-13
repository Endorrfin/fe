import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public clickCount: number = 0
  public creationDate: Date = new Date()


  constructor(
    private httpClient: HttpClient
  ) { }

  private usersUrl = "api/users"

  public increase() {
    this.clickCount++
  }

  public getUsers(): Observable<Array<any>>{
    return this.httpClient.get<any[]>(this.usersUrl)
  }

}
