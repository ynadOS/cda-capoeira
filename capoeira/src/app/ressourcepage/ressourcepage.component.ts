import { Component, OnInit, inject } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { Banner } from '../models/banner';
import { CardComponent } from '../card/card.component';
import { RessourceService } from '../Services/ressource.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ressourcepage',
  standalone: true,
  imports: [BannerComponent, CardComponent, CommonModule],
  templateUrl: './ressourcepage.component.html',
  styleUrls: ['./ressourcepage.component.css']
})
export class RessourcepageComponent implements OnInit {
  myBanner!: Banner;
  private ressourceService = inject(RessourceService);
  ressources: any[] = [];

  ngOnInit(): void {
    this.myBanner = new Banner(
      "Découvrez toutes les ressources pour approfondir votre pratique de la capoeira : articles, vidéos, événements, et bien plus encore"
    );

    // Récupérer les ressources via le service
    this.ressourceService.getRessources().subscribe({
      next: (data) => {
        this.ressources = data;
        console.log(this.ressources);
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des ressources', err);
      }
    });
  }
}
