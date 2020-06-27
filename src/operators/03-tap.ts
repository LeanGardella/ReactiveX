import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:' ,val),
    complete: () => console.log('completado!')
};

const numeros$ = range(1,5);

numeros$
.pipe(
    tap( x => console.log('antes: ', x)),
    map(x => x*10),
    tap({
        next: x => console.log('después:', x),
        complete: () => console.log('Finalizado')

    })
)
.subscribe( val => console.log('Subs: ', val));