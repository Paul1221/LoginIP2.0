import { Component, OnInit } from '@angular/core';
import { RecoveryModel } from '../_models/recovery.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
import {User} from '../_models/user';
@Component({
  selector: 'app-recuperare',
  templateUrl: './recuperare.component.html',
  styleUrls: ['./recuperare.component.css']
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
            if (user != null){
                this.database.passRecover(this.user.email).subscribe();
            }
            //else
              //  alert("Email incorect!");
        }
    );
  }
}
