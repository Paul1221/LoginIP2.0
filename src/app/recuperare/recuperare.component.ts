import { Component, OnInit } from '@angular/core';
import { RecoveryModel } from '../_models/recovery.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
import {User} from '../_models/user';
@Component({
  selector: 'app-recuperare',
  templateUrl: './recuperare.component.html',
})
export class RecuperareComponent implements OnInit {
  user: RecoveryModel = new RecoveryModel();
  recoveryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private database:DatabaseService) { }
  
  ngOnInit() {
    this.recoveryForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required
      ]]
    });
  }
  onSubmit(){
    this.database.getUserByUsername(this.user.username).subscribe(
        (user:User)=>{
            if (this.user.username==user.username)
                alert("Parola este: $this.user.password$");
            else 
                alert("Utilizatorul nu exista!");
        }
    );
  }



}