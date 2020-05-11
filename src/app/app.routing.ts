import { Routes, RouterModule } from '@angular/router';
import { SelectionComponent } from './selection';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RecuperareComponent } from './recuperare'
import { AuthGuard } from './_helpers';
import { PatientProfileCreationComponent } from './patient-profile-creation/patient-profile-creation.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'selection', component: SelectionComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recuperare', component: RecuperareComponent },
    { path: 'patientProfileCreation/:token', component: PatientProfileCreationComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
