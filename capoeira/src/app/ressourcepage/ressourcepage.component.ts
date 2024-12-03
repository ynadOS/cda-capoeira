import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { Banner } from '../models/banner';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-ressourcepage',
  standalone: true,
  imports: [BannerComponent, CardComponent],
  templateUrl: './ressourcepage.component.html',
  styleUrl: './ressourcepage.component.css'
})
export class RessourcepageComponent  implements OnInit {
  myBanner! : Banner;

  ngOnInit(): void {
    this.myBanner = new Banner(
      "Découvrez toutes les ressources pour approfondir votre pratique de la capoeira : articles, vidéos, événements, et bien plus encore",
    );
  }
}



