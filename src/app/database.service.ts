import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  readonly ROOT_URL;
  
  constructor(private http:HttpClient) {
    this.ROOT_URL="https://auth-service-ip.herokuapp.com/dbAPI";
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
  createPatientProfile(token:any,name:String,surname:String,age:Number,sex:String,environment:String,homeStreet:String,homeCity:String,homeCountry:String,homeStreetNr:Number,job:String,activity:String,homeNumber:String,type:String){
    return this.post(`createPatientProfile/${token}`,{name,surname,age,sex,environment,homeStreet,homeCity,homeCountry,homeStreetNr,job,activity,homeNumber,type});
  }
  createDoctorProfile(token:any,name:String,surname:String,specializations:Array<String>,cabinetStreet:String,cabinetCity:String,cabinetRegion:String,cabinetStreetNr:Number,age:Number,workNumber:String,hospitalName:String,type:String){
    return this.post(`createPatientProfile/${token}`,{name,surname,age,specializations,cabinetStreet,cabinetCity,cabinetRegion,cabinetStreetNr,hospitalName,workNumber,type});
  }
  createDoctorDisponibility(token:any,disponibility:Array<String>){
    alert(disponibility[0]);
    return this.post(`createPatientProfile/${token}`,{disponibility});
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


  setGeolocation(username:String,latitude:Number,longitude:Number){
    return this.post(`setGeolocation/${username}`,{latitude,longitude});
  }

}
