import { Observable, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';


const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', value),
    complete: () => console.log('complete!')
}

const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('Wold');
    subscriber.complete();
    subscriber.next('Hello');
    subscriber.next('Wold');
})

observable.subscribe(observer)
