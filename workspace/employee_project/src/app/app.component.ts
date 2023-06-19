import { Component } from '@angular/core';
import { EmployeeService } from './Services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employee_project';
  
  constructor(private employeeService: EmployeeService) { }

  handleEmployeeData(employees: any[]) {
    console.log('Empleados:', employees);
  }
}
