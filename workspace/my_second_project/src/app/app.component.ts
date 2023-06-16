import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my_second_project';

  employeeListMain = [
    {
      name: "Alexis",
      age: 23
    },
    {
      name: "Leo",
      age: 23
    },
    {
      name: "Mateo",
      age: 18
    }
  ];
}
