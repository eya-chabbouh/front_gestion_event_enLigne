import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any[] = [];
  filteredEvents: any[] = [];
  searchQuery: string = ''; // Recherche

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (data: any[]) => {
        this.events = data;
        this.filteredEvents = data; // Initialiser la liste filtrée
      },
      error => {
        console.error('Erreur lors de la récupération des événements:', error);
      }
    );
  }

  // Méthode de filtrage mise à jour avec tous les champs
  filterEvents(): void {
    this.filteredEvents = this.events.filter(event =>
      event.titre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.lieu.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.date.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.heure.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.categorie.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.type.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      event.capacity.toString().includes(this.searchQuery) // Convertir capacité en chaîne pour la recherche
    );
  }
}
