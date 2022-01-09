import { Observable, fromEvent, of, range, from, interval, timer } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';


// ============ RXJS BASIC - 1 The Missing Introduction to RxJS ============
/*
 * Any code samples you want to play with can go in this file.
 * Updates will trigger a live reload on http://localhost:1234/
 * after running npm start.
 */
// of('Hello', 'RxJs-Basic!').subscribe(console.log);


// ============ RXJS BASIC - 2 Configuration and Setup ============
// the same


// ============ RXJS BASIC - 3 Create Your First Observable ============
// const observer = {
//     next: value => console.log('next', value),
//     error: error => console.log('error', value),
//     complete: () => console.log('complete!')
// }
//
// const observable = new Observable(subscriber => {
//     subscriber.next('Hello');
//     subscriber.next('Wold');
//     subscriber.complete();
//     subscriber.next('Hello');
//     subscriber.next('Wold');
// })
//
// observable.subscribe(observer)


// ============ RXJS BASIC - 4 Observers, Partial Observers, and Subscribers ============
// const observer = {
//     next: value => console.log('next', value),
//     // error: error => console.log('error', value),
//     // complete: () => console.log('complete!')
// }
//
//     const observable = new Observable(subscriber => {
//         subscriber.next('Hello');
//         subscriber.next('Wold');
//         subscriber.complete();
//     })
//
//     observable.subscribe(
//         value => console.log('next', value),
//         error => console.log('error', error),
//         () => console.log('complete')
//     );


// ============ RXJS BASIC - 5 Deliver Values Asynchronously with Observables ============
// const observer = {
//     next: value => console.log('next', value),
//     error: error => console.log('error', value),
//     complete: () => console.log('complete!')
// }
//
// // const observable = new Observable(subscriber => {
// //     subscriber.next('Hello');
// //     subscriber.next('Wold');
// //     subscriber.complete();
// // })
//
// const observable = new Observable(subscriber => {
// let count = 0;
//
// const id = setInterval(() => {
//     subscriber.next(count);
//     subscriber.complete();
//     count += 1;
// }, 1000);
//
// return () => {
//     console.log('called');
//     clearInterval(id);
// }
// });
//
// console.log('before');
// observable.subscribe(observer);
// console.log('after');


// ============ RXJS BASIC - 6 Manage Observable Subscriptions ============
// const observer = {
//     next: value => console.log('next', value),
//     error: error => console.log('error', value),
//     complete: () => console.log('complete!')
// }
//
// const observable = new Observable(subscriber => {
//     let count = 0;
//
//     const id = setInterval(() => {
//         subscriber.next(count);
//         // subscriber.complete();
//         count += 1;
//     }, 1000);
//
//     return () => {
//         console.log('called');
//         clearInterval(id);
//     }
// });
//
// const subscription = observable.subscribe(observer);
// const subscriptionTwo = observable.subscribe(observer);
//
// subscription.add(subscriptionTwo);
//
// setTimeout(() => {
//     subscription.unsubscribe();
//     // subscriptionTwo.unsubscribe();
// }, 3500);

// ============ RXJS BASIC - 7 What's Next ============
// Chapter Recap


// ============ RXJS BASIC - 8 Observable Creation Operators ============
// const observer = {
//     next: value => console.log('next', value),
//     error: error => console.log('error', value),
//     complete: () => console.log('complete!')
// }
//
// const observable = new Observable(subscriber => {
//     let count = 0;
//
//     const id = setInterval(() => {
//         subscriber.next(count);
//         // subscriber.complete();
//         count += 1;
//     }, 1000);
//     return () => {
//         console.log('called');
//         clearInterval(id);
//     }
// });
// const subscription = observable.subscribe(observer);
// const subscriptionTwo = observable.subscribe(observer);
// subscription.add(subscriptionTwo);
// setTimeout(() => {
//     subscription.unsubscribe();
// // subscriptionTwo.unsubscribe();
// }, 3500);



// ============ RXJS BASIC - 9 fromEvent ============
// const observer = {
//     next: val => console.log('next', val),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete!')
// };
//
//
// // const source$ = fromEvent(document, 'click');
//     const source$ = fromEvent(document, 'keyup');
// // source$.subscribe(observer);
//
//
// const subOne = source$.subscribe(observer);
// const subTwo = source$.subscribe(observer);
//
//
// setTimeout(() => {
// console.log('unsubscribing');
// subOne.unsubscribe();
// }, 3000)



// ============ RXJS BASIC - 10 of & range ============

// function hello() {
//     return 'Hello World!';
// }
//
// const observer = {
//     next: val => console.log('next', val),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete!')
// };
//
// // const source$ = of(1,2,3,4,5);
// // const source$ = of([1],2,3,[4],5);
// const source$ = range(1, 11);
//
// source$.subscribe(observer);
// console.log(hello());



// ============ RXJS BASIC - 11 from ============

// function* hello() {
//     yield 'Hello';
//     yield 'World!';
// }
//
// const iterator = hello();
// console.log(iterator.next().value);
//
// const observer = {
//     next: val => console.log('next', val),
//     error: err => console.log('error', err),
//     complete: () => console.log('complete!')
// };
//
// // const source$ = of([1,2,3,4,5]);
// // const source$ = from([1,2,3,4,5]);
// // const source$ = from("Hello");
//
// // const source$ = from(fetch(
// //     'https://api.github.com/users/octocat'
// // ));
//
// const source$ = from(iterator);
//
//
// source$.subscribe(observer);



// ============ RXJS BASIC - 12 interval ============

// const timerInterval$ = interval(1000);
// const timerTimer$ = interval(2000, 1000);

// timerInterval$.subscribe(console.log);
// timerTimer$.subscribe(console.log);



// ============ RXJS BASIC - 13 What's Next ============
// Theory



// ============ RXJS BASIC - 14 Introduction to Pipeable Operators ============

/*
Recap - Pipeable Operators
1. Operators are the power behind RxJS, letting you more easily compose complex asynchronous code
2. Operators can be applied by including them in the pipe method
3. Operators return a new observable without modifying the input observable
4. A core set of operators can solve the majority of use cases, while others can be picked up as the situation arises
*/


// ============ RXJS BASIC - 15 Introducing Marble Diagrams ============
// theory



// ============ RXJS BASIC - 16 map ============

// of(1,2,3,4,5).subscribe(console.log);

// of(1,2,3,4,5).pipe(
//     map(value => value * 10)
// ).subscribe(console.log);

// const keyup$ = fromEvent(document, 'keyup');
//
// const keycode$ = keyup$.pipe(
//     map(event => event.code)
// );
//
// const keycodeWithPluck$ = keyup$.pipe(
//     pluck('code')
// );
//
// const pressed$ = keyup$.pipe(
//     mapTo('Key Pressed!')
// )

// keyup$.subscribe(console.log);
// keycode$.subscribe(console.log);
// keycodeWithPluck$.subscribe(console.log);
// pressed$.subscribe(console.log);











