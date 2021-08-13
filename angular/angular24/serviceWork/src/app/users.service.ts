 import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public clickCount: number = 0
  public creationDate: Date = new Date()


  constructor() { }

  public increase() {
    this.clickCount++
  }

  public getUsers(): Array<any>{
    return [
      {firstName: 'Ivan', lastName: 'Ivanov'},
      {firstName: 'Petr', lastName: 'Petrov'},
      {firstName: 'Big', lastName: 'Ben'},
      {firstName: 'Nik', lastName: 'Nikitov'},
      {firstName: 'Jake', lastName: 'Jutimov'},
    ]
  }

}
