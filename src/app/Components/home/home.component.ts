import { Component, HostListener } from '@angular/core';
import { PersonnalInfosComponent } from '../personnal-infos/personnal-infos.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialog:MatDialog) {}


  scrollToSection(section: any) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(PersonnalInfosComponent, {
      width:'600px',height:'330px'
    });

  }
}
