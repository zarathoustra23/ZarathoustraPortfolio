import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleService:Title, private renderer :Renderer2){
    this.titleService.setTitle("Zarathoustra-Résumé");
  }
  DownloadCV(){
    const Link =this.renderer.createElement("a");
    Link.setAttribute("target","_blank");
    Link.setAttribute('href',"../../assets/CV_ZARATHOUSTRA.pdf");
    Link.setAttribute("download","CV_ZARATHOUSTRA.pdf")
    Link.click();
    Link.remove();
  }
}
