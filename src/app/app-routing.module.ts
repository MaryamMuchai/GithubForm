import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubAppComponent } from './github-app/github-app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
 
const routes: Routes = [
{ path: "github", component: GithubAppComponent},
{ path:'**', component:NotFoundComponent},
{ path: "navbar",component: NavbarComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
