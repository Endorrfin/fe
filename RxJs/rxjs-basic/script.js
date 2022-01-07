import { Observable, fromEvent, of, range } from 'rxjs';
import { map } from 'rxjs/operators';

function hello() {
    return 'Hello World!';
}

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!')
};

// const source$ = of(1,2,3,4,5);
// const source$ = of([1],2,3,[4],5);
const source$ = range(1, 11);

source$.subscribe(observer);
console.log(hello());
