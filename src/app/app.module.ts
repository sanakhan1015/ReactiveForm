import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ReactiveFormsModule} from  '@angular/forms';
@NgModule({ 
  declarations: [
    AppComponent,
    DetailComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
