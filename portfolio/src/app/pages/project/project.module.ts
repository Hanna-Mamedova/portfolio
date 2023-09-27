import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { ProjectRoutingModule } from './project-routing.module';
import { BublesComponent } from 'src/app/components/bubles/bubles.component';

@NgModule({
  declarations: [ProjectComponent, BublesComponent],
  imports: [CommonModule, MaterialModule, ProjectRoutingModule],
  exports: [ProjectComponent],
})
export class ProjectModule {}
