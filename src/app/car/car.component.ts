import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Car } from '../car';
import { CarService } from '../car.service';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {

  constructor(private location: Location, private carService: CarService) { }

  cars: Car[];

  ngOnInit() {
    this.getCars();
  }

  goBack(): void {
    this.location.back();
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }

}