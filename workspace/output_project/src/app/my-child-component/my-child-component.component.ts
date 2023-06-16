import { Component, EventEmitter, Output } from '@angular/core';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-my-child-component',
  templateUrl: './my-child-component.component.html',
  styleUrls: ['./my-child-component.component.scss']
})
export class MyChildComponentComponent {
  message: string = 'Este es el mensaje del componente hijo';
  showButton = true;

  @Output()
  propagate = new EventEmitter<String>();

  @Output()
  employeeDataEvent = new EventEmitter<any>();

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    console.log('ngOnInit llamado');
    this.showButton = this.loginService.isUserAuthenticate();
  }

  onPropagate() {
    this.propagate.emit(this.message);
  }

  /*loadAndNotifyEmployeeData() {
    this.employeeDataEvent.emit({
      name: 'Alexis Vizuete',
      age: 23,
    });*/

    loadAndNotifyEmployeeData() {
      this.employeeDataEvent.emit(this.loginService.getUserData());
  }

}
