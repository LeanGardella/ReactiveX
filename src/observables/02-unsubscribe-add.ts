import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: (valor) => console.log('next: ' + valor),
    error: (err) => console.warn('error: ' + err),
    complete: () => console.info('Complete')
};


const intervalo$ = new Observable<number> (subs => {
    let a = 0;
    const interval = setInterval(() => {
        a++;
        subs.next(a);
    }, 1000)    
    
    // setInterval(() => {
    //     subs.complete();
    // }, 3000);
    return () => {
        clearInterval(interval);
        console.log('Intervalo finalizado');
    }
});

const subscription1 = intervalo$.subscribe( v => console.log('Num1: ', v));
const subscription2 = intervalo$.subscribe( v => console.log('Num2: ', v));
const subscription3 = intervalo$.subscribe( v => console.log('Num3: ', v));

subscription1.add(subscription2)
                .add(subscription3);

setInterval( () => {
subscription1.unsubscribe();

console.log('TIMEOUT');
}, 3000);

