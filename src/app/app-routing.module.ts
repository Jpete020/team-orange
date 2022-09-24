import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { TeamComponent } from './team/team.component'
import {RefsComponent } from './refs/refs.component'

const routes: Routes = [
{ path: '', component: LandingComponent, pathMatch: 'full'},
{ path: 'team', component: TeamComponent, pathMatch: 'full'},
{ path: 'refs', component: RefsComponent, pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
