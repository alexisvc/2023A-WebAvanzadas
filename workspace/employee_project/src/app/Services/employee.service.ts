import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(): any {
    return [
      { "name": "Alexis Vizuete", "age": 23, "genre": "Male" },
      { "name": "Dayana Vizuete", "age": 29, "genre": "Female" }
    ];
  }
}
