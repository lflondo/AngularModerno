import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';

// import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super',
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballSuperPage {

  public dragonballService = inject(DragonballService);

}
