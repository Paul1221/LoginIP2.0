import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../_models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
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
    this.database.isUsernameValid(this.user.username).subscribe(
      (user:{username:string}[])=>{
        if (this.user.username==user[0].username){
          this.database.getPasswordByUsername(this.user.username).subscribe(
            (user:{password:string}[])=>{
              if (this.user.password==user[0].password){
                alert("Connected succesfully");
              }
              else{
                alert("Wrong password");
              }
            }
          )
        }
        else{
            alert("Incorect Data.");
        }
      },
    );
  }
}
