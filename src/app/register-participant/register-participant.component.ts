import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-participant',
  templateUrl: './register-participant.component.html',
  styleUrls: ['./register-participant.component.css']
})
export class RegisterParticipantComponent {
  participant = {
    nom: '',
    adresse: '',
    tel: '',
  };
  evenementId!: number;
  utilisateurId: number = 2; 

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.evenementId = +this.route.snapshot.paramMap.get('id')!;
    console.log('Evenement ID:', this.evenementId);  // Vérifier la récupération
  }
  

  onSubmit() {
    const payload = {
      nom: this.participant.nom,
      adresse: this.participant.adresse,
      tel: this.participant.tel,
      evenement_id: this.evenementId,
      utilisateur_id: this.utilisateurId 
    };
    
    console.log('Payload:', payload); // Vérifiez ce qui est envoyé
  
    this.http.post('http://localhost:8000/registre/inscription', payload).subscribe(
      (response) => {
        alert('Inscription réussie !');
        this.router.navigate(['/']);
      },
      (error) => {
        alert('Erreur lors de l\'inscription : ' + error.message);
      }
    );
  }
  
}