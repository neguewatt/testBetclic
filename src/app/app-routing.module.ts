import { DetailsTicketsComponent } from './details-tickets/details-tickets.component';
import { ListeTicketsComponent } from './liste-tickets/liste-tickets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'ticket', pathMatch: 'full'
  },
  {
    path: 'ticket', component: ListeTicketsComponent
  },
  {
    path: 'ticket/:id', component: DetailsTicketsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
