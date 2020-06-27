import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';


const numeros$ = of(1,2,3,4);
const interval$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c').pipe(delay(3500));

forkJoin(
    numeros$,
    interval$,
    letras$
)
//.subscribe(console.log);

// .subscribe(resp => {
//     console.log('numero: ', resp[0]);
//     console.log('intervalo: ', resp[1]);
//     console.log('letra: ', resp[2]);

// });

forkJoin(
   { num: numeros$,
    tiempo: interval$,
    letra: letras$}
)
.subscribe(console.log);