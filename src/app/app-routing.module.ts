import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { TeamComponent } from './team/team.component'
import {RefsComponent } from './refs/refs.component'
import { DeliverablesComponent } from './deliverables/deliverables.component';
import { PresentationsComponent } from './presentations/presentations.component'
import { SolutionComponent } from './solution/solution.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { UserstoriesComponent } from './userstories/userstories.component';

const routes: Routes = [
{ path: '', component: LandingComponent, pathMatch: 'full'},
{ path: 'team', component: TeamComponent, pathMatch: 'full'},
{ path: 'refs', component: RefsComponent, pathMatch: 'full'},
{ path: 'deliverables', component: DeliverablesComponent, pathMatch: 'full'},
{ path: 'presentations', component: PresentationsComponent, pathMatch: 'full'},
{ path: 'userstories', component: UserstoriesComponent, pathMatch: 'full'},
{ path: 'solution', component: SolutionComponent, pathMatch: 'full'},
{ path: 'glossary', component: GlossaryComponent, pathMatch: 'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
