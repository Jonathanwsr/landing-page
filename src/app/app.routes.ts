import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/PlayersComponent/players.component';
import { PlayerDetailComponent } from './components/player-detail-component/player-detail-component.component';
import { LeagueComponent } from './components/LeagueComponent/league.component';
import { LeagueDetailComponent } from './components/league-detail-component/league-detail-component.component';

 

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'players', component: PlayersComponent },
  { path: 'player/:id', component: PlayerDetailComponent, data: { renderMode: 'no-prerender' } },
  { path: 'leagues', component: LeagueComponent },
  { path: 'leagues/:id', component: LeagueDetailComponent, data: { renderMode: 'no-prerender' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule {}

export { routes }; 
