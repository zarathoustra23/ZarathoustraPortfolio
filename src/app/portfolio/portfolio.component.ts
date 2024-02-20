import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/_models/Projets';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  project :Project={
    id:1,
    name:"Affiche",
    summary:"mes créations",
    description:"Je vous présente les afiches que j'ai réaliser pour certains clients",
    projectLink:"https://www.google.com",
    pictures:["picture1","picture2"],
    tags:["Photoshop","Adode illustrator"],
  }
  constructor(private titleService:Title){
    this.titleService.setTitle("Zarathoustra-Portfolio");
  }
}
