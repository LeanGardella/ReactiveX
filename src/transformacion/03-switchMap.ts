import { fromEvent, Observable } from 'rxjs';
import { debounceTime, pluck, map, mergeAll, mergeMap, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { GithubUsersResponse, GithubUser } from '../interfaces/github.interface';

const url = 'https://api.github.com/search/users';

const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);


// Helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {
    orderList.innerHTML ='';
    for (const u of usuarios ){
        const li = document.createElement('li');
        const img = document.createElement('img');
        const anchor = document.createElement('a');

        img.src = u.avatar_url;
        anchor.href = u.html_url;
        anchor.text = 'Ver perfil';
        anchor.target = '_blank';

        li.append(img);    
        li.append(u.login + ' ');
        li.append(anchor);
        
        orderList.append(li);    
    }
}


// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup' );

// input$.pipe(
//     debounceTime(500),
//     pluck('target','value'),
//     map( (value) => {
//        return ajax.getJSON(`${url}?q=${value}`) 
//     })
// )
// .subscribe(resp => {
//     resp.pipe(
       
//     )
//     .subscribe(console.log)
// });

input$.pipe(
    debounceTime(500),
    pluck<KeyboardEvent, string>('target','value'),
    map<string, Observable<GithubUsersResponse>>( value =>  ajax.getJSON(`${url}?q=${value}`)),
    mergeAll<GithubUsersResponse>(),
    pluck<GithubUsersResponse, GithubUser[]>('items')
)
//.subscribe(mostrarUsuarios);

// De esta manera, se emiten tantas requests como caracteres tipeados
// const url2 = 'https://httpbin.org/delay/1?arg=';
//  input$.pipe(
//      pluck('target','value'),
//      mergeMap(t => ajax.getJSON(url2 + t))
//  ).subscribe(console.log);

const url2 = 'https://httpbin.org/delay/1?arg=';
 input$.pipe(
     pluck('target','value'),
     switchMap(t => ajax.getJSON(url2 + t))
 ).subscribe(console.log);