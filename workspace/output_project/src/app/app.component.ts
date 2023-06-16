import { Component, ViewChild } from '@angular/core';
import { MyChildComponentComponent } from './my-child-component/my-child-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'output_project';

  @ViewChild(MyChildComponentComponent)
  private myChildComponent: any;

  processPropagate(mensaje : any) {
    console.log(`llamada de evento desde el componente padre: ${mensaje}`);
  }

  onEmployeeDataArrive(message: any){
    console.log(`Datos del empleado: ${JSON.stringify(message)}`);
  }
}
