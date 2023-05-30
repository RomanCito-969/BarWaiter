import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './componets/tabla/tabla.component';
import { HomeComponent } from './componets/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'bebidas', component: TablaComponent, data: { tipo: 'bebida' } },
  { path: 'tapas', component: TablaComponent, data: { tipo: 'tapa' } },
  { path: 'platos', component: TablaComponent, data: { tipo: 'plato' } },
  { path: 'postres', component: TablaComponent, data: { tipo: 'postre' } },
  { path: 'cubatas', component: TablaComponent, data: { tipo: 'cubata' } },
  { path: 'cafes', component: TablaComponent, data: { tipo: 'cafe' } },
  { path: 'desayunos', component: TablaComponent, data: { tipo: 'desayuno' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
