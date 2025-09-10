import { Component, computed, signal } from '@angular/core';
import { NgClass } from '@angular/common';

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
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 12000 },
    { id: 3, name: 'Piccolo', power: 3500 },
  ]);

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //   };
  // });
}
