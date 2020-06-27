import { interval, concat, merge, fromEvent } from 'rxjs';
import { take, pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup').pipe(pluck('type'));
const click$ = fromEvent(document, 'click').pipe(pluck('type'));    

merge(
    keyup$.pipe(),
    click$.pipe()
).subscribe(console.log);
