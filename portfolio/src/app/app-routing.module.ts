import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ProjectComponent } from './pages/project/project.component';

const routes: Routes = [
  { path: 'main', component:  MainComponent },
  { path: 'project/:id', component: ProjectComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
