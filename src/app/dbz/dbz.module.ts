import { AgregarComponent } from './agregar/agregar.component';
import { CommonModule } from '@angular/common';
import { DbzService } from './services/dbz.service';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { PersonajesComponent } from './personajes/personajes.component';

@NgModule({
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, FormsModule],
  providers:[ DbzService]
})
export class DbzModule {}
