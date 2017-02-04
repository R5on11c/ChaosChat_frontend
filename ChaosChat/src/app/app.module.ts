import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRepository } from './app.repository';
import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AppRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
