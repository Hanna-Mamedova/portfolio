import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { AboutComponent } from './pages/main/about/about.component';
import { WorksComponent } from './pages/main/works/works.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/logo/logo.component';
import { LinkedinComponent } from './components/svg/linkedin/linkedin.component';
import { GithubComponent } from './components/svg/github/github.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { ProjectComponent } from './pages/project/project.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    WorksComponent,
    FooterComponent,
    LogoComponent,
    LinkedinComponent,
    GithubComponent,
    MainComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
