import { Component } from '@angular/core';
import { Personajes } from './modelos/personajes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fotito: string='https://es.web.img2.acsta.net/pictures/22/02/15/16/01/2694773.jpg'
  public fotito2: string='https://www.ecartelera.com/images/sets/54100/54192.jpg'
  public fotito3: string ='https://www.publimetro.cl/resizer/VorxdNaGFiUor-_SksG3qaSzLrI=/800x0/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/7HDDDCOM2JGYTHN2ZKW2WKKM5I.png';
  public fotito4: string ='https://www.ecartelera.com/images/sets/54100/54193.jpg'
  public listarpersonajes:Array<Personajes> =[
  {

    nombre :'gandalf',
    foto:'',
    raza:'enanos',
    descripcion:'hola',
    aliados:'enanos-enanos'
  }


  ]
}
