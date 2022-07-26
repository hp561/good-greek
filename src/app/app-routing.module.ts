import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddRecordComponent } from './records/add-record/add-record.component';

const routes: Routes = [
  {
    path: 'add-record',
    component: AddRecordComponent,
  },
  {
    path: 'records',
    component: RecordsComponent,
  },
  { path: '', redirectTo: '/records', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
