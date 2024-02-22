import { Injectable } from '@angular/core';
import { Project } from 'src/_models/Projets';
import { Tag } from 'src/_models/tags';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [
    { id: 0,name: 'Afiches',summary: 'mes créations pour mon business',description:"Je vous présente les afiches que j'ai réaliser pour certains clients",projectLink: 'https://www.google.com',pictures: ['picture1', 'picture2'],tags: [Tag.PHOTOSHOP, Tag.ILLUSTRATOR]},
    { id: 1,name: 'Affiches ',summary: 'mes créations pour notre entreprise',description:"Je vous présente les afiches que j'ai réaliser pour certains clients",projectLink: 'https://www.google.com',pictures: ['picture1', 'picture2'],tags: [Tag.PHOTOSHOP, Tag.ILLUSTRATOR]},
    { id: 2,name: 'Affiches ',summary: 'mes créations pour mes clients',description:"Je vous présente les afiches que j'ai réaliser pour certains clients",projectLink: 'https://www.google.com',pictures: ['picture1', 'picture2'],tags: [Tag.PHOTOSHOP, Tag.ILLUSTRATOR]},
  ];
  constructor() { }
  getProject(){
    return this.projects;
  }
}
