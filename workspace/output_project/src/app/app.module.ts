import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponentComponent } from './example-component/example-component.component';
import { MyChildComponentComponent } from './my-child-component/my-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponentComponent,
    MyChildComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
