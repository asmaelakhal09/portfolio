import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/Models/Student';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-students-management',
  templateUrl: './students-management.component.html',
  styleUrls: ['./students-management.component.scss'],
})
export class StudentsManagementComponent  implements OnInit {

  student:Student = new Student()

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'mobile','actions'];
  dataSource:any
  constructor(private studentService:DataService) { }

  ngOnInit() {
    this.studentService.allStudents().subscribe(res=>{
      this.dataSource = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data
      })
      console.log(this.dataSource)
    })
  }


  

  saveStudent() {
    this.studentService.saveStudent(this.student)
  }



  deleteStudent(e:any) {
    console.log(e)
    this.studentService.deleteStudent(e)
  }

  completeInput(e:any){
    console.log(e)
    this.student = e

  }

updateStudent() {
  this.studentService.updateStudent(this.student)
}


}
