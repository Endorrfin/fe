import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [
    `
      :host {
        display: grid;
        grid-template-columns: auto auto;
      }

      app-client-1,
      app-client-2 {
        margin: 1rem;
      }
    `,
  ],
})
export class AppComponent {
  title = 'ngTemplateOutlet';

  // Two clients sharing a select component but using different templates.
}
