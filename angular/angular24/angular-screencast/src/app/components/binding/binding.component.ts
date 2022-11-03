import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  phone = '1234567';
  user = {
    name: 'John',
    surname: 'Doe'
  }

  boldText = `<b> I am a bold text</b>`;

  login: string = '';
  password: string = '';

  constructor() { }

  get fullName() {
    return this.user.name + ' ' + this.user.surname;
  }

  ngOnInit(): void {
    setTimeout(() => this.updatePhone(), 3000);
  }

  updatePhone() {
    this.phone = Math.round(Math.random() * 10000000) + '';
  }

  onInputOne(event: any) {
    this.phone = event.target.value;
  }

  onInputTwo(event: Event) {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
  }

  onSubmit() {
    if(this.login && this.password) {
      // TODO submit.
      alert(`You are authorized as ${this.login} with password ${this.password}`);

      return;
    }

    alert('login and password are required fields!!!');
  }

}
