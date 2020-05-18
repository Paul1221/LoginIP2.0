import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../_models/register.model';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {DatabaseService} from '../database.service';
import {ConfirmationMailService} from '../confirmation-mail.service';
import { ActivatedRoute } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterModel = new RegisterModel();
  registerForm: FormGroup;
  hide = true;
  matcher = new MyErrorStateMatcher();


  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private confirmmail: ConfirmationMailService) { }

  selectedType: String;

  types: Type[] = [
    {value:'pacient', viewValue:'Pacient'},
    {value:'doctor', viewValue:'Doctor'},
  ]


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [this.user.username, [
        Validators.required
      ]],
      email: [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]],
      cpassword: [this.user.cpassword, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]]
    },{validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('password').value;
  let confirmPass = group.get('cpassword').value;

  return pass === confirmPass ? null : { notSame: true }     
}


  onRegisterSubmit() {
      this.database.addUser(this.user.email,this.user.username,this.user.password).subscribe(()=>{alert("A mers!!");});
  }

}

