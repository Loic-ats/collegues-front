import { Component } from '@angular/core';
import { colleguesmock} from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colleguesexemple=colleguesmock;
  title = 'collegues-front';
}
