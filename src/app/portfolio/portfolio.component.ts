import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from 'src/_models/Projets';
import { Tag } from 'src/_models/tags';
import { ProjectService } from 'src/app/service/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit{
  isCollapsed:boolean=true;
  filtering:boolean=false;
  photoshop:boolean=false;
  illustrator:boolean=false;
  premierePro:boolean=false;
  Aftereffect:boolean=false;
  HTML:boolean=false;
  CSS:boolean=false;
  python:boolean=false;
  JavaScript:boolean=false;
  projects=[] as Project[];
  constructor(private titleService: Title,private projectService:ProjectService) {
    this.titleService.setTitle('Zarathoustra-Portfolio');
  }
  ngOnInit(){
    this.projects=this.projectService.getProject();
  }
  Filter(){
    let filterTags:Tag[]=[];
    if(this.photoshop){
      filterTags.push(Tag.PHOTOSHOP)
    }
    if(this.illustrator){
      filterTags.push(Tag.ILLUSTRATOR)
    }
    if(this.premierePro){
      filterTags.push(Tag.PREMIERE_PRO)
    }
    if(this.Aftereffect){
      filterTags.push(Tag.AFTER_EFFECT)
    }
    if(this.HTML){
      filterTags.push(Tag.HTML)
    }
    if(this.CSS){
      filterTags.push(Tag.CSS)
    }
    if(this.python){
      filterTags.push(Tag.PYTHON)
    }
    if(this.JavaScript){
      filterTags.push(Tag.JAVASCRIPT)
    }
    this.projects =this.projectService.getProjectbyfilter(filterTags);
    if(this.photoshop || this.illustrator || this.premierePro || this.Aftereffect || this.HTML || this.CSS || this.python || this.JavaScript){
      this.filtering=true;
    }else{
      this.filtering=false;
    }
  }
  resetFilter(){
    this.photoshop=false;
    this.illustrator=false;
    this.premierePro=false;
    this.Aftereffect=false;
    this.HTML=false;
    this.CSS=false;
    this.python=false;
    this.JavaScript=false;
    this.filtering=false;
    this.projects=this.projectService.getProject();
  }
}
