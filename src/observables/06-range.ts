import { of, range, asyncScheduler } from "rxjs";

// const obs$ = of(1,2,3,4,5);
const obs$ = range(1,5, asyncScheduler);

console.log('START');
obs$.subscribe(
    (val) => console.log(val),
    null,
    () => console.log('Completada la seq')
);
console.log('END');