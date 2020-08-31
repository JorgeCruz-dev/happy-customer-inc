import { Component, OnInit } from '@angular/core'

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html"
})

export class NavbarComponent implements OnInit {
    public app_name: String;
    public isLogged: boolean = true;

    constructor() {
        this.app_name = "Happy Customer inc"
    }

    ngOnInit() {

    }
}