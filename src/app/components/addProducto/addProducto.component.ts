import { Component, OnInit } from '@angular/core'
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
    selector: "addProducto",
    templateUrl: "./addProducto.component.html"
})

export class AddProducto implements OnInit {

    public producto: any = {
        nombre: '',
        marca: '',
        precio: ''
    }

    constructor(private _conexion: ConexionService) {

    }
    ngOnInit() {
        
    }

    agregar() {
        this._conexion.addProducto(this.producto);
    }
}