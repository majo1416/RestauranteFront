import { Component, OnInit } from '@angular/core';
import {comidas} from '../productos.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  Comidas : any = comidas;
  constructor() { }

  ngOnInit(): void {
  }

}
