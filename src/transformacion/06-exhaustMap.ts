import { fromEvent, interval } from 'rxjs';
import { take, switchMap, concatMap, exhaustMap } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(5));

click$.pipe(
    exhaustMap(() => interval$)
)
.subscribe(console.log);