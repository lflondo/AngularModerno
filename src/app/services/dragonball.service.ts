import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  if (characters) return JSON.parse(characters) as Character[];

  return [];
};

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters = signal<Character[]>([...loadFromLocalStorage()]);

  saveToLocalStorage = effect(() => {
    // console.log(`Character count ${this.characters().length}`)
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
