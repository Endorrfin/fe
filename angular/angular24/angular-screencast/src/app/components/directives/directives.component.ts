import { Component, OnInit } from '@angular/core';

interface IUser {
  id: number;
  name: string;
  template: string;
}

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  expression: boolean = true;
  showWeather: boolean = true;
  deepObject: any = null;

  users: IUser[] = [
    {
      id: 1,
      name: 'John Doe',
      template: 'bold'
    },
    {
      id: 2,
      name: 'Ralph Green',
      template: 'italic'
    },
    {
      id: 3,
      name: 'Bob Dilan',
      template: 'unknown'

    },
    {
      id: 4,
      name: 'Cris Stuart',
      template: 'bold'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  generateUser() {
    this.deepObject = {
      user: {
        name: 'John',
        surname: 'Doe'
      }
    }
  }

  trackBy(index: number, user: IUser) {
    return user.id
  }

}
