import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatSortModule} from '@angular/material/sort'
import {MatTableModule} from '@angular/material/table'
import {MatTooltip} from '@angular/material/tooltip'
import {MatDialog} from '@angular/material/dialog'

const materialModules = [
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatTooltip,
    MatDialog
]

@NgModule({
imports: materialModules,
exports: materialModules,
providers: [],
})

export class MaterialModule {}