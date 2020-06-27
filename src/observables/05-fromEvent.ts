import {fromEvent } from "rxjs";

/**
 * Eventos del DOM
 */
const obs1$ = fromEvent<MouseEvent> (document, 'click');
const obs2$ = fromEvent<KeyboardEvent> (document, 'keyup');

obs1$.subscribe( ({x, y}) => console.log(x, y));
obs2$.subscribe( ({key}) => console.log(key));
