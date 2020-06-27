import { ajax, AjaxError } from 'rxjs/ajax';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.org/delay/1';


const get$ = ajax.get(url, { // El DELETE es igual
    // Headers
    'mi-token': 'ABC123'
});

const post$ = ajax.post(url, { //para el PUT es igual
    //body
    nombre: 'Leandro',
    apellido: 'Gardella'
},{
    // Headers
    'mi-token': 'ABC123'
});

const ajax$ = ajax ({
    url,
    method: 'POST',
    headers: { 'mi-token': 'ABC123456'},
    body: { nombre: 'Leandro'}
});

get$.subscribe({
    next: data => console.log('GET:', data),
    error: data => console.warn('error:', data), 
    complete: () => console.log('completed')
});

post$.subscribe({
    next: data => console.log('POST:', data),
    error: data => console.warn('error:', data), 
    complete: () => console.log('completed')
});

ajax$.subscribe({
    next: data => console.log('AJAX:', data),
    error: data => console.warn('error:', data), 
    complete: () => console.log('completed')
});

