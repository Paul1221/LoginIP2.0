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

  interface Specialization {
    value: string;
    viewValue: string;
  }

@Component({
  selector: 'app-doctor-profile-creation',
  templateUrl: './doctor-profile-creation.component.html',
  styleUrls: ['./doctor-profile-creation.component.css']
})
export class DoctorProfileCreationComponent implements OnInit {
  user:ProfileModel = new ProfileModel();
  profileForm : FormGroup;
  token:any;

  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private route: ActivatedRoute) { }
  

  genders: Gender[] = [
    {value:'male', viewValue:'Barbat'},
    {value:'female', viewValue:'Femeie'}
  ];

  environments: Environment[] = [
    {value:'rural', viewValue:'Rural'},
    {value:'urban', viewValue:'Urban'}
  ];

  specializations: Specialization[] = [
    {value: 'Anatomia patologică', viewValue: 'Anatomia patologică'},
    {value: 'Anestezia şi terapia intensivă', viewValue: 'Anestezia şi terapia intensivă'},
    {value: 'Boli infecţioase', viewValue: 'Boli infecţioase'},
    {value: 'Cardiologie', viewValue: 'Cardiologie'},
    {value: 'Chirurgie cardiovasculară', viewValue: 'Chirurgie cardiovasculară'},
    {value: 'Chirurgie generală', viewValue: 'Chirurgie generală'},
    {value: 'Chirurgie oncologică', viewValue: 'Chirurgie oncologică'},
    {value: 'Chirurgie orală și maxilo-facială', viewValue: 'Chirurgie orală și maxilo-facială'},
    {value: 'Chirurgie ortopedie pediatrică', viewValue: 'Chirurgie ortopedie pediatrică'},
    {value: 'Chirurgie pediatrică', viewValue: 'Chirurgie pediatrică'},
    {value: 'Chirurgie plastică-microchirurgie reconstructivă', viewValue: 'Chirurgie plastică-microchirurgie reconstructivă'},
    {value: 'Chirurgie toracică', viewValue: 'Chirurgie toracică'},
    {value: 'Chirurgie vasculară', viewValue: 'Chirurgie vasculară'},
    {value: 'Consiliere alăptare', viewValue: 'Consiliere alăptare'},
    {value: 'Dermato-venerologie', viewValue: 'Dermato-venerologie'},
    {value: 'Diabet zaharat, nutriție și boli metabolice', viewValue: 'Diabet zaharat, nutriție și boli metabolice'},
    {value: 'Endocrinologie', viewValue: 'Endocrinologie'},
    {value: 'Epidomiologie', viewValue: 'Epidomiologie'},
    {value: 'Gastroenterologie', viewValue: 'Gastroenterologie'},
    {value: 'Genetică medicală', viewValue: 'Genetică medicală'},
    {value: 'Geriatrie și gerentologie', viewValue: 'Geriatrie și gerentologie'},
    {value: 'Hematologie', viewValue: 'Hematologie'},
    {value: 'Medicina muncii', viewValue: 'Medicina muncii'},
    {value: 'Medicină de familie', viewValue: 'Medicină de familie'},
    {value: 'Medicină de laborator', viewValue: 'Medicină de laborator'},
    {value: 'Medicină generală', viewValue: 'Medicină generală'},
    {value: 'Medicină internă', viewValue: 'Medicină internă'},
    {value: 'Nefrologie', viewValue: 'Nefrologie'},
    {value: 'Neonatologie', viewValue: 'Neonatologie'},
    {value: 'Neurochirugie', viewValue: 'Neurochirugie'},
    {value: 'Neurologie', viewValue: 'Neurologie'},
    {value: 'Neurologie pediatrică', viewValue: 'Neurologie pediatrică'},
    {value: 'Neuropsihiatrie infantilă', viewValue: 'Neuropsihiatrie infantilă'},
    {value: 'ORL (Otorinolarincologie)', viewValue: 'ORL (Otorinolarincologie)'},
    {value: 'Obstetrică-ginecologie', viewValue: 'Obstetrică-ginecologie'},
    {value: 'Oftalmologie', viewValue: 'Oftalmologie'},
    {value: 'Oncologie medicală', viewValue: 'Oncologie medicală'},
    {value: 'Ortopedie și traumatologie', viewValue: 'Ortopedie și traumatologie'},
    {value: 'Ortopedie și traumatologie pediatrică', viewValue: 'Ortopedie și traumatologie pediatrică'},
    {value: 'Pediatrie', viewValue: 'Pediatrie'},
    {value: 'Pneumologie', viewValue: 'Pneumologie'},
    {value: 'Psihiatrie', viewValue: 'Psihiatrie'},
    {value: 'Psihiatrie pediatrică', viewValue: 'Psihiatrie pediatrică'},
    {value: 'Psihologie', viewValue: 'Psihologie'},
    {value: 'Radiologie - imagistica medicală', viewValue: 'Radiologie - imagistica medicală'},
    {value: 'Radioterapie', viewValue: 'Radioterapie'},
    {value: 'Recuperare medicală', viewValue: 'Recuperare medicală'},
    {value: 'Reumatologie', viewValue: 'Reumatologie'},
    {value: 'Tehnician', viewValue: 'Tehnician'},
    {value: 'Urologie', viewValue: 'Urologie'}
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
      'county': [this.user.county, [
        Validators.required
      ]],
      'municipality': [this.user.municipality, [
      ]],
      'street': [this.user.street, [
        Validators.required
      ]],
      'number': [this.user.number, [
        Validators.required
      ]],
      'bloc': [this.user.bloc, [
      ]],
      'scara': [this.user.scara, [
      ]],
      'flat': [this.user.flat, [
      ]],
      'specialization': [this.user.specialization, [
        
      ]],
      'workplace': [this.user.workplace, [
        
      ]],
      'workNumber': [this.user.workNumber, [
        
      ]]
    });
  }
  onSubmit():void{
      this.database.createUserProfile(this.token,this.user.name,this.user.surname,this.user.age,this.user.sex,this.user.environment,this.user.county,this.user.job,this.user.activity,this.user.workNumber,'doctor');
  }

}
