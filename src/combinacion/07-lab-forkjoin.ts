import { of, interval, forkJoin } from 'rxjs';
import { take, delay } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const API_URL = 'https://api.github.com/users';
const USER = 'leangardella';

forkJoin(
    {
        usuarios: ajax.getJSON(`${API_URL}/${USER}`),
        repos: ajax.getJSON(`${API_URL}/${USER}/repos`),
        gists: ajax.getJSON(`${API_URL}/${USER}/gists`)
    }
)
.subscribe(console.log);