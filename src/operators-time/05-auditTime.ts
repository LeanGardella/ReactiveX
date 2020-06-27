import { fromEvent } from 'rxjs';
import {  map, tap, auditTime } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
   map(({x}) => x),
   tap(console.log),
   auditTime(4000)
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
