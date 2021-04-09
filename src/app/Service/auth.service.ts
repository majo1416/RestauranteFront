import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //el BehaviorSubject que nos permitirá guardar el estado de login
  //tendrá un estado inicial booleano según lo que retorne checkToken
  isLogin = new BehaviorSubject<boolean>(this.checkToken());

  //el BehaviorSubject que nos permitirá saber si somos admin o no
  admin = new BehaviorSubject<boolean>(false);
  //user = new BehaviorSubject<boolean>(null);
  //guarda = new BehaviorSubject<boolean>(null);
  iniciarSesion = new BehaviorSubject<boolean>(this.checkToken());
  //método que nos permitirá chequear si existe un token, en tal
  //caso retornará true
  private checkToken() : boolean {
    return !!localStorage.getItem('token');
  }

  //método que nos permite establecer el token en el almacenamiento local
  //y enviar una señal del BehaviorSubject para establecer su nuevo valor en
  //true para indicar que estamos logueados
  login(token:string) : void {
    localStorage.setItem('token', token);
    this.admin.next(false);
    this.isLogin.next(true);
    this.setLogin('1')
  }
  //metodo para activar el admin el usuario metiante el toquen
  setAdminUser(admin:string) : void {
    localStorage.setItem('root',admin);
  }

  //metodo para obtener el recuperar el admin del usuario

  getAdminUser():string{
    return localStorage.getItem('root')
  }

  //método que nos permite establecer el nombre del usuario

  setCourrentUser(user:string) : void {
    localStorage.setItem('courrentUser', user);
  }

  //método que nos permite recuperar el nombre del usuario
  getCourrentUser() : string {
    return localStorage.getItem('courrentUser');
  }

  //método que nos permite eliminar el nombre de usuario
  private deleteCourrentUser() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('courrentUser');
    localStorage.removeItem('root');
  }

  setLogin(user:string) : void {
    localStorage.setItem('login', user);
  }

  getLogin():string{
    return localStorage.getItem('login');
  }

  deletelogin():void{
  localStorage.removeItem('login')
  }
  //método que nos permite romover el token almacenado y el nombre del
  //usuario actual y enviar una señal al BehaviorSubject para establecer
  //su nuevo valor, en este caso false para indicar que no estamos logueados
  logout() : void {
    localStorage.removeItem('token');
    this.deleteCourrentUser();
    this.isLogin.next(false);
    this.deletelogin();
    this.setLogin('0');
  }

  //método que nos retorna el BehaviorSubject cómo un observable
  isLoggedIn() : Observable<boolean> {
    return this.isLogin.asObservable();
   }

   init() : Observable<boolean> {
     return this.iniciarSesion.asObservable();
   }

   /*
   isUser() : Observable<boolean> {
    return this.user.asObservable();
   }
*/

   //método que nos retorna el BehaviorSubject admin cómo un observable
  isAdmin() : Observable<boolean> {
    return this.admin.asObservable();
   }

}
