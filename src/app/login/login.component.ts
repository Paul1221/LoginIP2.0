import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../_models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
import {User} from '../_models/user'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})


export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,private database:DatabaseService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }

  onLoginSubmit() {
    
    this.database.getUserByUsername(this.user.username).subscribe(
      (user:User)=>{
        if (this.user.username==user.username){
              if (this.user.password==user.password){
                if(user.active==true){
                  alert("Te-ai conectat cu succes!");
                }
                else{
                  alert("Contul nu este activat!");
                }
              }
              else{
                alert("Parola gresita");
              }
            }
            else{
              alert("Username-ul nu exista")
            }
          }
        );
      }
}
