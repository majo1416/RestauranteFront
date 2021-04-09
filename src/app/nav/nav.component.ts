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
  ngOnInit(): void {

  }

}
