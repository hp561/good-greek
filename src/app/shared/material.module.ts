import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

const materialModules = [
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatFormFieldModule,
  FlexLayoutModule,
  MatSelectModule,
  MatIconModule,
  MatMenuModule,
  MatDialogModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  providers: [],
})
export class MaterialModule {}
