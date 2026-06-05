import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Agendar } from './pages/agendar/agendar';
import { ConsultarAgendamento } from './pages/consultar-agendamento/consultar-agendamento';

export const routes: Routes = [
  { path: 'home', component: Home, pathMatch: 'full',},
  { path: 'agendar', component: Agendar},
  { path: 'consultar-agendamento', component: ConsultarAgendamento},
  { path: '**', redirectTo: 'home' }
];
