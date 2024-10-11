import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RegisterComponent } from './register/register.component';
import { BiopicsComponent } from './dashboard/biopics/biopics.component';
import { HorrorComponent } from './dashboard/horror/horror.component';
import { LoveStoriesComponent } from './dashboard/love-stories/love-stories.component';
import { ComicsComponent } from './dashboard/comics/comics.component';
import { UpcomingreleasesComponent } from './dashboard/upcomingreleases/upcomingreleases.component';
import { TotalbooksComponent } from './dashboard/totalbooks/totalbooks.component';
import { ReviewsComponent } from './dashboard/reviews/reviews.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';

export const routes: Routes = [{path:'',redirectTo:'/login',pathMatch:'full'},
                               {path:'login',component:LoginComponent},
                               {path:'navbar',component:NavbarComponent,
                               children:[{path:'profile',component:ProfileComponent,
                                          children:[{path:'personaldetails',component:PersonaldetailsComponent},
                                                    {path:'changepassword',component:ChangepasswordComponent}
                                          ]
                               },
                               {path:'dashboard',component:DashboardComponent,
                                 children:[{path:'biopics',component:BiopicsComponent},
                                           {path:'horror',component:HorrorComponent},
                                           {path:'love-stories',component:LoveStoriesComponent},
                                           {path:'comics',component:ComicsComponent},
                                           {path:'upcomingreleases',component:UpcomingreleasesComponent},
                                           {path:'totalbooks',component:TotalbooksComponent},
                                           {path:'reviews',component:ReviewsComponent}
                                 ]
                               },
                               {path:'home',component:HomeComponent}]},
                               {path:'register',component:RegisterComponent},
                               {path:'forgotpassword',component:ForgotpasswordComponent}
                            ]
                        
export const AppRoutes=RouterModule.forRoot(routes)
