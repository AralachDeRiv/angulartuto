import { MonsterType } from '../utils/monster.utils';

export class Monster {
  id: number = -1;
  name: string = 'My monster';
  image: string = '/img/monster.png';
  type: MonsterType = MonsterType.ELECTRIC;
  hp: number = 42;
  figureCaption: string = 'N°001 Monster';
  attackName: string = 'Geo impact';
  attackStrength: number = 100;
  attackDescription: string =
    'This is a long description of a monster attack. Probably something to do with electricity...';

  copy(): Monster {
    return Object.assign(new Monster(), this);
  }
}
