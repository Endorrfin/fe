import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  providers: [UsersService]
})
export class UserTableComponent implements OnInit {

  public users: Array<any>

  constructor(
    public serviceUsers: UsersService
  ) {
    serviceUsers.getUsers().subscribe(users => this.users = users)
  }

  ngOnInit(): void {
  }

}
