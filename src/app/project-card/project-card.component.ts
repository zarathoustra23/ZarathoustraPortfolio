import { Component, Input } from '@angular/core';
import { Project } from 'src/_models/Projets';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
  project={} as Project;

}
