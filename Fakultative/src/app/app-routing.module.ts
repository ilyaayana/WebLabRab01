import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
                  { path: '',   redirectTo: '/subject-center', pathMatch: 'full' },
                  {       path: 'subject-center',
                            loadChildren: () =>              import('./subjects/subjects/subjects.module').then(m => m.SubjectsModule),
                            data: { preload: true }
                          },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
