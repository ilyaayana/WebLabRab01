import { Component } from '@angular/core';
import { SubjectsService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent {

  newSubject: Subject = {
    id: 0,
    name: '',
    teacher: ''
  };
  operation: string = 'set';
  isDelete: boolean = false;

  constructor(private subjectsService: SubjectsService) {}

  onFormSubmit() {
    if (this.isDelete) {
      this.subjectsService.deleteSubject(this.newSubject.id);
    }
    else {
      this.subjectsService.setSubject(this.newSubject);
    }

    this.newSubject = {
      id: 0,
      name: '',
      teacher: ''
    };
  }

  onRadioChange() {
    if (this.operation === 'delete') {
      this.isDelete = true;
    } else {
      this.isDelete = false;
    }
  }
}
