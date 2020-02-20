import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload/upload.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: '', component: ShowComponent},
  {path: 'add', component: UploadComponent},
  {path: 'show', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
