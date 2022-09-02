import { Component, Input } from '@angular/core';
import { Personajes } from './../../modelos/personajes';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent  {
  @Input() public personaje!: Personajes;
}
