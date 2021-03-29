import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { InventarioService } from 'app/inventario/services/inventario.service';
import { InventarioData } from 'app/models/inventario-data'

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

  constructor(
    private inventarioService:InventarioService,
    private router:Router,
    public dialog: MatDialog) {
  }

  ngOnInit() {
    this.obtenerInventario();
  }

  obtenerInventario() {
    this.inventarioService.getAllInventory().subscribe(
      snaps => {
        const inventarios:InventarioData[] = snaps
        this.dataSource = new MatTableDataSource(inventarios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
  }

  edit(idInventario){
    this.router.navigate(['/gestion-inventario/editar-inventario',{id:idInventario}])
  }

  deleteInventory(idInventario){
    const dialogRef = this.dialog.open(DeleteDialog);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.inventarioService.deleteInventory(idInventario);
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


@Component({
  selector: 'delete-dialog',
  templateUrl: 'delete-dialog/delete-dialog.html',
})
export class DeleteDialog {

  constructor(public dialogRef: MatDialogRef<DeleteDialog>) {
    
  }
  onYesClick(){
    this.dialogRef.close(true);
  }
  onNoClick(){
    this.dialogRef.close();
  }
}
