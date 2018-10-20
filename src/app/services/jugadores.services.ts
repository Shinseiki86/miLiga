import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class JugadoresServices {

    constructor(private http: HttpClient) { }

    url = 'https://api-mi-liga.now.sh/api/jugadores';

    getJugadores() {
        return this.http.get(this.url);
    }

}