import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://jhttpbin.org/delay/1';

const manejaError = (err: AjaxError) => {{
    console.warn('CatchError', err.message);
    return of([]);
}}


// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// );
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// );

const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError) // si lo manejo aca, se dispara el next
);


obs$.subscribe({
    next: data => console.log('getJSON:', data),
    error: data => console.warn('error:', data), // si lo manejo aca, no dispara el next.
    complete: () => console.log('Complete:')
});
