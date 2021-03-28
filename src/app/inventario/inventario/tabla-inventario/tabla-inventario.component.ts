import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { InventarioService } from 'app/inventario/services/inventario.service';

export interface InventarioData {
  id: number;
  nombre: string;
  precioUnitario: number;
  existencias:number;
  rutaImagen?:string;
  talla?: string;
}


@Component({
  selector: 'tabla-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.scss']
})
export class TablaInventarioComponent implements OnInit {

  displayedColumns: string[] = ['imagen','nombre','talla','precioUnitario', 'existencias','opciones'];
  dataSource: MatTableDataSource<InventarioData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private inventarioService:InventarioService) {
  }

  ngOnInit() {
    this.obtenerInventario();
  }

  obtenerInventario() {
    this.inventarioService.getAllInventory().subscribe(
      snaps => {
        const inventarios:InventarioData[] = snaps.map(snap=>
          {
            return <InventarioData> {
              id:snap.payload.doc.id,
              ...snap.payload.doc.data() as InventarioData,
            }
          }  
        )
        this.dataSource = new MatTableDataSource(inventarios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

