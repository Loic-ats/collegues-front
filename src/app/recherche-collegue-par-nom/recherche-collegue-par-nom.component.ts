import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {

  constructor(private dataServ: DataService) { }

  listeMatricules: string[];
  matriculeNonTrouve = false;
  erreurTechnique = false;


  ngOnInit(): void {
  }

rechercherParMatricule(nomSaisi :string ): void {
 this.listeMatricules = null; // effacer les matricules affichés
    this.dataServ.rechercherParNom(nomSaisi)
      .subscribe(matriculesBack => {
        this.erreurTechnique = false;
        if (matriculesBack.length > 0) {
          this.matriculeNonTrouve = false;
          this.listeMatricules = matriculesBack;
        } else {
          this.matriculeNonTrouve = true;
        }
      },
        error => this.erreurTechnique = true);
  }
  
  selectionner(matricule: string): void {
    this.dataServ.selectionnerMatricule(matricule)
      .subscribe(() => { },
        error => this.erreurTechnique = true);
  }

}


