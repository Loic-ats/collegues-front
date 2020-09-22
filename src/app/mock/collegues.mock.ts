import {Collegue} from "../models/Collegue";

export let colleguesmock = new Collegue();

colleguesmock.matricule='15552252';
colleguesmock.nom='Bob';
colleguesmock.prenoms='Eponge';
colleguesmock.dateDeNaissance= new Date(2000, 8, 22);
colleguesmock.email='bobeponge@lamer.com';