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
  projects=[] as Project[];
  constructor(private titleService: Title,private projectService:ProjectService) {
    this.titleService.setTitle('Zarathoustra-Portfolio');
  }
  ngOnInit(){
    this.projects=this.projectService.getProject();
  }
}
