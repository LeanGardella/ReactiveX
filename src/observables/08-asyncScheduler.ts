import { interval, timer, Subject, asyncScheduler } from 'rxjs';

const observer = {
    next: val => console.log('next:' ,val),
    complete: () => console.log('completado!')
};


// Equivalencia con setTimeout
// const saludar = () => console.log('Hola mundo!');
// const saludar2 = (nombre) => console.log(`Hola ${nombre}!`);

// asyncScheduler.schedule(saludar, 1000);
// asyncScheduler.schedule(saludar2, 3000, 'Leandro');

// Equivalencia con el setInterval
console.log('start');
const subs = asyncScheduler.schedule(
    function(state) {
        console.log('state', state);
        this.schedule(state + 1, 1000)
    },
    3000,
    0
);
console.log('end');

asyncScheduler.schedule( () => subs.unsubscribe() , 6000);