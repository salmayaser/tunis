import { NotFoundComponent } from './not-found/not-found.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordCodeComponent } from './password-code/password-code.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SearchListComponent } from './search-list/search-list.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'search', component: SearchListComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'code', component: PasswordCodeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'hotel', component: HotelDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
