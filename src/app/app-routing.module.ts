import { DetailsComponent } from './BaseComponent/details/details.component';
import { GuardOneGuard } from './guard-one.guard';
import { RegisterComponent } from './BaseComponent/register/register.component';
import { UpdateUserComponent } from './BaseComponent/update-user/update-user.component';
import { UserComponent } from './BaseComponent/user/user.component';
import { Page404Component } from './BaseComponent/page404/page404.component';
import { HomeComponent } from './BaseComponent/home/home.component';
import { LoginComponent } from './BaseComponent/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
 {path:'Login',
 component:LoginComponent,

} ,
 {path:'Home',
 component:HomeComponent
} ,
 {path:'user',
 component:UserComponent,
 canActivate:[GuardOneGuard],
},
{path:'update/:id',
component:UpdateUserComponent,
canActivate:[GuardOneGuard],
},
{path:'details/:id',
component:DetailsComponent,
canActivate:[GuardOneGuard],
},
{path:'register',
component:RegisterComponent
},


 {path:'**',component:Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
