import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearInventarioComponent } from './inventario/crear-inventario/crear-inventario.component';
import { EditarInventarioComponent } from './inventario/editar-inventario/editar-inventario.component';
import { InventarioComponent } from './inventario/inventario.component';


const routes: Routes = [
  {
    path: "",
    component: InventarioComponent
  },
  {
    path: "crear-inventario",
    component: CrearInventarioComponent
  },
  {
    path: "editar-inventario",
    component: EditarInventarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioRoutingModule { }
