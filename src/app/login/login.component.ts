import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ServiceService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }
  async onSubmit() {
    if (this.form.valid) {
      let data = {
        email: this.form.value.email,
        password: this.form.value.password
      }
      console.log(data);
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/register',data).subscribe(
        (response: any) => {
          /*Swal.fire({
            icon: 'question',
            title: 'Desea guardar los cambios?',
            showCancelButton: true,
            cancelButtonText: `Cancelar`,
            showDenyButton: true,
            denyButtonText: `No guardar`,
            showConfirmButton: true,
            confirmButtonText: `Guardar`
          }).then((result) => {
            //Read more about isConfirmed, isDenied below
            if (result.isConfirmed) {
              this.route.navigate( ['/registerok'])
            } else if (result.isDenied) {
              Swal.fire('Los cambios no han sido guardados', '', 'info')
            }
          })*/
          Swal.fire('INICIO DE SESION CORRECTO').then((result) =>{
            if (result.isConfirmed) {
               //cambiando load a true, volvemos a ocultar el spinner
              this.load = true;
              this.route.navigate( ['/']);
              //console.log(response);
            }
          }) 
   
         
     },
      (error) => {
        this.load = true;

        console.log(error.status);

      })


    } else {

      console.log("Form error");
    }








  }
}
