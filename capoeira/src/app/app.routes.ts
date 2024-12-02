import { Routes } from '@angular/router';
import { HompageComponent } from './hompage/hompage.component';
import { RessourcepageComponent } from './ressourcepage/ressourcepage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { ProfilpageComponent } from './profilpage/profilpage.component';
import { ForumpageComponent } from './forumpage/forumpage.component';

export const routes: Routes = [
  { path: '', component: HompageComponent },
  { path: 'ressource', component: RessourcepageComponent },
  { path: 'event', component: EventpageComponent },
  { path: 'profil', component: ProfilpageComponent },
  { path: 'forum', component: ForumpageComponent },
];
