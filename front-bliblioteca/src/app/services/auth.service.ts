import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin = "http://localhost/api/user/login";

  constructor(private http:HttpClient) { }

  login(credentials:{usuario_login:string,usuario_senha:string}):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post<any>(this.urlLogin, JSON.stringify(credentials), { 
      headers, 
      observe: 'response'
    });
  }
}
