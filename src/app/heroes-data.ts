import { Hero } from './hero';
import { v4 as uuidv4 } from 'uuid';

export const HEROES: Hero[] = [
  { id: uuidv4(), name: 'Iron Man' },
  { id: uuidv4(), name: 'Thor' },
  { id: uuidv4(), name: 'Spiderman' },
  { id: uuidv4(), name: 'Captain America' },
  { id: uuidv4(), name: 'Black Widow' },
  { id: uuidv4(), name: 'Magneto' },
  { id: uuidv4(), name: 'Hulk' },
  { id: uuidv4(), name: 'Wolverine' },
  { id: uuidv4(), name: 'Storm' },
  { id: uuidv4(), name: 'Black Panther' }
];
