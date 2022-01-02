// import { Observable } from 'rxjs';
//
// const observer = {
//     next: value => console.log('next', value),
//     error: error => console.log('error', error),
//     complete: () => console.log('complete!')
// };
//
//
// const observable = new Observable(subscriber => {
//     subscriber.next('Hello');
//     subscriber.next('World');
//     subscriber.complete();
//     subscriber.next('Hello');
//     subscriber.next('World');
// })
//
// observable.subscribe(observer);
// // observer here
//


const observable = Rx.Observable.create(observer => {
    observer.next('Hello')
    observer.next('world')
})

observable.subscribe(val => print(val))
