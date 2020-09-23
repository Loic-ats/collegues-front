import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  //dans ma vue j'ai un propriete col qui désigne me collègue et on va l'afficher

@Input()col;
  constructor() { }

  ngOnInit(): void {
  }

  ModifCollegues() {
    console.log("Modifier un collègue");
        }

  nouveauCollegue(){
    console.log("Création d’un nouveau collègue");
         }
   
}
