import { Component, OnInit } from '@angular/core'
import { ConexionService } from '../../services/conexion.service'

@Component({
    selector: "listaProductos",
    templateUrl: "./listaProductos.component.html"
})

export class ListaProductos implements OnInit {

    listaProductos: any; 
    constructor(private _conexion: ConexionService) {
        this._conexion.listaProductos().subscribe(
            data => {
                this.listaProductos = data;
                console.log(data);
            },
            error => {
                console.log(error);
            }
        )
    }
    
    ngOnInit() {

    }
}
