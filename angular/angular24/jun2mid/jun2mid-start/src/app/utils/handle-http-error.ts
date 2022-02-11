import { of, OperatorFunction } from "rxjs";
import { catchError, retry, retryWhen, startWith } from 'rxjs/operators';
import { genericRetryStrategy } from "./generic-retry-strategy";

export function handleHttpError<T>(defaultValue: T): OperatorFunction<T, T> {
    return src$ => src$.pipe(
      // retry(3),
        retryWhen(genericRetryStrategy()),
        catchError(() => {
          return of(defaultValue);
        })
    )
}
