import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create(); NO ES COMUN USARLO

// Parte de la tercera opción
const observer: Observer<any> = {
    next: (valor) => console.log('next: ' + valor),
    error: (err) => console.warn('error: ' + err),
    complete: () => console.info('Complete')
};

const obs$ = new Observable<string> (subs => {


    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    subs.complete(); // El observable informa que finalizó

    subs.next('Hola'); // Puedo emitir más valores, pero no serán notificados
    subs.next('Mundo');
});

// Primera opción, pasando función por parámetro
// obs$.subscribe(console.log)

// Segunda opción, pasando callbacks
// obs$.subscribe(
//     (valor) => console.log('next: ' + valor),
//     (err) => console.warn('error: ' + err),
//     () => console.info('Complete')
// )

// Tercera opción, usando observers.
obs$.subscribe(observer);
