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
      name: ' 4 Affiches',
      summary: 'Les Services de SnowSky',
      description:
        "Je vous présente les affiches que j'ai réalisé pour certains clients pour illustrer nos services c'est à dire : créations de logos , de posters ,de vidéos  et de sites webs.",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/affiche et logo affiche.jpg',
        '../../assets/img_Projet/affiches/bot affiche.jpg',
        '../../assets/img_Projet/affiches/montage video affiche.jpg',
        '../../assets/img_Projet/affiches/website affiche.jpg',
      ],
      tags: [Tag.PHOTOSHOP],
    },
    {
      id: 1,
      name: '2 Affiches et 1 Logo',
      summary: 'Entreprise de livraison de plats ( LeChef )',
      description:
        'Mes créations pour une entreprise de livraison de plats : un logo et 2 affiches ',
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/LOGO lechef.jpg',
        '../../assets/img_Projet/affiches/IMG-20231015-WA0015.jpg',
        '../../assets/img_Projet/affiches/affiche LeChef coming soon.jpg',
      ],
      tags: [Tag.PHOTOSHOP, Tag.ILLUSTRATOR],
    },
    {
      id: 2,
      name: '1 Logo',
      summary: 'ma création pour une entreprise ( HAIKU ENGINE )',
      description:
        "Je vous présente le logo que j'ai réalisé pour un moteur de jeu vidéo.",
      projectLink:
        'https://www.linkedin.com/in/tra-jairus-tiesse-1371292a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pictures: [
        '../../assets/img_Projet/affiches/alongé.jpg',
      ],
      tags: [Tag.ILLUSTRATOR],
      
    },
    {
      id: 3,
      name: "Animation Logo",
      summary: "création d'une animation pour mon logo Personnel.",
      description:
        "Je vous partage une animation que j'ai réalisé sur première pro et after effect pour mon logo (Zarathoustra).",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/video-gif/version carre 1080 1080.mp4',
      ],
      tags: [Tag.PREMIERE_PRO,Tag.AFTER_EFFECT],
    },
    {
      id: 4,
      name: '1 Affiche',
      summary: 'ma création pour une entreprise ( IDEAL-CONSEIL )',
      description:
        "Je vous présente le poster que j'ai réalisé pour une entreprise de marketing et d'accompagnement.",
      projectLink:
        'https://www.linkedin.com/in/tra-jairus-tiesse-1371292a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      pictures: [
        '../../assets/img_Projet/affiches/IMG-20230916-WA0045.jpg',
      ],
      tags: [Tag.PHOTOSHOP],
    },
    {
      id: 5,
      name: '2 Affiches et 1 logo',
      summary: "Mes créations pour l'identité visuelle de SnowSky ",
      description:
        "Je vous présente le logo et les 2 affiches que j'ai réalisé pour présenter notre entreprise de freelance.",
      projectLink:
        'https://www.snowsky-dev.com',
      pictures: [
        '../../assets/img_Projet/affiches/IMG-20240102-WA0020.jpg',
        '../../assets/img_Projet/affiches/affiche smart.jpg',
        '../../assets/img_Projet/affiches/SnowSky presentation.jpg',
      ],
      tags: [Tag.PHOTOSHOP,Tag.ILLUSTRATOR],
    },
    {
      id: 6,
      name: "vidéo animation",
      summary: "création d'une animation pour notre logo.",
      description:
        "Je vous partage une vidéo que j'ai réalisé sur première pro pour la publicité de notre entreprise (SNOWSKY).",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/video-gif/video logo.mp4',
      ],
      tags: [Tag.PREMIERE_PRO,Tag.AFTER_EFFECT],
    },
    
    {
      id: 7,
      name: '1 Carte de visite',
      summary: "Mon model de carte de visite",
      description:
        "Je vous présente un de mes models de carte de visite pour toute personne désireuse d'augmenter son professionnalisme.",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/CARTE.jpg',
      ],
      tags: [Tag.PHOTOSHOP],
    },
    {
      id: 8,
      name: '1 Affiche ',
      summary: "Un poster pour notre plateforme whatsApp",
      description:
        "Je vous présente une affiche que j'ai réalisé pour notre groupe whatsApp de passionnés d'informatique.",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/groupe whatsapp.jpg',
      ],
      tags: [Tag.PHOTOSHOP],
    },
    {
      id: 9,
      name: "Animation Logo",
      summary: "création d'une animation avec déplacement d'éléments.",
      description:
        "Je vous partage une animation que j'ai réalisé sur première pro et after effect avec mon logo signature (ZARATHOUSTRA).",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/video-gif/séquence logo signature.mp4',
      ],
      tags: [Tag.PREMIERE_PRO],
    },
    {
      id: 10,
      name: 'Mon Affiche',
      summary: "Un poster pour presenter mes services",
      description:
        "Je vous partage une affiche que j'ai réalisé debut Janvier 2024 pour presenter mes services.",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/mon affiche.jpg',
      ],
      tags: [Tag.PHOTOSHOP],
    },
    
    {
      id: 11,
      name: '1 Logo',
      summary: "Un logo pour une association d'étudiants",
      description:
        "Je vous partage un logo que j'ai réalisé sur illustrator qui servira à une association d'étudiants de Man (U-MAN) en Côte d'Ivoire.",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/logo mine U man.jpg',
      ],
      tags: [Tag.ILLUSTRATOR,Tag.PHOTOSHOP],
    },
    {
      id: 12,
      name: '1 Logo',
      summary: "Le logo pour un groupe d'étudiants qui participe à des élections internes à leur associations.",
      description:
        "Je vous partage mon logo que j'ai réalisé sur illustrator qui sa servi à un groupe d'étudiants qui ont battu campagne (AScendance).",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/IMG-20231121-WA0000.jpg',
      ],
      tags: [Tag.ILLUSTRATOR,Tag.PHOTOSHOP],
    },
    {
      id: 13,
      name: "Front-End d'un site web",
      summary: "Actuellement en pleine création du front-end d'un site web.",
      description:
        "Je vous partage l'un des projets sur lesquels je travaille actuellement avec Angular .Le front-end d'un site web pour un client.",
      projectLink:
        'https://github.com/zarathoustra23/AikyanWebSite',
      pictures: [
        '../../assets/img_Projet/affiches/image Connexion 1.png',
        '../../assets/img_Projet/affiches/fond_Connexion.jpg',
      ],
      tags: [Tag.HTML,Tag.CSS,Tag.JAVASCRIPT],
    },
    {
      id: 14,
      name: "Programme de binômage",
      summary: "Projet de binomage réalisé en équipe avec notre commission informatique.",
      description:
        "Je vous partage l'un des projets sur lesquels j'ai travaillé avec des amis en utilisant Python .Un programme de binômage avec gestion de photos qui attribu un parrain à chaque filleul.",
      projectLink:
        'https://github.com/zarathoustra23/Akwaba_22emePromotionSTCGP',
      pictures: [
        '../../assets/img_Projet/affiches/Python Binomage.png',
      ],
      tags: [Tag.PYTHON],
    },
    {
      id: 15,
      name: "Gif SnowSky",
      summary: "création d'un gif publicitaire pour notre entreprise.",
      description:
        "Je vous partage un gif que j'ai réalisé sur première pro pour la publicité de notre entreprise (SNOWSKY).",
      projectLink:
        'https://www.snowsky-dev.com',
      pictures: [
        '../../assets/img_Projet/video-gif/gif publicitaire SnowSky.gif',
      ],
      tags: [Tag.PREMIERE_PRO,Tag.AFTER_EFFECT],
    },
    {
      id: 16,
      name: '1 Logo',
      summary: "Mon logo personnel",
      description:
        "Je vous partage mon logo que j'ai réalisé sur illustrator qui me servira comme signature dans mes créations.",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/logo avec fond bleu.jpg',
      ],
      tags: [Tag.ILLUSTRATOR],
    },
    
    {
      id: 17,
      name: "Intro avec Logo",
      summary: "création d'une animation avec fondu pour l'intro d'une vidéo.",
      description:
        "Je vous partage une animation que j'ai réalisé sur première pro et after effect pour un clients qui souhaite faire des vidéos.",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/video-gif/1.mp4',
      ],
      tags: [Tag.PREMIERE_PRO],
    },
    {
      id: 18,
      name: '1 Logo',
      summary: "Un logo pour l'identité visuelle de notre cliente",
      description:
        "Je vous partage un logo que j'ai réalisé sur illustrator qui servira à l'une de nos clientes dans ses activités sur les réseaux (Respa-Néné).",
      projectLink:
        'https://www.facebook.com/profile.php?id=100086476666498&mibextid=ZbWKwL',
      pictures: [
        '../../assets/img_Projet/affiches/IMG-20231018-WA0046.jpg',
      ],
      tags: [Tag.ILLUSTRATOR],
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
