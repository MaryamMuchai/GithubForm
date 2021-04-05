import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubAppComponent } from './github-app/github-app.component';
 
const routes: Routes = [
{ path: 'github-profile',  component: GithubProfileComponent},
{ path: 'github-App', component: GithubAppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
