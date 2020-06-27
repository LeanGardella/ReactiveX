import { of, from } from 'rxjs';
import { first, distinct, distinctUntilChanged } from 'rxjs/operators';

const counter$ = of(1,1,1,2,2,3,3,4,5,6,2,1,2);

counter$
.pipe(

    // distinct() // ===
    
    distinctUntilChanged()
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});

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

    // bloquea si el valor emitido es repetido (ya fue alguna vez emitido)
    /**
     *distinct(
     *    personaje => personaje.nombre // define qué condición determina la igualdad
     *)
     */

     //si el predicado da true, lo bloquea
    distinctUntilChanged((anterior, nuevo) => anterior.nombre === nuevo.nombre) 
)
.subscribe(console.log);