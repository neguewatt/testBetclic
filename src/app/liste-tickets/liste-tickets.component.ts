import { TicketsService } from './../services/tickets.service';
import { Component, OnInit } from '@angular/core';
import { Tickets } from '../models/tickets';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-tickets',
  templateUrl: './liste-tickets.component.html',
  styleUrls: ['./liste-tickets.component.css']
})
export class ListeTicketsComponent implements OnInit {

  public titre: '';
  public description: '';
  public tickets: Tickets[];

  constructor(private router: Router, private dataService: TicketsService) { }

  ngOnInit() {
    this.getTickets();
  }

  getTickets(): Tickets[] {
    this.dataService.getListTickets().subscribe(value => {
      this.tickets = value;
    });
    return this.tickets;
  }

  detailTicket(idTicket: number){
    this.router.navigate(['/ticket', idTicket]);
  }

  complete(idTicket: number){
    this.dataService.updateTicketComplet(idTicket, true).subscribe( value => {
      console.log(value);
    })
  }


  createTicket(){
    const newTicket : Tickets = {
      id: null,
      titre: this.titre,
      description: this.description,
      userId: null,
      traiter: false
    }
    console.log(newTicket);
      
    this.dataService.createTicket(newTicket).subscribe( data => {
      data;
    });
  }

}
