import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { ChefComponent } from './chef/chef.component';
import { BiblioComponent } from './biblio/biblio.component';
import { ChatComponent } from './chat/chat.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { TacheComponent } from './tache/tache.component';
import { ActiviteComponent } from './activite/activite.component';
import { InscriptionComponent } from './inscription/inscription.component';

const routes: Routes = [
  {path:'login' , component:ConnexionComponent},
  {path:'accueil' , component:MainComponent},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {path:'side-nav', component:SideNavComponent},
  {path:'header', component:HeaderComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'chef', component:ChefComponent},
  {path:'activite', component:ActiviteComponent},
  {path:'tache', component:TacheComponent},
  {path:'biblio', component:BiblioComponent},
  {path:'chat',component:ChatComponent},
  {path:'signup',component:InscriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
