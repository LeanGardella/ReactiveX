import { fromEvent, of } from 'rxjs';
import { tap, map, mergeMap, pluck, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

// Formulario

const form = document.createElement('form');
const email = document.createElement('input');
const pass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones

email.type = 'email';
email.placeholder = 'Email';
email.value = 'eve.holt@reqres.in';

pass.type = 'password';
pass.placeholder = 'Password';
pass.value = 'cityslicka';

submitBtn.innerHTML = 'Login';

form.append(email, pass, submitBtn);

document.querySelector('body').append(form);

// Helper
const httpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass)
.pipe(
    pluck('response','token'),
    catchError(err => of(''))
);


// Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
        'email': ev.target[0].value,
        'password': ev.target[1].value
    })),
    mergeMap(httpLogin)
)

submitForm$.subscribe(token => console.log('Token: ',token));