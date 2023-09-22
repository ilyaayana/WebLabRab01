import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes,Resolve } from "@angular/router";
import { SubjectCenterComponent } from "src/app/subjects/subjects/subject-center/subject-center.component";
import { SubjectListComponent } from "src/app/subjects/subjects/subject-list/subject-list.component";
import { SubjectDetailsComponent } from "src/app/subjects/subjects/subject-details/subject-details.component";


const subjectCenterRouters: Routes = [
               {path: '', component: SubjectCenterComponent,
                  children:[{
                    path: '', component: SubjectListComponent,
                    children:[
                      {
                       path: ':id',
                       component: SubjectDetailsComponent,
                      }
                    ]
                  }]
                },
                ];
@NgModule({
  imports: [RouterModule.forChild(subjectCenterRouters)],
  exports : [RouterModule]

})
export class SubjectRoutingModule { }
