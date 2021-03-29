import {Component, OnInit} from '@angular/core';
import { InventarioData } from 'app/models/inventario-data'
import { InventarioService } from 'app/inventario/services/inventario.service';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    articulos:InventarioData[]=[];
    constructor( private inventarioService: InventarioService) {

    }

    ngOnInit() {
        this.obtenerInventario();
    }

    obtenerInventario() {
        this.inventarioService.getAllInventory().subscribe(
          snaps => {
            const inventarios:InventarioData[] = snaps
            this.articulos=inventarios;
          }
        );
    }

}
