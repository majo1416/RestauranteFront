import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService} from '../Service/service.service'
@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  form: FormGroup;
  load: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private client: ServiceService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  async onSubmit() {


    if (this.form.valid) {

      let data = {
        email: this.form.value.email,
        password: this.form.value.password,
        name: this.form.value.name,
        lastname: this.form.value.lastname,
      }
      console.log(data);
      this.load = false;
      this.client.postRequest('http://localhost:5000/api/v01/user/login',data).subscribe(

        (response: any) => {
          //cambiando load a true, volvemos a ocultar el spinner
          this.load = true;
          this.route.navigate( ['/registrado']);
          //console.log(response);




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
