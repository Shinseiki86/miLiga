import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Jugador} from './../interfaces/jugador.interface';

@Component({
    selector: 'app-jugador',
    templateUrl: './jugador.component.html',
    styleUrls: ['./jugador.component.scss']
})
export class JugadorComponent implements OnInit {
    @Input('jugador')
    jugador: Jugador;

    @Input()
    equipo = 'Sin Equipo';

    @Output('onActivate')
    estado: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }

    ngOnInit() {
    }

    desactivar() {
        this.estado.emit(false);
    }
}
