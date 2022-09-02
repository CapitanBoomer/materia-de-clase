import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarimagenComponent } from './componentes/mostrarimagen/mostrarimagen.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { ListarPersonajesComponent } from './modelos/listar-personajes/listar-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarimagenComponent,
    PersonajesComponent,
    ListarPersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
