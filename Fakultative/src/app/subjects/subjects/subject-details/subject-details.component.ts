import { Component, OnInit, Input } from '@angular/core';
import { Subject } from '../subject';

@Component({
  selector: 'app-subject-details',
  templateUrl: './subject-details.component.html',
  styleUrls: ['./subject-details.component.css']
})

export class SubjectDetailsComponent  {
  @Input() subject!: Subject;

  constructor() {
  }

}
