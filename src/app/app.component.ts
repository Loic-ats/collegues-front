import { Component } from '@angular/core';
import { colleguesmock} from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //je récupére le mock et je créer un colleguesmock qui prend la valeur du mock
  colleguesexemple=colleguesmock;
  title = 'collegues-front';
}
