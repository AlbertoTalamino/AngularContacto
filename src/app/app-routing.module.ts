import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesContactosComponent } from './detalles-contactos/detalles-contactos.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';

const routes: Routes = [
  {path: 'detail/:id', component: DetallesContactosComponent},
  {path: 'contactos', component: ListaContactosComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
