import { Component, OnInit } from '@angular/core';
import {comidas} from '../productos.model';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  title = 'datatables';
  dtOptions: DataTables.Settings = {};
  Comidas : any = comidas;
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: "//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json"
      }
    };
    console.log(8787);
  }

}
