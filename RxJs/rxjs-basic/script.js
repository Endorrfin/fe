import { Observable, fromEvent, of } from 'rxjs';
import { map } from 'rxjs/operators';


const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', value),
    complete: () => console.log('complete!')
}

const observable = new Observable(subscriber => {
    let count = 0;

    const id = setInterval(() => {
        subscriber.next(count);
        // subscriber.complete();
        count += 1;
    }, 1000);

    return () => {
        console.log('called');
        clearInterval(id);
    }
});

const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

subscription.add(subscriptionTwo);

setTimeout(() => {
    subscription.unsubscribe();
    // subscriptionTwo.unsubscribe();
}, 3500);
