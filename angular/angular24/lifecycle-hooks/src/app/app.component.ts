import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lifecycle-hooks';

  show = true
  parentValue = 'Another Value'
  change(event: HTMLInputElement) {
    this.parentValue = event.value
  }

  duplicate() {
    this.parentValue = this.parentValue
  }
}
