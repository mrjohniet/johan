import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComprarArticuloComponent } from './home/comprar-articulo/comprar-articulo.component';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent

    },
    {   path: "gestion-inventario",
        loadChildren: () => import('./inventario/inventario.module').then(m => m.InventarioModule) 
    },
    {
        path: "comprar-articulo",
        component: ComprarArticuloComponent
    },
    {
        path: "**",
        redirectTo: '/'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
