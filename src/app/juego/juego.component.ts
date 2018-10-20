import {Component, OnInit} from '@angular/core';
import * as JUEGOS from '../../assets/data/juegos.json';
import {Juego} from '../interfaces/juego.interface';
import {Jugador} from '../interfaces/jugador.interface';
import {JsonServices} from '../services/json.services';


import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-juego',
    templateUrl: './juego.component.html',
    styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {
    juegos: Juego[];
    new_juego: Juego ;
    juegoForm: FormGroup;

    step = 0;
    searchText: string;
    estadoSpinner = 'indeterminate';
    showSpinner = true;

    constructor(private jsonService: JsonServices) {
    }

    ngOnInit() {
        this.showSpinner = true;
        this.juegoForm = new FormGroup({
            f_local: new FormControl('', Validators.required),
            f_visitante: new FormControl('', Validators.required),
            f_fecha: new FormControl('', Validators.required),
            f_anotacioneslocal: new FormControl('', Validators.required),
            f_anotacionesvisitante: new FormControl('', Validators.required),
            f_jugadordestacado: new FormControl('', Validators.required),
            f_lugar: new FormControl('', Validators.required)
        });

        /*this.jsonService.getJson('https://api-mi-liga.now.sh/api/juegos')
            .subscribe((data: any) =>  {
                this.juegos = data;
                this.showSpinner = false;
            });*/
        this.juegos = (JUEGOS as any).data;
        console.log(this.juegos);
        this.showSpinner = false;
    }

    registrarJuego() {
        this.new_juego = {
            local: this.juegoForm.get('f_local').value,
            visitante: this.juegoForm.get('f_visitante').value,
            fecha: this.juegoForm.get('f_fecha').value,
            anotacioneslocal: this.juegoForm.get('f_anotacioneslocal').value,
            anotacionesvisitante: this.juegoForm.get('f_anotacionesvisitante').value,
            jugadordestacado: this.juegoForm.get('f_jugadordestacado').value,
            lugar: this.juegoForm.get('f_lugar').value
        };
        this.juegos.push(this.new_juego);
    }
}
