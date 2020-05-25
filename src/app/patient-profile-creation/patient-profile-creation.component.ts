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

interface Activity {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-patient-profile-creation',
  templateUrl: './patient-profile-creation.component.html',
  styleUrls: ['./patient-profile-creation.components.css']
  
})
export class PatientProfileCreationComponent implements OnInit {
  user:ProfileModel = new ProfileModel();
  profileForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private route: ActivatedRoute) { }
  token:any;
  selectedGender: string;
  selectedEnvironment: string;

  genders: Gender[] = [
    {value:'male', viewValue:'Barbat'},
    {value:'female', viewValue:'Femeie'}
  ];

  environments: Environment[] = [
    {value:'rural', viewValue:'Rural'},
    {value:'urban', viewValue:'Urban'}
  ];

  activities: Activity[] = [
    {value:'zilnic', viewValue:'Zilnic'},
    {value:'o_data_pe_saptmana', viewValue:'O data pe saptamana'},
    {value:'o_data_pe_luna', viewValue:'O data pe luna'},
    {value:'mai_rar', viewValue:'Mai rar'}
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
        Validators.required
      ]],
      'environment': [this.user.environment, [
        Validators.required
      ]],
      'county': [this.user.county, [
        Validators.required
      ]],
      'municipality': [this.user.municipality, [
        Validators.required
      ]],
      'street': [this.user.street, [
        Validators.required
      ]],
      'number': [this.user.number, [
        Validators.required
      ]],
      'bloc': [this.user.bloc, [
        Validators.required
      ]],
      'scara': [this.user.scara, [
        Validators.required
      ]],
      'flat': [this.user.flat, [
        Validators.required
      ]],
      'job': [this.user.job, [
        Validators.required
      ]],
      'activity': [this.user.activity, [
        Validators.required
      ]],
      'medicalHistory': [this.user.medicalHistory, [
        Validators.required
      ]],
      'workNumber': [this.user.workNumber, [
        Validators.required   
      ]]
    });
  }
  onSubmit():void{
      this.database.createPatientProfile(this.token,this.user.name,this.user.surname,this.user.age,this.user.sex,this.user.environment,this.user.street,this.user.municipality,this.user.county,this.user.number,this.user.job,this.user.activity,this.user.workNumber,'pacient').subscribe(()=>{alert("A mers!!");});
  }
}
