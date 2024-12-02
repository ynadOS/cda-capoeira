import { Component, OnInit } from '@angular/core';
import { Banner } from '../models/banner';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-forumpage',
  imports: [BannerComponent],
  templateUrl: './forumpage.component.html',
  styleUrl: './forumpage.component.css'
})
export class ForumpageComponent implements OnInit {
  myBanner! : Banner;

  ngOnInit(): void {
    this.myBanner = new Banner(
      "Rejoignez notre communauté pour échanger autour de la capoeira : techniques, culture, événements, et bien plus encore",
    );
  }
} 


