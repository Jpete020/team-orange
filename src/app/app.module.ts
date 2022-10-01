import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './material-ui/material-ui.module';
import { LandingComponent } from './landing/landing.component';
import { TeamComponent } from './team/team.component';
import { RefsComponent } from './refs/refs.component';
import { DeliverablesComponent } from './deliverables/deliverables.component';
import { PresentationsComponent } from './presentations/presentations.component';
import { SolutionComponent } from './solution/solution.component';
import { GlossaryComponent } from './glossary/glossary.component';
import { CurrentFlowImgComponent } from './current-flow-img/current-flow-img.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    TeamComponent,
    DeliverablesComponent,
    PresentationsComponent,
    SolutionComponent,
    GlossaryComponent,
    CurrentFlowImgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
