// import { Observable, fromEvent } from 'rxjs';
// import { map } from 'rxjs/operators';


const { Observable, fromEvent } = rxjs;
const { map } = rxjs/operators;

range(1, 200).pipe(
    filter(x => x % 2 === 1),
    map(x => x + x)
).subscribe(x => console.log(x));




