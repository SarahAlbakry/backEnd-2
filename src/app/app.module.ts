
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './BaseComponent/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './BaseComponent/home/home.component';
import { Page404Component } from './BaseComponent/page404/page404.component';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './BaseComponent/user/user.component';
import { UpdateUserComponent } from './BaseComponent/update-user/update-user.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { RegisterComponent } from './BaseComponent/register/register.component';
import { DetailsComponent } from './BaseComponent/details/details.component';
@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    LoginComponent,
   HomeComponent,
   Page404Component,
   UserComponent,
   UpdateUserComponent,
   RegisterComponent,
   DetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,  
    HttpClientModule,
    FormsModule,
    ToastNoAnimationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

