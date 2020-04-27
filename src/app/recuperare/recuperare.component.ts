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
      'email': [this.user.email, [
        Validators.required
      ]]
    });
  }
  onSubmit(){
    this.database.getUserByEmail(this.user.email).subscribe(
        (user:User)=>{
            if (this.user.email==user.email){
                alert(this.user.email);
                this.database.passRecover(this.user.email);
            }
            else
                alert("Email incorect!");
        }
    );
  }
}
