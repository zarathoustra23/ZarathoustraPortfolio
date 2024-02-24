import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs';
import { Project } from 'src/_models/Projets';
import { Tag } from 'src/_models/tags';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Affiches',
      summary: 'mes créations pour mon business',
      description:
        "Je vous présente les afiches que j'ai réaliser pour certains clients",
      projectLink: 'https://www.google.com',
      pictures: [
        '../../assets/img_Projet/affiches/affiche et logo affiche.jpg',
        '../../assets/img_Projet/affiches/affiche LeChef coming soon.jpg',
        '../../assets/img_Projet/affiches/affiche smart.jpg',
      ],
      tags: [Tag.HTML, Tag.ILLUSTRATOR],
    },
    {
      id: 1,
      name: 'Affiches ',
      summary: 'mes créations pour notre entreprise',
      description:
        "Je vous présente les afiches que j'ai réaliser pour certains clients",
      projectLink: 'https://www.google.com',
      pictures: [
        '../../assets/img_Projet/affiches/affiche et logo affiche.jpg',
        '../../assets/img_Projet/affiches/affiche LeChef coming soon.jpg',
        '../../assets/img_Projet/affiches/affiche smart.jpg',
      ],
      tags: [Tag.PHOTOSHOP, Tag.AFTER_EFFECT],
    },
    {
      id: 2,
      name: 'Affiches ',
      summary: 'mes créations pour mes clients',
      description:
        "Je vous présente les afiches que j'ai réaliser pour certains clients",
      projectLink: 'https://www.google.com',
      pictures: [
        '../../assets/img_Projet/affiches/affiche et logo affiche.jpg',
        '../../assets/img_Projet/affiches/affiche LeChef coming soon.jpg',
        '../../assets/img_Projet/affiches/affiche smart.jpg',
      ],
      tags: [Tag.JAVASCRIPT, Tag.ILLUSTRATOR],
    },
  ];
  constructor() {}
  getProject() {
    return this.projects;
  }
  getProjectbyfilter(filterTag: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function (project) {
      let FoundAll = true;

      filterTag.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false) {
          FoundAll = false;
        }
      });
      if (FoundAll) {
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
