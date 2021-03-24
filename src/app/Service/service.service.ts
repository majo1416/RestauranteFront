import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  getRequest(route: string, token?:string) {

    let config:any = {
      responseType: "json"
    }
    if (token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config["headers"] = header;
    }
    console.log(config);

    return this.http.get(route, config);
  }


  postRequest(route: string, data?:any, token?:string) {
    let config:any = {
      responseType: "json"
    }

    if (token){
      const header = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      config["header"] = header;
    }

    return this.http.post(route, data, config);
  }


/*
  postRequest(route: string,data?:any,token?:string){
    
      let config:any ={
        responseType: "json"
      }
      return this.http.post(route,data,config);
  }*/


}
