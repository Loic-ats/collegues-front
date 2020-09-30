import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { CreerCollegueComponent } from './creer-collegue/creer-collegue.component';
import { FormsModule } from '@angular/forms';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { PageGalerieComponent } from './page-galerie/page-galerie.component';
import { PageAproposComponent } from './page-apropos/page-apropos.component';
import { PageCreerCollegueComponent } from './page-creer-collegue/page-creer-collegue.component';
import { RouterModule, Routes } from '@angular/router';
import { GraphiqueComponent } from './graphique/graphique.component';
import { PageGraphiqueComponent} from './page-graphique/page-graphique.component';

const routes: Routes = [
  { path: 'accueil', component: PageAccueilComponent },
  { path: 'galerie', component: PageGalerieComponent },
  { path: 'graphique', component: PageGraphiqueComponent},
  { path: 'apropos', component: PageAproposComponent },
  { path: 'creer', component: PageCreerCollegueComponent },
  { path: '', pathMatch: 'full', redirectTo: '/accueil' }
];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    CreerCollegueComponent,
    MenuComponentComponent,
    PageAccueilComponent,
    PageGalerieComponent,
    PageAproposComponent,
    PageCreerCollegueComponent,
    PageGraphiqueComponent,
    GraphiqueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

