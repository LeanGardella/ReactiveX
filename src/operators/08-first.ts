import { fromEvent } from 'rxjs';
import { first, tap } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    first(x => x.clientY >150)
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
