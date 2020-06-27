import { fromEvent, asyncScheduler } from 'rxjs';
import { first, tap, takeWhile, debounceTime, map, pluck, distinctUntilChanged, throttle, throttleTime } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
   throttleTime(1000)
)
/*.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
*/

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup').pipe(pluck('target', 'value'))

input$
.pipe(
   throttleTime(1000, asyncScheduler, {
       leading: false,
       trailing: true // emite cada 1 seg. el último evento
   }),
   distinctUntilChanged()
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
