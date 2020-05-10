import { Component, OnInit } from '@angular/core';
import { ProfileModel } from '../_models/profile.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import {ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile-creation',
  templateUrl: './profile-creation.component.html',
  styleUrls: ['./profile-creation.component.css']
})
export class ProfileCreationComponent implements OnInit {
  user:ProfileModel = new ProfileModel();
  profileForm : FormGroup;
  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private route: ActivatedRoute) { }
  token:any;
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
      'job': [this.user.job, [
        
      ]],
      'activity': [this.user.activity, [
        
      ]],
      'familyMembers': [this.user.familyMembers, [
        
      ]],
      'proximityGroup': [this.user.proximityGroup, [
        
      ]],
      'medicalHistory': [this.user.medicalHistory, [
       
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
      //this.database.createUserProfile(this.token,this.user.name,this.user.surname,this.user.age);
  }

}
