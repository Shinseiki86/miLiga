import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressSpinnerModule
} from '@angular/material';

import {FilterPipe} from './pipes/filter.pipe';


import {AppComponent} from './app.component';
import { JuegoComponent } from './juego/juego.component';
import { EquipoComponent } from './equipo/equipo.component';
import {RouterModule, Routes} from '@angular/router';
import { JugadorComponent } from './jugador/jugador.component';
import { JugadoresComponent } from './jugadores/jugadores.component';

const appRoutes: Routes = [
    {
        path: 'juego',
        component: JuegoComponent,
        data: {  }
    },
    {
        path: 'equipo',
        component: EquipoComponent,
        data: {  }
    },
    {
        path: 'jugadores',
        component: JugadoresComponent,
        data: {  }
    }
];

@NgModule({
    declarations: [
        AppComponent,
        JuegoComponent,
        EquipoComponent,
        JugadorComponent,
        JugadoresComponent,
        FilterPipe
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        ),
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatIconModule,
        MatGridListModule,
        MatInputModule,
        MatDatepickerModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
