import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  address: string;
}

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.scss']
})
export class EmployeeComponentComponent {
  employees: Employee[] = [
    { id: 1, name: "Alexis Vizuete", address: "Jardín del Valle, Quito" },
    { id: 2, name: "Leo Salvador", address: "Toledo y Madrid, Quito" },
    { id: 3, name: "Carlos Mendoza", address: "Av. Los Shyris, Quito" },
    { id: 4, name: "María Torres", address: "Calle Principal, Cuenca" },
    { id: 5, name: "Andrés Vargas", address: "Av. 9 de Octubre, Guayaquil" },
    { id: 6, name: "Fernanda Delgado", address: "Calle Juan Montalvo, Riobamba" },
    { id: 7, name: "José Sánchez", address: "Av. de los Volcanes, Latacunga" },
    { id: 8, name: "Valentina Jaramillo", address: "Av. 12 de Abril, Machala" },
    { id: 9, name: "Pedro Castro", address: "Av. Manabí, Portoviejo" },
    { id: 10, name: "Gabriela Arévalo", address: "Calle Rocafuerte, Loja" }
  ];
  
  randomEmployee: Employee | null = null;

  getRandomEmployee(): void {
    const randomIndex = Math.floor(Math.random() * this.employees.length);
    this.randomEmployee = this.employees[randomIndex];
  }
}
