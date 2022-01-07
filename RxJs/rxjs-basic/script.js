import { Observable, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!')
};


// const source$ = fromEvent(document, 'click');
const source$ = fromEvent(document, 'keyup');

// source$.subscribe(observer);


const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);


setTimeout(() => {
    console.log('unsubscribing');
    subOne.unsubscribe();
}, 3000)
