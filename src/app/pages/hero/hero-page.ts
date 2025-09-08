import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
})
export class HeroPage {
  name = signal('Iroman');
  age = signal(45);

  getHeroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()} años`;
    // return `${capitalizedName} - ${this.age()} años`;
    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  changeHero(): void {
    this.name.set('spiderman');
    this.age.set(22);
  }

  resetForm(): void {
    this.name.set('Iroman');
    this.age.set(45);
  }
  changeAge() {
    this.age.update((age) => 60);
  }
}
