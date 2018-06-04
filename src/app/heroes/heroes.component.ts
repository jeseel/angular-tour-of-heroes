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
 
  heroes: Hero[];
 
  ngOnInit() {
    //  Call the Service.
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
      // this.heroes = this.heroService.getHeroes();
  }
}
