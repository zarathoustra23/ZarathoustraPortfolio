import { Component, AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-typing-animation',
  templateUrl: `./typing-animation.component.html`,
  styleUrls: ['./typing-animation.component.css']
})
export class TypingAnimationComponent implements AfterViewInit {
  constructor() {
    this.textElement = new ElementRef(null);
  }
  @ViewChild('textElement') textElement: ElementRef ;
  words = ["Développeur front-end...", "Infographiste..."," Monteur vidéo..."];
  currentWordIndex =  0;
  currentCharIndex =  0;
  typingSpeed =  150;
  deletingSpeed =  75;

  ngAfterViewInit() {
    this.typeWord();
  }

  typeWord() {
    if (this.currentCharIndex < this.words[this.currentWordIndex].length) {
      this.textElement.nativeElement.textContent += this.words[this.currentWordIndex][this.currentCharIndex++];
      setTimeout(() => this.typeWord(), this.typingSpeed);
    } else {
      setTimeout(() => this.deleteWord(), this.typingSpeed);
    }
  }

  deleteWord() {
    if (this.currentCharIndex >  0) {
      this.textElement.nativeElement.textContent = this.textElement.nativeElement.textContent.slice(0, -1);
      this.currentCharIndex--;
      setTimeout(() => this.deleteWord(), this.deletingSpeed);
    } else {
      this.currentWordIndex = (this.currentWordIndex +  1) % this.words.length;
      setTimeout(() => this.typeWord(), this.typingSpeed +  1000);
    }
  }
}
