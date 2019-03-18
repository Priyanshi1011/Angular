import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { error } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  departments = ['Hr', 'It', 'Production'];
  errorMsg = '';

  employeeModel = new Employee('', 'p@gmail.com', 7845123456, '', 'morning', true);
  constructor(private _employeeService: EmployeeService) {}

  onSubmit() {
    this._employeeService.emp(this.employeeModel)
      .subscribe(
        data => console.log('Success!',data),
        error => this.errorMsg = error.statusText
      )
  }
}
