import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // so app can have routing functionality
import { HeroesComponent } from './heroes/heroes.component'; // gives router somewhere to go
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) // initializes router and starts it listening for browser location changes
export class AppRoutingModule { }

// Angular Routes have 2 properties:
// path - string that matches URL in browser address bar
// component - component that the router should create when navigating to this route
