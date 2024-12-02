import { Component, Input } from '@angular/core';
import { Banner } from '../models/banner';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() banner!: Banner;
}
