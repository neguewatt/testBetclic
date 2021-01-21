import { Tickets } from './../models/tickets';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Users } from '../models/users';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  defaultTickets: Tickets[] = [
    {
      id: 0,
      titre: 'chargement logiciel',
      description: 'Erreur lorsque le logiciel arrive a 65% de chargement',
      userId: 69,
      traiter: false
    },
    {
      id: 1,
      titre: 'Erreur sur la page banque/particulier/credit',
      description: 'Nos utilisateurs nous remontent une erreur sur ce lien, en effet les credits sont en négatif',
      userId: 69,
      traiter: true
    },
    {
      id: 2,
      titre: 'Ordinateur cassé',
      description: 'Bonjour, mon ordinateur ne fonctionne plus est il possible de le changer',
      userId: 58,
      traiter: false
    }
  ]

  idTicketSuivant = 2;
  private findTicketById = (id: string | number) => this.defaultTickets.find(ticket => ticket.id === +id);

  users: Users[] = [{ id: 69, nom: 'Babo', prenom: 'David' }, { id: 58, nom: 'Pasoir', prenom: 'Jojo' }];
  
  private findUserById = (id: string | number) => this.users.find(user => user.id === +id);

  randomUser(){
    return this.users[Math.random()*1];
  }



  constructor() { }


  getListTickets() : Observable<Tickets[]> {
    return of(this.defaultTickets).pipe(delay(500));
  }

  getTicketById(id: number): Observable<Tickets> {
    return of(this.findTicketById(id)).pipe(delay(500));
  }

  getUsers(): Observable<Users[]> {
    return of(this.users).pipe(delay(500));
  }

  createTicket(ticket: Tickets): Observable<Tickets> {
    const newTicket: Tickets = {
      id: ++this.idTicketSuivant,
      titre: ticket.titre,
      description: ticket.description,
      userId: 58,
      traiter: false
    };
        
    return of(newTicket).pipe(
      delay(500),
      tap((ticket: Tickets) => this.defaultTickets.push(ticket)));
  }

  updateTicketComplet(ticketId: number, completed: boolean): Observable<Tickets> {
    const foundTicket = this.findTicketById(+ticketId);
    if (foundTicket) {
      return of(foundTicket).pipe(
        delay(500),
        tap((ticket: Tickets) => {
          ticket.traiter = true;
        })
      );
    }

    return throwError(new Error('Le ticket n\'est pas trouvé'));
  }

}
