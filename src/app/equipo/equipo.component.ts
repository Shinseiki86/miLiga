import {Component, OnInit} from '@angular/core';
import {Jugador} from './../interfaces/jugador.interface';
//import * as JUGADORES from '../../assets/data/jugadores.json';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JugadoresServices} from '../services/jugadores.services';


@Component({
    selector: 'app-equipo',
    templateUrl: './equipo.component.html',
    styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {
    nombre = 'Felinos FC';
    estatus = false;
    jugadores: Jugador[];
    jugadoresBuscador: Jugador[];
    step = 0;

    presupuesto = 18000000;
    actualizacion = new Date();
    aficionados = 150640263;
    efectividad = 0.875;

    jugador: Jugador = {
        nombre: 'Carlos',
        edad: 23,
        apodo: 'Santo',
        foto: 'image.png',
        posicion: 'delantero',
        estado: false
    };

    searchText: string;
    estadoSpinner = 'indeterminate';
    showSpinner = true;

    constructor(private http: HttpClient, private jugadoresService: JugadoresServices) {
    }

    ngOnInit() {
        this.showSpinner = true;
        this.nombre = 'Piratas FC';
        this.agregarJugador();


        this.jugadoresService.getJugadores()
            .subscribe((data: any) =>  {
                this.jugadores = data;
                this.showSpinner = false;
            });
        console.log(this.jugadores);
    }
    agregarJugador() {
        let jugador = 'Ivan';
        jugador = 'Ivan';
        this.jugador.nombre = jugador;
    }
    actualizarEstado(jugador: Jugador, i: number, event) {
        jugador.estado = event;
        this.step = i;

    }

    activarJugador(jugador: Jugador) {
        jugador.estado = true;
    }

    mostrarDatos(index: number) {
        this.step = index;
    }

    getJugadores() {
        return this.http.get('');
    }
}
