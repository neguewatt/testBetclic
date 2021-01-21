import { Tickets } from './../models/tickets';
import { TicketsService } from './../services/tickets.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details-tickets',
  templateUrl: './details-tickets.component.html',
  styleUrls: ['./details-tickets.component.css']
})

export class DetailsTicketsComponent implements OnInit {

  ticket: Tickets;
  ticketId: number;
  constructor(private route: ActivatedRoute, private dataService: TicketsService) { 
    
  }

  ngOnInit(): void {
    this.ticketId = +this.route.snapshot.paramMap.get('id');
    this.getTicketById();
  }

  getTicketById(){
    const myTicket = Tickets
    this.dataService.getTicketById(this.ticketId).subscribe(value => {
      this.ticket = value;
    });
  }

}
