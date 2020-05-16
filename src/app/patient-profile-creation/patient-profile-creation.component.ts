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
      'homeAdress': [this.user.homeAdress, [
        Validators.required
      ]],
      'job': [this.user.job, [
        Validators.required
      ]],
      'activity': [this.user.activity, [
        Validators.required
      ]],
      'familyMembers': [this.user.familyMembers, [

      ]],
      'proximityGroup': [this.user.proximityGroup, [
        
      ]],
      'medicalHistory': [this.user.medicalHistory, [
       
      ]],
      'workNumber': [this.user.workNumber, [
        Validators.required   
      ]]
    });
  }
  onSubmit():void{
      this.database.createUserProfile(this.token,this.user.name,this.user.surname,this.user.age,this.user.sex,this.user.environment,this.user.homeAdress,this.user.job,this.user.activity,this.user.workNumber,'pacient').subscribe(()=>{alert("A mers!!");});
  }

}
