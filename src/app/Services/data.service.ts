import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { Student } from '../Models/Student';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs:AngularFirestore) { }


  //add student

  saveStudent(student:Student) {
    const studentData = JSON.parse(JSON.stringify(student));
    console.log(student)

    return this.afs.collection('/Students').add(studentData)
  }

  //get all students

  allStudents() {
    return this.afs.collection('/Students').snapshotChanges()
  }


  //delete student

  deleteStudent(student:Student) {
    return this.afs.doc('/Students/'+student.id).delete()
  }

  //delete student

  updateStudent(student:Student) {
    this.deleteStudent(student)
    this.saveStudent(student)
  }
}
