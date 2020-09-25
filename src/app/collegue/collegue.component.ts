import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  //dans ma vue j'ai un propriete col qui désigne me collègue et on va l'afficher

  @Input() col;
  constructor(private dataServ: DataService) { }

  modeAffichage = true;
  listeCollegues : Collegue[];

  ngOnInit(): void {
  }
  
  ModifCollegues() {
    console.log("Modifier un collègue");
  }
  
  modifierCollegue(): void {
    this.modeAffichage = false;
  }
  validerCollegue(): void {
    this.modeAffichage = true;
  }

  afficherlisteCollegues(): void {
   this.dataServ.recupererCollegueCourant().subscribe (
    Collegues => this.listeCollegues = Collegues,
    error => { },
    () => { }
  );
;
  }
}
