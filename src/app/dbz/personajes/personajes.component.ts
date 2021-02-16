import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

interface Personaje {
  nombre: string;
  poder: number;
}

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  };
  constructor(private dbzService:DbzService) {


   }



}
