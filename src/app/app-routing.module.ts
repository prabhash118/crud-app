import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { landingChildRoutes, LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:'',component: LoginComponent },

  {
    path:'login',component:LoginComponent
  },
  {
    path:'landing',component:LandingComponent,
    children:landingChildRoutes

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
