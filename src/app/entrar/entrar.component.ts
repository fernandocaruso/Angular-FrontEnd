import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UserLogin } from '../model/UserLogin';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment.prod';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

usuarioLogin: UserLogin = new UserLogin()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar () {
    this.auth.entrar(this.usuarioLogin).subscribe((resp: UserLogin) => {
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.foto = this.usuarioLogin.foto
      environment.id = this.usuarioLogin.id

      this.router.navigate(['/home'])
    }, erro => {
      if (erro.status == 500) {
        alert('Usuário ou senha incorretos!')
      }
    })
  }
}
