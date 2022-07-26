import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RecordsComponent } from './records/records.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddRecordComponent } from './records/add-record/add-record.component';
import { EditDialogComponent } from './records/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RecordsComponent,
    NotFoundComponent,
    AddRecordComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
