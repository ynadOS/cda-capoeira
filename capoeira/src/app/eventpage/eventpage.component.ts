import { Component, inject, Input, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { BannerComponent } from '../banner/banner.component';
import { EventService } from '../Services/event.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [BannerComponent, CommonModule, CardComponent],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css'
})
export class EventpageComponent implements OnInit {
  myBanner! : Banner;
  private eventService = inject(EventService);
  events: any[] = [];


  ngOnInit(): void {
    this.myBanner = new Banner(
      "Découvrez tous les événements passés et à venir. N’hésitez pas à vous inscrire afin d’assister à vos événements à ne pas rater",
    );

    this.eventService.getEvent().subscribe({
      next: (data) => {
        this.events = data;
        console.log(this.events);
      },
    });
  }
}


