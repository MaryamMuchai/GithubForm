import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubAppComponent } from './github-app/github-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
 
const routes: Routes = [
{ path: 'github-profile',  component: GithubProfileComponent},
{ path: 'github-App', component: GithubAppComponent},
{ path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
