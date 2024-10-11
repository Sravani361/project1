import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./login/login.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { ProfileComponent } from "./profile/profile.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { PersonaldetailsComponent } from "./personaldetails/personaldetails.component";
import { ChangepasswordComponent } from "./changepassword/changepassword.component";
import { RegisterComponent } from "./register/register.component";
import { BiopicsComponent } from "./dashboard/biopics/biopics.component";
import { HorrorComponent } from "./dashboard/horror/horror.component";
import { LoveStoriesComponent } from "./dashboard/love-stories/love-stories.component";
import { ComicsComponent } from "./dashboard/comics/comics.component";
import { UpcomingreleasesComponent } from "./dashboard/upcomingreleases/upcomingreleases.component";
import { TotalbooksComponent } from "./dashboard/totalbooks/totalbooks.component";
import { ReviewsComponent } from "./dashboard/reviews/reviews.component";
import { ForgotpasswordComponent } from "./forgotpassword/forgotpassword.component";

@NgModule({
    declarations:[AppComponent,
                  LoginComponent,
                  NavbarComponent,
                  ProfileComponent,
                  DashboardComponent,
                  PersonaldetailsComponent,
                  ChangepasswordComponent,
                  RegisterComponent,
                  BiopicsComponent,
                  HorrorComponent,
                  LoveStoriesComponent,
                  ComicsComponent,
                  UpcomingreleasesComponent,
                  TotalbooksComponent,
                  ReviewsComponent,
                  ForgotpasswordComponent
],
    imports:[BrowserModule,
             FormsModule,
             AppRoutingModule,
             HttpClientModule
    ],
    providers:[],
    bootstrap:[]
})
export class AppModule {}