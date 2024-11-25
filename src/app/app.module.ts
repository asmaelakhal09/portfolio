import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { IonicModule } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { AboutComponent } from './Components/about/about.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ContactComponent } from './Components/contact/contact.component';
import { PersonnalInfosComponent } from './Components/personnal-infos/personnal-infos.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

import { FormationComponent } from './Components/formation/formation.component';
import { CerifsComponent } from './Components/cerifs/cerifs.component';
import { CompetencesComponent } from './Components/competences/competences.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { AngularFireModule }  from '@angular/fire/compat'
import { environement } from './fireConfig/firebase.config';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { FormsModule } from '@angular/forms';
import { StudentsManagementComponent } from './Components/students-management/students-management.component';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PersonnalInfosComponent,
    FormationComponent,
    CerifsComponent,
    CompetencesComponent,
    ExperienceComponent,
    LoginComponent,
    RegisterComponent,
    StudentsManagementComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot({}),
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environement.firebaseConfig),
    MatInputModule,
    FormsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
