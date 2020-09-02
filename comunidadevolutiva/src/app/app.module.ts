import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { StartComponent } from './pages/start/start.component';
import { LogoymenuComponent } from './components/logoymenu/logoymenu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SeccionProyectoComponent } from './components/seccion-proyecto/seccion-proyecto.component';
import { SeccionMapaComponent } from './components/seccion-mapa/seccion-mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    StartComponent,
    LogoymenuComponent,
    CarouselComponent,
    SeccionProyectoComponent,
    SeccionMapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
