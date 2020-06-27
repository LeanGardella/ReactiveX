import { fromEvent, interval } from 'rxjs';
import {  map, sample } from 'rxjs/operators';

const interval$ = interval(100);
const click$ = fromEvent<MouseEvent>(document, 'click');

interval$
.pipe(
   sample(click$)
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
