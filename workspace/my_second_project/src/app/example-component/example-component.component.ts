import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent {

  @Input()
  title: string;

  @Input()
  employeeList: any;

  constructor(){
    this.title="";
    this.employeeList = {};
  }
}
