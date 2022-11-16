import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ServicioContactoService {

  constructor(private http: HttpClient) { }

  getContacto(): Observable<any>{
    return this.http.get<any>('https://reqres.in/api/users?page=2')  
  }
}
