import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly ROOT_URL;

  constructor(private http:HttpClient) {
    this.ROOT_URL="http://localhost:8000/dbAPI";
   }

   private get(uri:String){
     return this.http.get(this.ROOT_URL+'/'+uri);
   }
   
   private post(uri:String,payload:Object){
    return this.http.post(this.ROOT_URL+'/'+uri,payload);
  }

  addUser(email:String,username:String,password:String){
    
    return this.post('addUser',{email,username,password});
  }

  getUsers(){
    return this.get('getUsers');
  }

  getUsernameByEmail(email:String){
    return this.get(`getUsernameByEmail/${email}`);
  }

  getPasswordByEmail(email:String){
    return this.get(`getPasswordByEmail/${email}`);
  }

  isUsernameValid(username:String){
    return this.get(`isUsernameValid/${username}`);
  }

  getPasswordByUsername(username:String){
    return this.get(`getPasswordByUsername/${username}`);
  }

}
