import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = 'Titre à modifier';
  @Input() content: string = 'Contenu par défaut de la carte';
  @Input() imageUrl: string | null = null; // @Input pour l'image
}
