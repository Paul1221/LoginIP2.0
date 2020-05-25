import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../_models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {DatabaseService} from '../database.service';
import {User} from '../_models/user';
import {AuthService,SocialUser,GoogleLoginProvider,FacebookLoginProvider} from 'angularx-social-login';
import { AuthTokenService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  da:String;
  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
  socialUser: any = SocialUser;

  constructor(private formBuilder: FormBuilder,private database:DatabaseService,private socialAuthService: AuthService , private authService:AuthTokenService , private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem("loginToken")!=null){
      this.router.navigate(["/alreadyAuth"]);
    }
    this.loginForm = this.formBuilder.group({
      'username': [this.user.username, [
        Validators.required
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
        
      ]]
    });
  }

  onLoginSubmit() {
    
    this.database.getUserByUsername(this.user.username).subscribe(
      (user:User)=>{
        if (this.user.username==user.username){
              if (this.user.password==user.password){
                if(user.active==true){
                    this.authService.keepLoggedIn(this.user.username);
                    navigator.geolocation.getCurrentPosition((position)=>{
                      this.database.setGeolocation(this.user.username,position.coords.latitude,position.coords.longitude).subscribe(()=>{});
                    });
                  this.router.navigate(["/main"])
                }
                else{
                  alert("Contul nu este activat!");
                }
              }
              else{
                alert("Parola gresita");
              }
            }
            else{
              alert("Username-ul nu exista")
            }
          }
        );
      }
      facebooklogin() {
        this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
          this.socialUser=userData;
        });
      }
      
      private getValidUsernameForSocial() {
        var username:String;
        username = this.socialUser.firstName+this.socialUser.lastName;
        username += this.socialUser.id;
        return username;
      }

      private getValidPasswordForSocial(){
        var password         = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < 10; i++ ) {
          password += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return password;
      }

      googlelogin() {
        var flag = true;
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((userData) => {
          this.socialUser=userData;
          this.database.getUserByEmail(this.socialUser.email).subscribe(
            (user:User)=>{
              const username = this.getValidUsernameForSocial();
              if(user==null){
                this.database.addSocialUser(this.socialUser.email,username,this.getValidPasswordForSocial()).subscribe(()=>{
                  this.authService.keepLoggedIn(username);
                  navigator.geolocation.getCurrentPosition((position)=>{
                    this.database.setGeolocation(username,position.coords.latitude,position.coords.longitude).subscribe(()=>{});
                  });
                  this.router.navigate(["/main"]);
                });
              }
              else{
                this.authService.keepLoggedIn(username);
                navigator.geolocation.getCurrentPosition((position)=>{
                  this.database.setGeolocation(username,position.coords.latitude,position.coords.longitude).subscribe(()=>{});
                });
                this.router.navigate(["/main"]);
              }
            }
          );
        });
      }
    
      signOut() {
        this.socialAuthService.signOut();
      }
}
