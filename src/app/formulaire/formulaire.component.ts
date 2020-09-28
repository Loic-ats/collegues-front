import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';

interface Collegue {

  Matricule?: string;
  Nom?: string;
  Prenom?: string;
  DatedeNaissance?: string; 
  Email?:string;
  PhotoUrl?:string;

}

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  Collegue:Collegue = {};

  constructor() { }

  ngOnInit(): void {
  }

  Valider() {
    console.log(this.Collegue);
  }

}
