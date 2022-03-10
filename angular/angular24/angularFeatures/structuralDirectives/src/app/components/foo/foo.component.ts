import { Component, OnInit } from '@angular/core';


interface IUser {
  name: string,
  surname: string,
  age: number,
  isAdmin: boolean
}

interface IUsers {
  id: number;
  name: string;
  template: string;
}

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})

export class FooComponent implements OnInit{
  expression: boolean = true;
  switch: boolean = true;
  deepObject: any = null;
  users: IUsers[] = [
    { id: 1, name: 'John Doe', template: 'bold'},
    { id: 2, name: 'Boris Brita', template: 'italic'},
    { id: 3, name: 'Spinach Bob', template: 'unknown'},
    { id: 4, name: 'Kir Macmillan', template: 'unknown'},
  ]

  constructor() {}

  ngOnInit(): void {}

  generateUser() {
    this.deepObject = {
      user: {
        name: 'John',
        surname: 'Doe',
        age: 28,
        isAdmin: false
      }
    };
  }

  trackBy(index: number, user: IUsers) {
    return user.id;
  }

}
