import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './componets/tabla/tabla.component';
import { NavBarComponent } from './componets/nav-bar/nav-bar.component';
import { FooterComponent } from './componets/footer/footer.component';
import { BotonEnviarComponent } from './componets/boton-enviar/boton-enviar.component';
import { TablaComandaComponent } from './componets/tabla-comanda/tabla-comanda.component';

import { CardComponent } from './componets/card/card.component';
import { HomeComponent } from './componets/home/home.component';
import { BotonBorrarComponent } from './componets/boton-borrar/boton-borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaComponent,
    NavBarComponent,
    FooterComponent,
    BotonEnviarComponent,
    TablaComandaComponent,
    CardComponent,
    HomeComponent,
    BotonBorrarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
