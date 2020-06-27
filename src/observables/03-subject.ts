import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ' + valor),
    error: (err) => console.warn('error: ' + err),
    complete: () => console.info('Complete')
};

const intervalo$ = new Observable<number> ( subs => {

    const intervalID = setInterval( () => {
        subs.next(Math.random());
    }, 1000);

    return () => { 
        clearInterval (intervalID)
        console.log('Intervalo destruido');
    };
});

/** Subject, funciona como un repetidor
 * 1- casteo multiple
 * 2- es un observer
 * 3- next, error y complete (observable)
 */

 const subject$ = new Subject();
 const intervalSubjectSubsc = intervalo$.subscribe(subject$);

 const subscription1 = subject$.subscribe((val) => console.log('sub1: ', val));
 const subscription2 = subject$.subscribe((val) => console.log('sub2: ', val));

 setInterval( () => {
    subject$.next(10);
    subject$.complete();

    intervalSubjectSubsc.unsubscribe();

 }, 3500)