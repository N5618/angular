import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root',
})
export class ApiCalls {
  
  baseUrl:string ="http://127.0.0.1:5000/api/";
 

  constructor( private http : HttpClient){};

  get(url:string):Observable <any>{
    return this.http.get(`${this.baseUrl}${url}` );  }
 
  post(url:string,object:any):Observable <any>{
    return this.http.post(`${url}`,object) }

  delete( url : string ,id:number){
    return this.http.delete(`${this.baseUrl}${url}?id=${id}` );  
  }
  put(url:string,object:any,id:number){
    return this.http.put(`${this.baseUrl}${url}?id=${id}`,object)
  }
}
