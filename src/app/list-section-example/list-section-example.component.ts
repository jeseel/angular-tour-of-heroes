import { Component } from '@angular/core';

@Component({
  selector: 'list-section-example',
  templateUrl: './list-section-example.component.html',
  styleUrls: ['./list-section-example.component.css']
})
export class ListSectionExampleComponent {

  folders = [
    { name: 'Photos', updated: new Date('5/30/18') },
    { name: 'Recipes', updated: new Date('5/29/18') },
    { name: 'Work', updated: new Date('5/28/18') }
  ];

  notes = [
    { name: 'Vacation Itinerary', updated: new Date('4/10/18') },
    { name: 'Kitchen Remodel', updated: new Date('4/11/18') }
  ]
}
