import { Component } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list-component.html',
})
export class EventListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    date: '9/12/2021',
    time: '10:00 am',
    price: 56.0,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '045 DT',
      city: 'London',
      country: 'England',
    },
  };
}
