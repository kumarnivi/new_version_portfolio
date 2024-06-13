import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'skills', component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
