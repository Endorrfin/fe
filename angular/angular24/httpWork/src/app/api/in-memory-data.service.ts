import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const users = [
      {firstName: 'Rik', lastName: 'Uorren'},
      {firstName: 'Chip', lastName: 'Swork'},
      {firstName: 'Big', lastName: 'Ben'},
      {firstName: 'Ben', lastName: 'Brendin'},
      {firstName: 'Jake', lastName: 'Jutimov'},
      {firstName: 'Kir', lastName: 'Kirnadz'},
      {firstName: 'Kity', lastName: 'Krenston'},
    ]

    return { users }
  }

  constructor() {
    super()
  }
}
