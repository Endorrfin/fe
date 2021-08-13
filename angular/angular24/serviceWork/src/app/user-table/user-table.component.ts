import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
  // providers: [UsersService]
})
export class UserTableComponent implements OnInit {

  public users: Array<any>

  constructor(
    public serviceUsers: UsersService
  ) {
    this.users = serviceUsers.getUsers()
  }

  ngOnInit(): void {
  }

}
