import { of, from } from 'rxjs';
import { first, distinct } from 'rxjs/operators';

const counter$ = of(1,1,1,2,2,3,3,4,5,6,2,1,2);

counter$
.pipe(
    distinct()
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});

interface Personaje {
    nombre: string
};

const personajes = [
    {nombre: 'Megaman'},
    {nombre: 'Superman'},
    {nombre: 'Batman'},
    {nombre: 'Aquaman'},
    {nombre: 'Superman'},
    {nombre: 'Joker'},
    {nombre: 'Batman'},
    {nombre: 'Superman'},
    {nombre: 'Hulk'},
    {nombre: 'Spiderman'}
]

const personajes$ = from(personajes);

personajes$.pipe(
    distinct(
        personaje => personaje.nombre // define qué condición determina la igualdad
    )
)
.subscribe(console.log);