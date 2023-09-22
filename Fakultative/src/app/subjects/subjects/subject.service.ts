import { Injectable } from '@angular/core';
import { SUBJECTS } from "src/app/subjects/subjects/mock-subject-list";
import { Subject } from './subject';
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { Firestore, doc, getDoc, getDocs, addDoc, setDoc, updateDoc, collectionGroup, collection, collectionData, orderBy, query, where, Query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
private subjects: Subject[]=[];
  constructor() {
    this.subjects=SUBJECTS;
 }
getSubjects():Observable<Subject[]>{return of(SUBJECTS)}

getSubject(id: number | string): Observable<Subject | undefined> {
    return this.getSubjects().pipe(
      map((subjects: Subject[]) => subjects.find(subject => subject.id === +id))
    );

}
addSubject(subject: Subject): void {
  SUBJECTS.push(subject);
}

setSubject(subj: Subject): void {
  const index = SUBJECTS.findIndex(subject => subject.id === subj.id);
  if (index !== -1) {
    SUBJECTS[index] = subj;
  }
  else{
    this.addSubject(subj);
  }
}
deleteSubject(id:number):void{
  const index = SUBJECTS.findIndex(subject => subject.id === id);
  if (index !== -1) {
    SUBJECTS.splice(index, 1);
  }
  }
}