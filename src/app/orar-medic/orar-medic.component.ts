import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
import {ConfirmationMailService} from '../confirmation-mail.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrarModel } from '../_models/orar.model';

interface Hour1 {
  value: string;
  viewValue: string;
}

interface Hour2 {
  value: string;
  viewValue: string;
}

interface Hour3 {
  value: string;
  viewValue: string;
}

interface Hour4 {
  value: string;
  viewValue: string;
}

interface Hour5 {
  value: string;
  viewValue: string;
}

interface Hour6 {
  value: string;
  viewValue: string;
}

interface Hour7 {
  value: string;
  viewValue: string;
}

interface Hour8 {
  value: string;
  viewValue: string;
}

interface Hour9 {
  value: string;
  viewValue: string;
}

interface Hour10 {
  value: string;
  viewValue: string;
}

interface Hour11 {
  value: string;
  viewValue: string;
}

interface Hour12 {
  value: string;
  viewValue: string;
}

interface Hour13 {
  value: string;
  viewValue: string;
}

interface Hour14 {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-orar-medic',
  templateUrl: './orar-medic.component.html',
  styleUrls: ['./orar-medic.component.css']
})
export class OrarMedicComponent implements OnInit {
  user:OrarModel = new OrarModel();
  selectionHourForm: FormGroup;
  hide = true;
  token:any;
  disponibility = new Array();
  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private confirmmail:ConfirmationMailService , private router:Router , private route: ActivatedRoute) { }

  types1: Hour1[] = [
    {value:'00:00', viewValue:'00:00'},
    {value:'01:00', viewValue:'01:00'},
    {value:'02:00', viewValue:'02:00'},
    {value:'03:00', viewValue:'03:00'},
    {value:'04:00', viewValue:'04:00'},
    {value:'05:00', viewValue:'05:00'},
    {value:'06:00', viewValue:'06:00'},
    {value:'07:00', viewValue:'07:00'},
    {value:'08:00', viewValue:'08:00'},
    {value:'09:00', viewValue:'09:00'},
    {value:'10:00', viewValue:'10:00'},
    {value:'11:00', viewValue:'11:00'},
    {value:'12:00', viewValue:'12:00'},
    {value:'13:00', viewValue:'13:00'},
    {value:'14:00', viewValue:'14:00'},
    {value:'15:00', viewValue:'15:00'},
    {value:'16:00', viewValue:'16:00'},
    {value:'17:00', viewValue:'17:00'},
    {value:'18:00', viewValue:'18:00'},
    {value:'19:00', viewValue:'19:00'},
    {value:'20:00', viewValue:'20:00'},
    {value:'21:00', viewValue:'21:00'},
    {value:'22:00', viewValue:'22:00'},
    {value:'23:00', viewValue:'23:00'},
    {value:'24:00', viewValue:'24:00'},
  ];

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get("token");
    
    this.selectionHourForm = this.formBuilder.group({
      'hour1': [this.user.hour1,[
        Validators.required
      ]],
      'hour2': [this.user.hour2,[
        Validators.required
      ]],
      'hour3': [this.user.hour3,[
        Validators.required
      ]],
      'hour4': [this.user.hour4,[
        Validators.required
      ]],
      'hour5': [this.user.hour5,[
        Validators.required
      ]],
      'hour6': [this.user.hour6,[
        Validators.required
      ]],
      'hour7': [this.user.hour7,[
        Validators.required
      ]],
      'hour8': [this.user.hour8,[
        Validators.required
      ]],
      'hour9': [this.user.hour9,[
        Validators.required
      ]],
      'hour10': [this.user.hour10,[
        Validators.required
      ]],
      'hour11': [this.user.hour11,[
        Validators.required
      ]],
      'hour12': [this.user.hour12,[
        Validators.required
      ]],
      'hour13': [this.user.hour13,[
        Validators.required
      ]],
      'hour14': [this.user.hour14,[
        Validators.required
      ]],
    });
  }

  onSelectSubmit(){
    this.disponibility.push(this.user.hour1 + " " + this.user.hour2);
    this.disponibility.push(this.user.hour3 + " " + this.user.hour4);
    this.disponibility.push(this.user.hour5 + " " + this.user.hour6);
    this.disponibility.push(this.user.hour7 + " " + this.user.hour8);
    this.disponibility.push(this.user.hour9 + " " + this.user.hour10);
    this.disponibility.push(this.user.hour11 + " " + this.user.hour12);
    this.disponibility.push(this.user.hour13 + " " + this.user.hour14);
    this.database.createDoctorDisponibility(this.token,this.disponibility).subscribe(()=>{});
  }

}
