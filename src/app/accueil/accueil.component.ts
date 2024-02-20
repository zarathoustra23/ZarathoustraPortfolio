import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity:  0 })),
      transition('void <=> *', animate('1s ease-in')),
    ])
  ]
})
export class AccueilComponent {
  constructor(private titleService:Title){
      this.titleService.setTitle("Zarathoustra-Accueil")

  }
}
