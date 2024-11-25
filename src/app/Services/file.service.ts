import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FileMetadata } from '../Models/FileMetadata';
import {AngularFireStorage} from '@angular/fire/compat/storage';
@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private fireStore:AngularFirestore, private fireStorage: AngularFireStorage) { }


  //save metadata of file to firestore

  saveMetadataOfFile(fileObj:FileMetadata) {

    const fileMeta = {
      id : '',
      name : fileObj.name,
      url : fileObj.url,
      size : fileObj.size
    }

    fileMeta.id = this.fireStore.createId()
    this.fireStore.collection('/Uploads').add(fileMeta)
  }


  //display all files 
  
  allFiles(){
    return this.fireStore.collection('/Uploads').snapshotChanges()
  }


//delete File By Id

deleteFileById(file:FileMetadata) {
  this.fireStore.collection('/Uploads').doc(file.id).delete()
  this.fireStorage.ref('/Uploads/'+file.name).delete()
}



}
