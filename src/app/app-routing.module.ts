import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}, // página inicial: caminho vazio = aba entrar! - pathMatch = compatibilidade total.

  {path: 'entrar', component: EntrarComponent}, // path da página entrar. Atentar-se a não colocar / antes do caminho.
  {path: 'cadastrar', component: CadastrarComponent}, // path da página cadastrar. Atentar-se a não colocar / antes do caminho.

  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},

  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id' , component: TemaEditComponent},
  {path: 'tema-delete/:id' , component: TemaDeleteComponent},

  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'user-edit/:id', component: UserEditComponent}

  // basicamente: se a página der em branco (pois não temos página inicial), será redirecionada através do redirectTo para uma página.
  // logo, a página Entrar acaba sendo a inicial.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
