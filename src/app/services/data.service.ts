import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';

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
  listeMatricules: string[];
  constructor(private http: HttpClient) { }
  
  rechercherParNom(nom:string) : Observable<string[]>{
    return this.http.get<string []>( `${environment.backendUrl}/collegues?nom=${nom}`)
    }

  recupererCollegueCourant(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(`${environment.backendUrl}/collegues`)
    }

    selectionnerMatricule(matricule: string): Observable<Collegue> {
      return this.http.get<CollegueBack>(`${environment.backendUrl}/collegues/${matricule}`)
        .pipe(
          map(colBack => new Collegue(colBack.matricule, colBack.nom, colBack.prenom, colBack.email,
            new Date(colBack.dateDeNaissance),colBack.photoUrl)),
          tap(collegue => this.subCollegueSelectionne.next(collegue))
        );
    }
}