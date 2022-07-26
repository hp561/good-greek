import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {
  records: any = [];
  dataSource = new MatTableDataSource(this.records);

  searchText: string = '';
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'address',
    'services',
    'actions',
  ];
  constructor(private appService: AppService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getRecords();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRecords(): void {
    this.appService.getRecords().subscribe((result: any) => {
      this.records = result;
      this.dataSource.data = this.records;
      console.log(result);
    });
  }

  deleteRecord(row: any): void {
    this.appService.deleteRecord(row.email).subscribe((result: any) => {
      console.log(result);
      this.getRecords();
    });
  }

  editRecord(row: any): void {
    const dialofRef = this.dialog.open(EditDialogComponent, {
      data: row,
      height: '700px',
      width: '700px',
    });
  }
}
