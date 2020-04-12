import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../_models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,private database:DatabaseService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
      'cpassword': [this.user.cpassword, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]]
    });
  }

  private inputValidation():boolean {
    if(this.user.password!=undefined && this.user.username!=undefined && this.user.email!=undefined && this.user.cpassword!= undefined){
      if(this.user.password.length>=8){
        return true;
      }
      else{
        alert('Password should be at least 8 characters long');
        return false;
      }
    }
    else{
      alert('Invalid user or password');
      return false;
    }
  };


  onRegisterSubmit() {
    if(this.inputValidation()==true){
      this.database.addUser(this.user.email,this.user.username,this.user.password).subscribe(()=>{alert("A mers!!");});
  }
  }

}

