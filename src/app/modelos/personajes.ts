type raza = 'elfos' | 'enanos' | 'humanos' |'gobbit' | 'otros';
type aliados = `${raza}-${raza}`;
const aalidos: aliados= 'elfos-humanos'
export interface Personajes {

  nombre: string;
  foto:string;
  raza: raza;
  descripcion: string;
  aliados: aliados;

}
