import { Component, OnInit } from '@angular/core'
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html"
})

export class NavbarComponent implements OnInit {
    public app_name: String;
    public isLogged: boolean = true;

    constructor(public _authS: AuthService) {
        this.app_name = "Happy Customer inc"
    }

    ngOnInit() {

    }
}