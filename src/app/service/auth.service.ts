import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


    entrar (usuarioLogin: UserLogin): Observable<UserLogin> {
      return this.http.post<UserLogin>("https://madahcaruso.herokuapp.com/usuarios/logar", usuarioLogin)
  }

    cadastrar(usuario: User): Observable<User> {
      return this.http.post<User>("https://madahcaruso.herokuapp.com/usuarios/cadastrar", usuario)
  // quando utilizar a função cadastrar (post), usar a função de POST no http, no endereço heroku, e passando o USUÁRIO.
  // vindo da User, o usuário terá id, nome, usuario, foto, senha, etc.
  // *** utilizar o banco de dados do heroku até o .com {não copiar o swagger_ui}! *** \\
  // se atentar a importação automática do User.
  // **Observable**: garantia no front-end que nosso back-end receberá todos os dados que precisa.
  // passando dado incorreto pro back-end e o back-end aceitar um dado incorreto, temos que refazer todo o banco de dados.
  // basicamente uma vista bem mais rigorosa sobre os dados, tendo certeza de que os dados estão indo corretamente.
  // não é obrigatório mas é bom ser feito, para que os dados sejam enviados da forma mais correta possível.

}

getByIdUser (id: number): Observable<User> {
  return this.http.get<User>(`https://madahcaruso.herokuapp.com/usuarios/${id}`)
}

putUser(user: User): Observable<User>{
  return this.http.put<User>('https://madahcaruso.herokuapp.com/usuarios/alterar', user)
}

logado(){
  let ok: boolean = false

  if (environment.token != '') {
    ok = true
  }
    return ok

  }
}
  // criando variavel OK determinando que é booleana e falsa.
  // retornando ok = retornando falso. significa que o método está retornando um boolean.
  // começa com o OK falso e caso seja diferente de vazio = verdadeiro.


