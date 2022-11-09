import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, combineLatest, filter, fromEvent, map, of} from "rxjs";

@Component({
  selector: 'app-rxjs-overview',
  templateUrl: './rxjs-overview.component.html',
  styleUrls: ['./rxjs-overview.component.scss']
})
export class RxjsOverviewComponent implements OnInit {

  users = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Forstmann', isActive: true },
    { id: '3', name: 'Steve', isActive: false },
    { id: '4', name: 'Met', isActive: false },
    { id: '5', name: 'Boliviya', isActive: true },
    { id: '6', name: 'Waterman', isActive: false },
    { id: '7', name: 'Rik', isActive: true },
  ];

  user$ = new BehaviorSubject<{ id: string; name: string } | null> (null);
  users$ = of(this.users);
  usernames$ = this.users$.pipe(
      map((users) => users.map((user) => user.name)));
  filteredUsers$ = this.users$.pipe(
      filter((users) => users.every((user) => user.isActive)));
  documentClick$ = fromEvent(document, 'click');

  data$ = combineLatest([
      this.users$,
      this.usernames$,
      this.filteredUsers$
  ]).pipe(map(([users, usernames, filteredUsers]) => ({
        users,
        usernames,
        filteredUsers,
      }))
  );

  constructor() { }

  ngOnInit(): void {
    this.users$.subscribe((users) => {
      // console.log('users', users);
    });

    this.filteredUsers$.subscribe((users) => {
      // console.log('users', users);
    });

    setTimeout(() => {
      this.user$.next({ id: '1', name: 'John' });
    }, 2000);

    this.user$.subscribe((user) => {
      // console.log('user', user);
    });


    this.documentClick$.subscribe((e) => {
      // console.log('e', e);
    })



  }

}
