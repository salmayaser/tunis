
// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';


// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './home/header/header.component';
import { SearchComponent } from './home/search/search.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ListPropertyComponent } from './list-property/list-property.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewsComponent } from './hotel-details/reviews/reviews.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { LoginComponent } from './login/login.component';
import { PasswordCodeComponent } from './password-code/password-code.component';
import { PopularHotelsComponent } from './home/popular-hotels/popular-hotels.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RoomsComponent } from './hotel-details/rooms/rooms.component';
import { SearchListComponent } from './search-list/search-list.component';

//pipes
import { RoundPipe } from './shared/round.pipe';
import { SlicePipe } from './shared/slice.pipe';


// angular material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { ActivitiesComponent } from './home/activities/activities.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    SearchComponent,
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
    LoaderComponent,
    ListPropertyComponent,
    NotFoundComponent,
    ReviewsComponent,
    ActivitiesComponent,

    // pipes
    RoundPipe,
    SlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
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
