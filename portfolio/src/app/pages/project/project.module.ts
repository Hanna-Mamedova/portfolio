import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProjectComponent } from "./project.component";
import { MaterialModule } from "src/app/shared/material.module";
import { ProjectRoutingModule } from "./project-routing.module";


@NgModule({
  declarations: [
    ProjectComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProjectRoutingModule,
  ],
  exports: [
    ProjectComponent,
  ],
})
export class ProjectModule { }
