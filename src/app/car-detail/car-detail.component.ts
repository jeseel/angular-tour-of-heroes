import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CarService } from '../car.service';



@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  carDetail: Car;

  ngOnInit() {
    this.getcar();
  }


  getcar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => {
        this.carDetail = car;
        console.log(car);
      });
  }



  goBack(): void {
    this.location.back();
  }

}
