import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTicketsComponent } from './details-tickets.component';

describe('DetailsTicketsComponent', () => {
  let component: DetailsTicketsComponent;
  let fixture: ComponentFixture<DetailsTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('test dataService return un ticket', () => {
    expect(component.getTicketById()).toBe();
  });
});
