import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { DataService } from './../services/data.service';
import { CollegueGalerie } from './../models/CollegueGalerie';

@Component({
  selector: 'app-page-galerie',
  templateUrl: './page-galerie.component.html',
  styleUrls: ['./page-galerie.component.css']
})
export class PageGalerieComponent implements OnInit {

  CollegueGalerieTab: CollegueGalerie [] =[];

  constructor(private dataSrv: DataService) { }

  ngOnInit(): void {
    this.dataSrv.AfficherPhotoDesCollegues().subscribe(
      CollegueGalerie => this.CollegueGalerieTab.push(CollegueGalerie)
    );
  }
}