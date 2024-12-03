import { Component, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-eventpage',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './eventpage.component.html',
  styleUrl: './eventpage.component.css'
})
export class EventpageComponent implements OnInit {
  myBanner! : Banner;

  ngOnInit(): void {
    this.myBanner = new Banner(
      "Découvrez tous les événements passés et à venir. N’hésitez pas à vous inscrire afin d’assister à vos événements à ne pas rater",
    );
  }
}


