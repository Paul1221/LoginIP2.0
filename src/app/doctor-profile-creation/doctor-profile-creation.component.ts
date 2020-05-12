import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../_models/profile.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import {ActivatedRoute } from '@angular/router';

interface Gender {
    value: string;
    viewValue: string;
  }
  
  interface Environment {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-doctor-profile-creation',
  templateUrl: './doctor-profile-creation.component.html',
})
export class DoctorProfileCreationComponent implements OnInit {
  user:ProfileModel = new ProfileModel();
  profileForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private route: ActivatedRoute) { }
  token:any;

  genders: Gender[] = [
    {value:'male', viewValue:'Barbat'},
    {value:'female', viewValue:'Femeie'}
  ];

  environments: Environment[] = [
    {value:'rural', viewValue:'Rural'},
    {value:'urban', viewValue:'Urban'}
  ];

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
    

    this.profileForm = this.formBuilder.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'surname': [this.user.surname, [
        Validators.required
      ]],
      'age': [this.user.age, [
        Validators.required
      ]],
      'sex': [this.user.sex, [
       
      ]],
      'environment': [this.user.environment, [
        
      ]],
      'homeAdress': [this.user.homeAdress, [
        Validators.required
      ]],
      'specialization': [this.user.specialization, [
        
      ]],
      'cabinetAdress': [this.user.cabinetAdress, [
        
      ]],
      'workNumber': [this.user.workNumber, [
        
      ]]
    });
  }
  onSubmit():void{
      this.database.createUserProfile(this.token,this.user.name,this.user.surname,this.user.age);
  }

}
