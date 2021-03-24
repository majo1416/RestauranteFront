import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders} from '@angular/common/http';
 

@Injectable({
  providedIn: 'root'
})
export class ClientProductsService {

  constructor(private http: HttpClient) { }
  //metodo para perdir la peticion al servidor 
  getAllProducto(route: string){
    let config:any = {
      responseType: "json"
    }
    const header = new HttpHeaders().set('Authorization', '57ydf544ljka559ahjkfgd1');
    config["header"] = header;
    return this.http.get(route, config);
  }
}

