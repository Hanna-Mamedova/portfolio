import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/main/about/about.component';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: 'main', component:  MainComponent },
  // { path: 'second', component: SecondComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
