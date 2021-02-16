import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ContadorComponent } from './contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heroes/heroes.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
