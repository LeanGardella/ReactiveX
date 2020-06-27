import { fromEvent } from 'rxjs';
import { first, tap, takeWhile } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    takeWhile(x => x.clientY >150, true) // inclusive true,emite el valor que rompe la condicion
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});

