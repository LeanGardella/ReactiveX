import { interval, from } from 'rxjs';
import { take, tap, reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const  totalAcum = (acc, cur) => acc + cur;

// Reduce
from(numeros)
.pipe(
    reduce(totalAcum,0)
)
.subscribe(console.log);

// Scan
from(numeros)
.pipe(
    scan(totalAcum,0)
)
.subscribe(console.log);

// Redux
interface Usuario {
    id?: string, 
    autenticado?: boolean,
    token?: string,
    edad?: number
};

const user: Usuario[] = [
    {id: 'lg', autenticado: false, token: ''},
    {id: 'lg', autenticado: true, token: 'ABC'},
    {id: 'lg', autenticado: true, token: 'XYZ'},
];

const state$ = from(user)
.pipe(
    scan<Usuario>((acc, cur) => {
        return {...acc, ...cur}
    }, {edad: 30})
);

const id$ = state$.pipe(
    map(state => state.id)
);

id$.subscribe(console.log);