import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // Default to login page
  { path: 'register', component: RegisterComponent }, // New Register page
];
