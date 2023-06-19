import { Component, EventEmitter, Output  } from '@angular/core';
import { EmployeeService } from '../Services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  @Output() employeeData = new EventEmitter<any>();

  constructor(private employeeService: EmployeeService) { }

  sendDataToParent() {
    const employees = this.employeeService.getEmployees();
    this.employeeData.emit(employees);
  }
}
