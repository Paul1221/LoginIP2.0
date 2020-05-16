import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../_models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
import {ConfirmationMailService} from '../confirmation-mail.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
})
export class SelectionComponent implements OnInit {
  user:RegisterModel = new RegisterModel();
  selectionForm: FormGroup;
  hide = true;
  token:any;
  selectedType: String;

  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private confirmmail:ConfirmationMailService , private router:Router , private route: ActivatedRoute) { }

  

  types: Type[] = [
    {value:'pacient', viewValue:'Pacient'},
    {value:'doctor', viewValue:'Doctor'},
  ]

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");

    this.selectionForm = this.formBuilder.group({
      'type': [this.user.type,[
        Validators.required
     ]]
    });
  }

  onSelectSubmit(){
    if(this.user.type === 'pacient')
      this.router.navigate(['/patientProfileCreation/'+this.token]);
    else
    if(this.user.type === 'doctor')
      this.router.navigate(['/doctorProfileCreation/'+this.token]);
  }
}
