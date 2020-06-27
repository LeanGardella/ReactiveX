import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

const numeros$ = of(1,2,3);

numeros$.pipe(
    startWith('START'),
    endWith('END')
)
.subscribe(console.log);