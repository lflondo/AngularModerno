import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
})
export class HeroPage {
  name = signal('Iroman');
  age = signal(45);

  getHeroDescription = computed(() => {
    // const capitalizedName = this.name().toUpperCase();
    // return `${capitalizedName} - ${this.age()} años`;
    return `${this.name()} - ${this.age()} años`;
  });

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
