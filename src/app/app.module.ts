import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeTicketsComponent } from './liste-tickets/liste-tickets.component';
import { DetailsTicketsComponent } from './details-tickets/details-tickets.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeTicketsComponent,
    DetailsTicketsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
