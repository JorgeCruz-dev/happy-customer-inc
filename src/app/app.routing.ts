import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes
import { ListaProductos } from './components/listaProductos/listaProductos.component' //este es el home
import { AdministracionComponent  }  from './components/administracion/administracion.component'
import { LoginComponent } from './components/login/login.component'

//Definir las rutas
const appRoutes: Routes = [
    //cuando la ruta esta vacia
    { path: "", component: ListaProductos},
    //Cuando se pone el nombre del component en la ruta
    {path: "home", component: ListaProductos },
    {path: "administracion", component: AdministracionComponent },
    {path: "login", component: LoginComponent },

    //Cuando no existe
    {path: "**", component: ListaProductos }

]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =  RouterModule.forRoot(appRoutes);