import { Component, Input } from '@angular/core';
import { Personajes } from '../personajes';
@Component({
  selector: 'app-listar-personajes',
  templateUrl: './listar-personajes.component.html',
  styleUrls: ['./listar-personajes.component.scss']
})
export class ListarPersonajesComponent  {
  public personaje: Array<Personajes>=[];

  }


