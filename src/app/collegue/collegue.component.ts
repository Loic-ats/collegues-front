import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  //dans ma vue j'ai un propriete col qui désigne me collègue et on va l'afficher

  @Input() col;
  constructor() { }
  modeAffichage = true;

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




}
