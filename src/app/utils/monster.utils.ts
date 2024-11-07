export enum MonsterType {
  PLANT = 'plant',
  ELECTRIC = 'electric',
  FIRE = 'fire',
  WATER = 'water',
}

export interface IMonsterProperties {
  imageUrl: string;
  color: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
  [MonsterType.PLANT]: {
    imageUrl: '/img/plant.png',
    color: 'rgb(135,255,124)',
  },
  [MonsterType.WATER]: {
    imageUrl: '/img/plant.png',
    color: 'rgb(118,134,124)',
  },
  [MonsterType.FIRE]: {
    imageUrl: '/img/electric.png',
    color: 'rgb(255,104,104)',
  },
  [MonsterType.ELECTRIC]: {
    imageUrl: '/img/electric.png',
    color: 'rgb(255,255,124)',
  },
};
