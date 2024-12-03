import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface Event {
  id: number;
  title: string;
  description: string;
  category: string;
  city: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url = 'http://localhost:3000/events';
  private http = inject(HttpClient);
  private event = signal<Event[]>([])

  constructor() { }

  getEvent(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url).pipe(
      tap(event => this.event.set(event))
    );
  }
}
