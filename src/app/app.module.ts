import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { EmployeeComponent } from './employee/employee.component';
import { ChefComponent } from './chef/chef.component';
import { BiblioComponent } from './biblio/biblio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { ChatComponent } from './chat/chat.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginSideNavComponent } from './login-side-nav/login-side-nav.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { OpenAddEditEmpFormComponent } from './open-add-edit-emp-form/open-add-edit-emp-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/auth.service';
import { AdminAuthService } from './shared/admin-auth.service';
import { EmployeeServiceService } from './shared/employee-service.service';
import { Token } from '@angular/compiler';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddChefComponent } from './add-chef/add-chef.component';
import { TacheComponent } from './tache/tache.component';
import { ActiviteComponent } from './activite/activite.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { AddActiviteComponent } from './add-activite/add-activite.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire/compat/';
import { FirestoreModule } from '@angular/fire/firestore';
import { InscriptionComponent } from './inscription/inscription.component';
import { NgChartsModule } from 'ng2-charts';
import { RendementParMoisComponent } from './rendement-par-mois/rendement-par-mois.component';
import { ChartModule } from 'angular-highcharts';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    EmployeeComponent,
    ChefComponent,
    BiblioComponent,
    ChatComponent,
    ConnexionComponent,
    LoginSideNavComponent,
    OpenAddEditEmpFormComponent,
    AddChefComponent,
    TacheComponent,
    ActiviteComponent,
    AddTacheComponent,
    AddActiviteComponent,
    InscriptionComponent,
    RendementParMoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    BrowserAnimationsModule ,
    MatDividerModule,
    MatIconModule ,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    AngularFireModule.initializeApp(environment.firebase),
    FirestoreModule,
    NgChartsModule,
    ChartModule



  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}} ,
    { provide: Token, useClass: AuthService},
    {  provide: Token, useClass: AdminAuthService},
    {  provide: Token, useClass: EmployeeServiceService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
