import { Component } from '@angular/core'
import { WikipediaService } from './wikipedia.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pages: {title: string, snippet: string, pageid: number}[]  = []

  constructor(
    private wikipedia: WikipediaService
  ) {
  }

  onTerm(term: string) {
    // console.log('I am the app and here is the term', term)
    // const result = this.wikipedia.search(term);
    // console.log(result);

    this.wikipedia.search(term).subscribe(pages => {
      console.log('pages', pages)
      this.pages = pages
    });
  }
}
