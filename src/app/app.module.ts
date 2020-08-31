import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { routing, appRoutingProviders } from "./app.routing";
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Catalogo } from './components/catalogo/catalogo.component'
import { AddProducto } from './components/addProducto/addProducto.component'
import { ListaProductos } from './components/listaProductos/listaProductos.component' //este es el home
import { AdministracionComponent  }  from './components/administracion/administracion.component'
import { LoginComponent } from './components/login/login.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ConexionService } from './services/conexion.service';

@NgModule({
  declarations: [
    AppComponent,
    Catalogo,
    AddProducto,
    ListaProductos,
    AdministracionComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AppRoutingModule,
    routing
  ],
  providers: [ ConexionService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
