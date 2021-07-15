import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { SearchComponent } from './home/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularEditorModule } from '@kolkov/angular-editor';
// angular material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ActivitiesComponent } from './home/activities/activities.component';
import { PopularHotelsComponent } from './home/popular-hotels/popular-hotels.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchListComponent } from './search-list/search-list.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { PasswordCodeComponent } from './password-code/password-code.component';
import { ProfileComponent } from './profile/profile.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { RoomsComponent } from './hotel-details/rooms/rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { AddActiviyComponent } from './admin/add-activiy/add-activiy.component';
import { LoaderComponent } from './shared/loader/loader.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    SearchComponent,
    ActivitiesComponent,
    PopularHotelsComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SearchListComponent,
    ForgetPasswordComponent,
    PasswordCodeComponent,
    ProfileComponent,
    HotelDetailsComponent,
    RoomsComponent,
    AddActiviyComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
    AngularEditorModule,
    //angular material
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
