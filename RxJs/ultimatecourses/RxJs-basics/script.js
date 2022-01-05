import { Observable, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';

/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
of('Hello', 'RxJs-Basics').subscribe(console.log);
