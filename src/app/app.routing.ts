import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { RecuperareComponent } from './recuperare'
import { AuthGuard } from './_helpers';
import { ProfileCreationComponent } from './profile-creation/profile-creation.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'recuperare', component: RecuperareComponent },
    { path: 'profileCreation/:token', component: ProfileCreationComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);