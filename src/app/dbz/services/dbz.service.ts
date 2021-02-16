import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000,
  };

  get personajes(): Personaje[]{
    return [...this._personajes];
  }

  constructor() {
  }

  agregarNuevoPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
