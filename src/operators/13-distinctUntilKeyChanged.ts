import { of, from } from 'rxjs';
import { first, distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';
/** 
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});
*/

interface Personaje {
    nombre: string
};

const personajes = [
    {nombre: 'Superman'},
    {nombre: 'Superman'},
    {nombre: 'Batman'},
    {nombre: 'Aquaman'},
    {nombre: 'Superman'},
    {nombre: 'Joker'},
    {nombre: 'Batman'},
    {nombre: 'Batman'},
    {nombre: 'Hulk'},
    {nombre: 'Spiderman'}
]

const personajes$ = from(personajes);

personajes$.pipe(
    distinctUntilKeyChanged("nombre")
)
.subscribe(console.log);