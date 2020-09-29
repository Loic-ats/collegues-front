import { CreerCollegueForm } from './../creer-collegue/creer-collegue-form';
import { environment } from './../../environments/environment';
import { Collegue } from './../models/Collegue';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CollegueGalerie } from './../models/CollegueGalerie';

// tap (avant s'appelait do)
// peek en Stream Java


interface CollegueBack {
  id: number;
  matricule: string;
  nom: string;
  prenom: string;
  email: string;
  dateDeNaissance: string;
  photoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subCollegueSelectionne = new Subject<Collegue>();

  constructor(private http: HttpClient) { }

  rechercherParNom(nom: string): Observable<string[]> {
    return this.http.get<string[]>(`${environment.collegueApiBaseUrl}/collegues?nom=${nom}`);
  }

  recupererCollegueCourant(): Observable<Collegue> {
    return this.subCollegueSelectionne.asObservable();
  }

  selectionnerMatricule(matricule: string): Observable<Collegue> {
    return this.http.get<CollegueBack>(`${environment.collegueApiBaseUrl}/collegues/${matricule}`)
      .pipe(
        map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
          new Date(colBack.dateDeNaissance),colBack.photoUrl)),
        tap(collegue => this.subCollegueSelectionne.next(collegue))
      );
  }

  creerCollegue(col: CreerCollegueForm): Observable<Collegue> {
    return this.http.post<CollegueBack>(
      `${environment.collegueApiBaseUrl}/collegues`,
      col)
      .pipe(
        map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
          new Date(colBack.dateDeNaissance), colBack.photoUrl)));
  }

  AfficherPhotoDesCollegues(): Observable<CollegueGalerie> {
    return this.http.get<CollegueGalerie>(`${environment.collegueApiBaseUrl}/collegues`);
  }
}
