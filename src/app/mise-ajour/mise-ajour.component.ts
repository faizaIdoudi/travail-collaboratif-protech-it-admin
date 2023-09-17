import { Component } from '@angular/core';

@Component({
  selector: 'app-mise-ajour',
  templateUrl: './mise-ajour.component.html',
  styleUrls: ['./mise-ajour.component.css']
})
export class MiseAJourComponent {
  transactions =[
    {
      id: 1,
      titre: "Chat en direct",
      description: "Ajout du chat en direct",
      date: "2023-09-13",
      statut: "En cours",
      responsable: "John Doe",
    },
    {
      id: 2,
      titre: "Optimisation BDD",
      description: "Optimisation des requêtes SQL",
      date: "2023-09-14",
      statut: "Terminé",
      responsable: "Jane Smith",
    },
    {
      id: 3,
      titre: "Intégration paiement",
      description: "Intégration d'un système de paiement",
      date: "2023-09-15",
      statut: "En attente",
      responsable: "Bob Johnson",
    },
  ];
  getStatutClass(statut: string): string {
    switch (statut) {
      case 'En cours':
        return 'en-cours';
      case 'Terminé':
        return 'termine';
      case 'En attente':
        return 'en-attente';
      default:
        return '';
    }
  }




}
