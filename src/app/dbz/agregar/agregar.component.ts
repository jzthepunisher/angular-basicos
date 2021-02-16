import { Component, Input } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input()
  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

 constructor(private dbzService: DbzService){

 }

  agregar() {
    console.log(this.nuevo);
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarNuevoPersonaje(this.nuevo);

    this.nuevo = {
      nombre:'',
      poder:0
    }
  }
}
