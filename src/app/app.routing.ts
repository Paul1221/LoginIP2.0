import { Routes, RouterModule } from '@angular/router';
import { SelectionComponent } from './selection';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RecuperareComponent } from './recuperare'
import { AuthGuard } from './_helpers';
import { PatientProfileCreationComponent } from './patient-profile-creation/patient-profile-creation.component';
import { DoctorProfileCreationComponent } from './doctor-profile-creation';
import { OrarMedicComponent } from './orar-medic';
import { SuccesComponent } from './succes';
import { ExpiratComponent } from './expirat';
import { AlreadyauthComponent } from './alreadyauth/alreadyauth.component';



const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'selection', component: SelectionComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recuperare', component: RecuperareComponent },
    { path: 'profileCreation/:token', component: SelectionComponent },
    { path: 'doctorProfileCreation/:token', component: DoctorProfileCreationComponent },
    { path: 'patientProfileCreation/:token', component: PatientProfileCreationComponent },
    { path: 'orarDoctor/:token',component: OrarMedicComponent},
    { path: 'regSucces',component: SuccesComponent},
    { path: 'confirmationExp',component: ExpiratComponent},
    { path: 'alreadyAuth',component: AlreadyauthComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
