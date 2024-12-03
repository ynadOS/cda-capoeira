import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { EventService } from '../Services/event.service';


@Component({
  selector: 'app-header',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  private eventService = inject(EventService);

  ngOnInit() {
    this.eventService.getEvent().subscribe();
  }
}
