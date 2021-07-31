import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, // página inicial: caminho vazio = aba entrar! - pathMatch = compatibilidade total.
  {path: 'entrar', component: EntrarComponent}, // path da página entrar. Atentar-se a não colocar / antes do caminho.
  {path: 'cadastrar', component: CadastrarComponent}, // path da página cadastrar. Atentar-se a não colocar / antes do caminho.
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent}

  // basicamente: se a página der em branco (pois não temos página inicial), será redirecionada através do redirectTo para uma página.
  // logo, a página Entrar acaba sendo a inicial.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
