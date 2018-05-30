import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';


// Service
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  constructor(private heroService:HeroService) { }
 

  selectedHero: Hero;
  heroes: Hero[];
 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
      this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    //  Call the Service.
    this.getHeroes();
  }
}
