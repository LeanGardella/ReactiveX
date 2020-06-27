import { of } from "rxjs";


// const obs$ = of(1,2,3,4,5,6);
// const obs$ = of(...[1,2,3,4,5,6],7,8);
const obs$ = of(1,[2,3],true, {a:1}, Promise.resolve(true));


console.log('START');
obs$.subscribe(
    (val) => console.log(val),
    null,
    () => console.log('Completada la seq')
);
console.log('END');