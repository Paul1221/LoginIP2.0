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
      alert(this.ROOT_URL+'/'+uri);
    return this.http.post(this.ROOT_URL+'/'+uri,payload);
    }
    private patch(uri:String,payload:Object){
      return this.http.patch(this.ROOT_URL+'/'+uri,payload);
    }

  addUser(email:String,username:String,password:String){

    return this.post('addUser',{email,username,password});
  }
  createUserProfile(token:any,name:String,surname:String,age:Number){
    alert("se intra");
    const uri=`createUserProfile/${token}`;
    alert(uri);
    return this.post(uri,{name,surname,age});
  }
  addSocialUser(email:String,username:String,password:String){

    return this.post('addSocialUser',{email,username,password});
  }

  passRecover(email:String){

    alert('S-a intrat');
    console.log("aici0");
    return this.get(`passRecover/${email}`);
  }

  getUsers(){
    return this.get('getUsers');
  }

  getUserByEmail(email:String){
    return this.get(`getUserByEmail/${email}`);
  }

  isUsernameValid(username:String){
    return this.get(`isUsernameValid/${username}`);
  }

  getUserByUsername(username:String){
    return this.get(`getUserByUsername/${username}`);
  }

}
