import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appTypingEffect]'
})
export class TypingEffectDirective implements OnInit {
  @Input('appTypingEffect') words: string[];
  currentWordIndex =  0;
  currentCharIndex =  0;
  typingSpeed =  100;
  deletingSpeed =  50;

  constructor(private el: ElementRef) {
    this.words=["word1","words 2"];
  }

  ngOnInit() {
    this.typeWord();
  }

  typeWord() {
    if (this.currentCharIndex < this.words[this.currentWordIndex].length) {
      this.el.nativeElement.textContent += this.words[this.currentWordIndex][this.currentCharIndex++];
      setTimeout(() => this.typeWord(), this.typingSpeed);
    } else {
      setTimeout(() => this.deleteWord(), this.typingSpeed);
    }
  }

  deleteWord() {
    if (this.currentCharIndex >  0) {
      this.el.nativeElement.textContent = this.el.nativeElement.textContent.slice(0, -1);
      this.currentCharIndex--;
      setTimeout(() => this.deleteWord(), this.deletingSpeed);
    } else {
      this.currentWordIndex = (this.currentWordIndex +  1) % this.words.length;
      setTimeout(() => this.typeWord(), this.typingSpeed +  1000);
    }
  }
}
