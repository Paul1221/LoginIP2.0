import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  readonly ROOT_URL;
  constructor(private http:HttpClient) { 
    this.ROOT_URL="https://auth-service-ip.herokuapp.com";
  }

  private get(uri:String){
    return this.http.get(this.ROOT_URL+'/'+uri);
   }

  keepLoggedIn(username:String){
      this.get('login/'+username).subscribe(
        (token:{token:string})=>{
          localStorage.setItem('loginToken',token.token);
          console.log(localStorage.getItem('loginToken'));
        }
      );
  }
}
