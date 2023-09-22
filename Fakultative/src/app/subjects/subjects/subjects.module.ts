import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SubjectCenterComponent } from './subject-center/subject-center.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectDetailsComponent } from './subject-details/subject-details.component';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectFormComponent } from './subject-form/subject-form.component';

@NgModule({
  declarations: [
    SubjectCenterComponent,
    SubjectListComponent,
    SubjectDetailsComponent,
    SubjectFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SubjectRoutingModule
  ]
})

export class SubjectsModule {

}
