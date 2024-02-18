import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'accueil', component:AccueilComponent},
  {path:'portfolio', component:PortfolioComponent},
  {path:'resume', component:ResumeComponent},
  {path:'contact', component:ContactComponent},
  {path:'**', component:AccueilComponent , pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
