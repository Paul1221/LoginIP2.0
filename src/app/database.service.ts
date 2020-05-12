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
    
  addUser(email:String,username:String,password:String,type:String){

    return this.post('addUser',{email,username,password,type});
  }
  createUserProfile(token:any,name:String,surname:String,age:Number,sex:String,environment:String,homeAdress:String,job:String,activity:String,workNumber:String){
    return this.post(`createPatientProfile/${token}`,{name,surname,age,sex,environment,homeAdress,job,activity,workNumber});
  }
  addSocialUser(email:String,username:String,password:String){

    return this.post('addSocialUser',{email,username,password});
  }

  passRecover(email:String){
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
