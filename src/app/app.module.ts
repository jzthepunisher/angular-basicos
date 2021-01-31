import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
