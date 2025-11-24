import { Component, OnInit } from '@angular/core';
import { Driver } from '../../models/driver';
import { ApiCalls } from '../../services/api-calls';

  @Component({
  selector: 'app-drivers',
  standalone: true,
  imports: [],
  templateUrl: './drivers.html',
  styleUrls: ['./drivers.css'],
})

export class Drivers implements OnInit {

  drivers: Driver[] = [];

  constructor(private apiCallesService: ApiCalls) { };


  ngOnInit() {
           
  }
  getDrivers() {
    this.apiCallesService.get('drivers').subscribe(
      {
        next: (data) => {
          console.log(data);
          this.drivers = data;
        },
        error: (erorr) => console.error(erorr),
        complete: () => console.info('complete')


      }

    )


  }
  addDrivers() {
    let newDriver = new Driver();
    newDriver.id = 123;
    newDriver.name = 'moshe';
    this.apiCallesService.post('drivers', newDriver).subscribe(
      {
        next: () => {
          console.log('added success');

        },
        error: (erorr) => console.error(erorr),
        complete: () => console.info('complete')


      }
    )
  }
  DeleteDrivers() {
    this.apiCallesService.delete('drivers',123).subscribe(
      {
        next: () => {
          console.log('delete successfully');
        },
        error: (erorr) => console.error(erorr),
        complete: () => console.info('complete')
      }
    )
  }

    putDrivers() {
    let changeDrive=new Driver()
    changeDrive.name='Chaim';
    this.apiCallesService.put('drivers',changeDrive,123).subscribe(
      {
        next: () => {
          console.log('put successfully');
        },
        error: (erorr) => console.error(erorr),
        complete: () => console.info('complete')
      }
    )
  }
  }