import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  slides = [
    { image: 'carrossel-familia.png', alt: 'Família' },
    { image: 'carrossel-viagem.png', alt: 'Viagem' },
    { image: 'carrossel-vovos.png', alt: 'Avós' },
  ];

  currentIndex = 0;
  private autoPlayInterval: any;

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    clearInterval(this.autoPlayInterval);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => this.next(), 4000);
  }

  resetAutoPlay() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.resetAutoPlay();
  }

  goTo(index: number) {
    this.currentIndex = index;
    this.resetAutoPlay();
  }
}
