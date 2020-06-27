import { range, from } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

const observer = {
    next: val => console.log('next:' ,val),
    complete: () => console.log('completado!')
};


const rango$ = range(1,10);

// rango$.pipe(
//     filter( (v) => v % 2 === 1 )
// )
// .subscribe(x => console.log('filter:', x));


rango$.pipe(
    filter( (v, i) => {
        console.log('index:', i);
       return v % 2 === 1;
    })
)
//.subscribe(x => console.log('filter:', x));

const personajes = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Superman'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },
];

const personajes$ = from(personajes);

personajes$.pipe(
    filter(p => p.tipo =='heroe'),
    pluck('nombre')
)
.subscribe(x => console.log('filter:', x));