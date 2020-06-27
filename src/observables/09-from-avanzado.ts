import { from } from 'rxjs';

const observer = {
    next: val => console.log('next:' ,val),
    complete: () => console.log('completado!')
};

const source$ = from( fetch('https://api.github.com/users/klerith'));

// Obtiene la respuesta en forma sincronica
// source$.subscribe(observer);

// Obtiene todo el payload en forma asincrònica.
source$.subscribe( async (val) => {
    console.log(val);
    const dataresp =  await val.json();
    console.log(dataresp);
});