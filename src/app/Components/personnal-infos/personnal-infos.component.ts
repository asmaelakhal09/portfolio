import { Component, ElementRef, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-personnal-infos',
  templateUrl: './personnal-infos.component.html',
  styleUrls: ['./personnal-infos.component.scss'],
})
export class PersonnalInfosComponent  implements OnInit {

 
  constructor(private elementRef: ElementRef,public dialogRef: MatDialogRef<PersonnalInfosComponent>) { }


  ngOnInit() {}

}
