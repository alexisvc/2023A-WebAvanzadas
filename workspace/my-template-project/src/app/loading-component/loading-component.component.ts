import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.scss']
})
export class LoadingComponentComponent {

  loading = true;

  constructor(){}

  ngOnInit(): void {}

}
