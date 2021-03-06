import { Component, OnInit } from '@angular/core'
import { ConexionService } from 'src/app/services/conexion.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: "addProducto",
    templateUrl: "./addProducto.component.html"
})

export class AddProducto implements OnInit {

    public producto: any = {
        nombre: '',
        marca: '',
        precio: '',
        uid: '',
        photoURL: '',
        nombreUsuario: ''
    }

    constructor(private _conexion: ConexionService, public _authS: AuthService) {

    }
    ngOnInit() {
        
    }

    agregar() {
        this.producto.nombreUsuario = this._authS.usuario.nombre;
        this.producto.photoURL = this._authS.usuario.photoURL;
        this.producto.uid = this._authS.usuario.uid;
        this._conexion.addProducto(this.producto);
    }
}