import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { takeWhile } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss'],
})
export class AddRecordComponent implements OnInit {
  private alive = true;
  servicesFormControl = new FormControl('');
  servicesList: string[] = [
    'Realty',
    'Moving',
    'Storage',
    'Concierge',
    'Auto Transport',
    'Junk Removal',
  ];
  isLoading: boolean = false;
  title = 'good-greek';
  email: string = '';
  phoneNumber: number = NaN;
  firstName: string = '';
  lastName: string = '';
  street: string = '';
  city: string = '';
  zipCode: number = NaN;
  state: string = '';
  services: string[] = [];
  states: string[] = [
    'Alabama',
    'Alaska',
    'American Samoa',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'District of Columbia',
    'Federated States of Micronesia',
    'Florida',
    'Georgia',
    'Guam',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Marshall Islands',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Northern Mariana Islands',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Palau',
    'Pennsylvania',
    'Puerto Rico',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virgin Island',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  constructor(
    private appService: AppService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}
  ngOnInit(): void {}

  save(): void {
    this.isLoading = true;
    const payload = {
      title: this.title,
      email: this.email,
      phoneNumber: this.phoneNumber,
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      city: this.city,
      zipCode: this.zipCode,
      state: this.state,
      services: this.services,
    };

    this.appService
      .createRecord(payload)
      .pipe(takeWhile(() => this.alive))
      .subscribe((result: any) => {
        this.resetForm();
        this._snackBar.open('Successfully Saved Record', 'Close');
        setTimeout(() => {
          this.router.navigate(['/records']);
        }, 2000);
      });
  }

  isValid(): boolean {
    if (
      this.title &&
      this.email &&
      this.phoneNumber &&
      this.firstName &&
      this.lastName &&
      this.street &&
      this.city &&
      this.zipCode &&
      this.state
    ) {
      return true;
    }
    return false;
  }

  addService(): void {}

  viewRecords(): void {
    setTimeout(() => {
      this.router.navigate(['/records']);
    }, 0);
  }

  resetForm(): void {
    this.email = '';
    this.phoneNumber = NaN;
    this.firstName = '';
    this.lastName = '';
    this.street = '';
    this.city = '';
    this.zipCode = NaN;
    this.state = '';
    this.services = [];
  }
}
