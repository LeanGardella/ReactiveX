import { fromEvent } from 'rxjs';
import { first, tap, takeWhile, debounceTime, map, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
   debounceTime(1000)
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
   debounceTime(1000),
   distinctUntilChanged()
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
