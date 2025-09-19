import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPage {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 15000 },
    { id: 2, name: 'Vegeta', power: 12000 },
  ]);

  addCharacter(newCharacter: Character) {
    this.characters.update(
      (list) =>[...list, newCharacter]
    )
   
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
