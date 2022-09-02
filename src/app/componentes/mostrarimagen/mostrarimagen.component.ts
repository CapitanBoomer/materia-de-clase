import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mostrarimagen',
  templateUrl: './mostrarimagen.component.html',
  styleUrls: ['./mostrarimagen.component.scss']
})
export class MostrarimagenComponent  {
  @Input()
  public imagen: string = '';
  public imagenerror: string = 'https://image.shutterstock.com/image-vector/caution-exclamation-mark-white-red-260nw-1055269061.jpg';
  public cambiarimagen(): void{
    this.imagen = this.imagenerror;
  }
}
