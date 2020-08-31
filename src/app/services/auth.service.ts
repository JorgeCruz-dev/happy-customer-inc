import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from "firebase/app"

@Injectable({ providedIn: "root"})

export class AuthService {

    public usuario: any = {};

    constructor(public _afAuth: AngularFireAuth) {
        this._afAuth.authState.subscribe(
            user => {
                console.log("auth Stage: ", user);
                if (!user) 
                    return;
                
                this.usuario.nombre = user.displayName;
                this.usuario.uid =  user.uid;
                this.usuario.email = user.email;
                this.usuario.photoURL = user.photoURL;
            },
            error => {
                console.log(error);
            }
        )
    }

    login() {
        this._afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    logout() {
        this.usuario = {};
        this._afAuth.signOut();
    }
}