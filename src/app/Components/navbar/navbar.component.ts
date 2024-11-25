import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonnalInfosComponent } from '../personnal-infos/personnal-infos.component';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  bg=""
  leftValue=""
  @Output() sectionSelected = new EventEmitter<string>();


  constructor(private dialog:MatDialog,private authService:AuthService) {}

  enter(){this.bg="enter"}
  leave(){this.bg="leave"}


  logout() {
    this.authService.logout()
  }
  navigateToSection(section: string) {
    if(section == "Accueil")  {
      this.leftValue = "toAccueil"
    }


    if(section == "Experience")  {
      this.leftValue = "toExperience"
    }

    if(section == "Formation")  {
      this.leftValue = "toFormation"
    }
    if(section == "Competences")  {
      this.leftValue = "toCompetences"
    }
    if(section == "Certifs")  {
      this.leftValue = "toCertifs"
    }
    if(section == "Contact")  {
      this.leftValue = "toContact"
    }

    this.sectionSelected.emit(section);  // Emit the section name to the parent
  }
 

  openDialog(): void {
    const dialogRef = this.dialog.open(PersonnalInfosComponent, {
      width:'600px',height:'600px'
    });
}

}