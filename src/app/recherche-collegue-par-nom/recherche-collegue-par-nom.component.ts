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

  ngOnInit(): void {
  }

  rechercherParMatricule(): void {
    this.listeMatricules =this.dataServ.rechercherParNom('xxx');
  }
  
}


