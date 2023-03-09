import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserInteractivePageComponent } from './user-interactive-page/user-interactive-page.component';

const routes: Routes = [
  // {path: "about-me", component: AboutMeComponent },
  // {path: "home", component: LandingPageComponent, children: [
  //   {path: "interaction", component: UserInteractivePageComponent},
  // ]},
  {path: '', component: LandingPageComponent},
  {path: '**', redirectTo: '/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
