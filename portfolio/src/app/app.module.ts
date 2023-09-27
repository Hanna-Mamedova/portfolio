import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { AboutComponent } from './pages/main/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinkedinComponent } from './components/svg/linkedin/linkedin.component';
import { GithubComponent } from './components/svg/github/github.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { ProjectsComponent } from './pages/main/projects/projects.component';
import { MaterialModule } from './shared/material.module';
import { ProjectsListComponent } from './pages/main/projects/projects-list/projects-list.component';
import { SkillsComponent } from './pages/main/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    ProjectsComponent,
    FooterComponent,
    LogoComponent,
    LinkedinComponent,
    GithubComponent,
    MainComponent,
    ProjectsListComponent,
    SkillsComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
