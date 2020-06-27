import { fromEvent, interval } from 'rxjs';
import { first, tap, takeWhile, takeUntil, skip } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('antes')),
    skip(1),
    tap(() => console.log('despues'))
    );
const counter$ = interval(1000);

counter$
.pipe(
    takeUntil(clickBtn$)
)
.subscribe({
    next: (val) => console.log('next', val),
    complete: () => console.log('Complete')
});