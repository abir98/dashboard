import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ROUTING } from './app.routing';
import { RestaurateurComponent } from './restaurateur/restaurateur.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
