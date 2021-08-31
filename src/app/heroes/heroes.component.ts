import { Component, OnInit } from '@angular/core';
import {HEROES} from "../heroes-data";
import {Hero} from "../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero? : Hero

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero:Hero) {
    this.selectedHero = hero;
  }
}
