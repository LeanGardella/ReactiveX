import { interval } from 'rxjs';
import { take, tap, reduce } from 'rxjs/operators';

const totalReducer = (acc , val) => acc + val;

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});