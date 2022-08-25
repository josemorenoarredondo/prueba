import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  obtenerPersonas(){
    return [
      {id: 1, nombre: 'Joselo', apellido: 'Moreno'},
      {id: 2, nombre: 'David', apellido:'Perez' }
    ];
  }
}
