import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface Ressource {
  id: number;
  title: string;
  url: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  readonly url = 'http://localhost:3000/ressources'; // L'URL de ton API
  private http = inject(HttpClient);
  public ressources = signal<Ressource[]>([]);

  constructor() {}

  // Méthode pour récupérer toutes les ressources
  getRessources(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.url).pipe(
      tap(ressources => this.ressources.set(ressources)) // Met à jour le signal local
    );
  }

}
