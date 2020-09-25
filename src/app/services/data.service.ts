import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Collegue } from '../models/Collegue';
import { matricules } from '../mock/matricules.mock';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  listeMatricules: string[];
  constructor(private http: HttpClient) { }

  rechercherParNom(nom:string) {
        return this.listeMatricules = matricules;
    }

    recupererCollegueCourant(): Observable<Collegue[]> {
    return this.http.get<Collegue[]>(`URL de la base collegues à mettre`)
    }

}
