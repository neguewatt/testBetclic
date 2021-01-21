import { Tickets } from './../models/tickets';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeTicketsComponent } from './liste-tickets.component';

describe('ListeTicketsComponent', () => {
  let component: ListeTicketsComponent;
  let fixture: ComponentFixture<ListeTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test dataService return listeTickets', () => {
    expect(component.getTickets()).toBe(new Array<Tickets>());
  });

});
