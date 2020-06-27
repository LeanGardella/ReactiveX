import { interval, concat, merge, fromEvent, combineLatest } from 'rxjs';
import { take, pluck } from 'rxjs/operators';

const keyup$ = fromEvent(document, 'keyup').pipe(pluck('key'));
const click$ = fromEvent(document, 'click').pipe(pluck('type'));    

combineLatest(
    keyup$.pipe(),
    click$.pipe()
).subscribe(console.log);
