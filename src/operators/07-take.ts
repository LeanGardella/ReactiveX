import { from } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

from(numeros)
.pipe(
   tap(t => console.log('tap', t)),
   take(3)
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});