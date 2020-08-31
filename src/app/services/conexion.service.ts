import { Inject, Injectable } from '@angular/core'
import { AngularFirestore, 
    AngularFirestoreCollection,
    AngularFirestoreDocument } from '@angular/fire/firestore' //'angularfire2/firestore'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../interfaces/producto';

@Injectable({
    providedIn: 'root'
})

export class ConexionService { 
    private productosCollection: AngularFirestoreCollection<Producto>;
    private productos: Observable<Producto[]>;

    //Esto se utiliza para el metodo deleteProducto
    private productDoc: AngularFirestoreDocument<Producto>

    constructor(private _afs: AngularFirestore) {
        this.productosCollection =  _afs.collection<Producto>("Productos");
        //nos va a traer la conexion de productos y se los va a asignar a productos de tipo Observable
        // this.productos = this.productosCollection.valueChanges(); //traer info desde la DB
        this.productos = this.productosCollection.snapshotChanges().pipe(
            map(actions => actions.map(a => {
              const data = a.payload.doc.data() as Producto;
              const id = a.payload.doc.id;
              return { id, ...data };
            }))
        );

    }

    listaProductos() {
        return this.productos;
    }

    addProducto(producto: Producto) {
        this.productosCollection.add(producto)
    }

    deleteProducto(producto: Producto) {
        this.productDoc = this._afs.doc<Producto>(`Productos/${producto.id}`);
        this.productDoc.delete();
    }

    editProducto(producto: Producto) {
        this.productDoc = this._afs.doc<Producto>(`Productos/${producto.id}`);
        this.productDoc.update(producto);
    }

}