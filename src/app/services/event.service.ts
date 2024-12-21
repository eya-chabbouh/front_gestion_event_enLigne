import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://127.0.0.1:8000/events';  // Remplacez par votre URL d'API

  constructor(private http: HttpClient) { }

  // Récupérer les événements
  getEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

 // Soumettre une demande de participation
 submitParticipation(eventId: number, userId: number): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/register`, { event_id: eventId, user_id: userId });
}
}
