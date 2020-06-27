import { range, fromEvent } from 'rxjs';
import {map, pluck, mapTo} from 'rxjs/operators'

const observer = {
    next: val => console.log('next:' ,val),
    complete: () => console.log('completado!')
};


const rango$ = range(1,5);

// no es eficiente
// rango$.subscribe(x => console.log(x*10));

// rango$.pipe(map((x: number) => x*10)).subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

// MAP
const keyupmap$ = keyup$.pipe(
    map(e => e.code)
);

// PLUCK
const keyupPluck$ = keyup$.pipe(
    pluck('code')
); 

// PLUCK en un subdocumento
const keyupPluckSub$ = keyup$.pipe(
    pluck('target', 'baseURI')
); 

//MAPTO
const keyupMapTo$ = keyup$.pipe(
    mapTo('Tecla presionada')
); 

keyupmap$.subscribe(r => console.log('map:', r));

keyupPluck$.subscribe(r => console.log('pluck:', r));
keyupPluckSub$.subscribe(r => console.log('pluck:', r));

keyupMapTo$.subscribe(r => console.log('mapTo:', r));
