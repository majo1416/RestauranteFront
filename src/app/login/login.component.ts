import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service';
import { AuthService } from '../../app/Service/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;
  info : any;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ServiceService,
    public auth: AuthService
  ) { }


  getInfo(){
    this.client.getRequest('http://localhost:5000/api/v01/user/getInfo',localStorage.getItem('token')
    ).subscribe(
      (datos): any => {
        this.info = datos["datos"]
        for (const iterator of this.info) {
          this.auth.setAdminUser(iterator['admin'])
        }
      }),
    (error) => {
      this.auth.logout();
      console.log("DEBEMOS INICIAR SESION");
    }
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
    this.auth.deletelogin()
    this.auth.setLogin('1')
  }
  async onSubmit() {
    if (this.form.valid) {
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login', {
        email: this.form.value.email,
        password: this.form.value.password
      }).subscribe(
        (response: any) => {
          this.load = true;
          console.log(response);
          this.auth.login(response.token)
              //se almacena el nombre del usuario en el almacenamiento de
              //sesion
            this.auth.setCourrentUser(response.name)
              //navegamos de nuevo al home, esta vez como usuario
              //logueado
            //loguiado

            this.auth.setLogin('1');
            //llamo el metodo de admin
            this.getInfo();
            //Para saber si es admin
            this.route.navigate( ['/']);
          Swal.fire('INICIO DE SESION CORRECTAMENTE')
            //cambiando load a true, volvemos a ocultar el spinner
            this.load = true;
            this.route.navigate( ['/']);
            //console.log(response);
          //this.route.navigate( ['/']);
      }),

      (error) => {

        console.log(error.status);

      };
    } else {

      console.log("Form error");
    }


     }



}
