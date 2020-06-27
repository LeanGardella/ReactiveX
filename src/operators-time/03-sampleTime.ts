import { fromEvent, asyncScheduler } from 'rxjs';
import { first, tap, takeWhile, debounceTime, map, pluck, distinctUntilChanged, throttle, throttleTime, sampleTime } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
   sampleTime(3000),
   map(({x,y}) => ({x,y}))
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
