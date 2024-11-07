import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../utils/monster.utils';

@Injectable({
  providedIn: 'root',
})
export class MonsterService {
  monsters: Monster[] = [];
  currentIndex: number = 1;
  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monsterData = localStorage.getItem('monsters');
    if (monsterData) {
      this.monsters = JSON.parse(monsterData).map((monsterJSON: any) =>
        Object.assign(new Monster(), monsterJSON)
      );

      this.currentIndex = Math.max(...this.monsters.map((m: Monster) => m.id));
    } else {
      this.init();
      this.save();
    }
  }

  private init() {
    const monster1 = new Monster();
    monster1.id = this.currentIndex++;
    monster1.name = 'Pik';
    monster1.hp = 40;
    monster1.figureCaption = 'N°002 Pik';
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.id = this.currentIndex++;
    monster2.name = 'Car';
    monster2.image = 'img/monster2.png';
    monster2.type = MonsterType.PLANT;
    monster2.hp = 100;
    monster2.figureCaption = 'N°007 Car';
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = this.currentIndex++;
    monster3.name = 'RO';
    monster3.image = 'img/monster2.png';
    monster3.type = MonsterType.FIRE;
    monster3.hp = 100;
    monster3.figureCaption = 'N°008 Ro';
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.id = this.currentIndex++;
    monster4.name = 'Li';
    monster4.image = 'img/monster2.png';
    monster4.type = MonsterType.WATER;
    monster4.hp = 100;
    monster4.figureCaption = 'N°007 Li';
    this.monsters.push(monster4);
  }

  getAll(): Monster[] {
    return this.monsters.map((monster) => monster.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find((m) => m.id === id);
    return monster ? monster.copy() : undefined;
  }

  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();
    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy.copy());
    this.currentIndex++;

    this.save();

    return monsterCopy;
  }

  update(monster: Monster): Monster {
    const monsterCopy = monster.copy();

    const monsterIndex = this.monsters.findIndex(
      (originalMonster) => originalMonster.id === monster.id
    );

    if (monsterIndex !== -1) {
      this.monsters[monsterIndex] = monsterCopy.copy();
    }

    this.save();

    return monsterCopy;
  }

  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(
      (originalMonster) => originalMonster.id === id
    );

    if (monsterIndex !== -1) {
      this.monsters.splice(monsterIndex, 1);
      this.save();
    }
  }
}
