import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence()
  enteredText = ''
  // solved = false

  onInput(value: string) {
    // if (value === this.randomText) {
    //   this.solved = true
    // }
    this.enteredText = value
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending'
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'
  }

}
