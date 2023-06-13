import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.scss']
})
export class CounterComponentComponent {
  counter: number = 0;
  
  increase(){
    this.counter++;
  }
}
