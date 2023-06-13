import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { EmployeeComponentComponent } from './employee-component/employee-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CounterComponentComponent,
    EmployeeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
