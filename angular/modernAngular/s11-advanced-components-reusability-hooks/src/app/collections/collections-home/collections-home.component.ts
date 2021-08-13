import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})

export class CollectionsHomeComponent implements OnInit {

  headers: {key: string, label: string}[] = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  data: {name: string, age: number, job: string, employed: boolean}[] = [
    { name: 'James', age: 24, job: 'Designer', employed: true },
    { name: 'Jill', age: 26, job: 'Engineer', employed: false },
    { name: 'Elyse', age: 25, job: 'QA', employed: true },
    { name: 'Jim', age: 23, job: 'UI', employed: false },
    { name: 'Bill', age: 42, job: 'UX', employed: true },
    { name: 'Monika', age: 38, job: 'Project manage', employed: false },
  ];



  constructor() { }

  ngOnInit() {
  }

}
