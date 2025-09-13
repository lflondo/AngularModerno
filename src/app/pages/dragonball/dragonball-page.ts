import { Component, computed, signal } from '@angular/core';
// import { NgClass } from '@angular/common';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball',
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
  imports: [
    //NgClass
  ],
})
export class DragonballPage {
  name = signal('Gohan');
  power = signal(100);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 12000 },
    { id: 3, name: 'Piccolo', power: 3500 },
    { id: 4, name: 'Yamcha', power: 500 },
  ]);

  addCharacter() {
    if (this.name() === '' || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Math.max(...this.characters().map((c) => c.id)) + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update((chars) => [...chars, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
