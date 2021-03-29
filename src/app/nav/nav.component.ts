import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/Service/auth.service';
import {ServiceService} from  '../Service/service.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    info : any;
  constructor(
    public auth : AuthService,
    public Client : ServiceService
    ) { }

    getInfo(){
      this.Client.getRequest('http://localhost:5000/api/v01/user/getInfo',localStorage.getItem('token')
      ).subscribe(
        (data): any => {this.info = data["datos"]
        console.log(this.info);
      }
      ,
      (error) => {
        console.log(error);
      })
    }

  ngOnInit(): void {
  this.getInfo()
  }

}
