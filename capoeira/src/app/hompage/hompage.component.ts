import { Component, inject } from '@angular/core';
import { EventService } from '../Services/event.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hompage',
  imports: [CardComponent, CommonModule],
  templateUrl: './hompage.component.html',
  styleUrl: './hompage.component.css'
})
export class HompageComponent {
  private eventService = inject(EventService);
  events: any[] = [];


  ngOnInit(): void {
    this.eventService.getEvent().subscribe({
      next: (data) => {
        this.events = data;
        console.log(this.events);
      },
    });
  }
}
